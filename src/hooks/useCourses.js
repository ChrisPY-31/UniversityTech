import { useState, useEffect } from "react";
import {
  courseImageUpload,
  createCourse,
  deleteCourse,
  getCourseDescription,
  getCourses,
  updateCourse,
} from "@/Services/coursesServices";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCourseDesc } from "@/store/Reducer/CourseSlice";
import { saveLessons, updateLesson, deleteLesson } from "@/Services/lessonsService";
import { saveVideo, updateVideoCourse, updateVideoData, deleteVideo } from "@/Services/videosService";
import { clearPendingImage } from "@/store/pendingCourseImage";
import { clearPendingVideos, getPendingVideo } from "@/store/pendingVideoFiles";
import Swal from "sweetalert2";
import { getPerson } from "@/Services/personService";
import { setUser } from "@/store/Reducer/UserSlice";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const idCourse = localStorage.getItem("idCourse");

  const dispatch = useDispatch();

  const fetchCourses = async () => {
    setIsLoading(true);
    const data = await getCourses();
    setCourses(data);
    setIsLoading(false);
  };

  const courseById = async () => {
    try {
      const courseDescription = await getCourseDescription(idCourse);
      dispatch(setCourseDesc(courseDescription));
    } catch (err) {}
  };

  useEffect(() => {
    if (idCourse !== null) {
      courseById();
    }
  }, [idCourse]);

  const fetchCreateOnlyCourse = async (course, imageFile) => {
    const courseCreated = await createCourse(course).catch(() => {
      Swal.fire({ title: "Error", text: "Error al crear el curso", icon: "error" });
      throw new Error("createCourse");
    });

    if (imageFile) {
      await courseImageUpload(courseCreated.idCourse, imageFile).catch(() => {
        Swal.fire({ title: "Aviso", text: "Curso creado pero error al subir la imagen", icon: "warning" });
      });
      clearPendingImage();
    }

    localStorage.setItem("idCourse", courseCreated.idCourse);

    const userId = localStorage.getItem("idUser");
    const updatedUser = await getPerson(userId);
    dispatch(setUser(updatedUser));

    Swal.fire({ title: "¡Curso creado!", text: "El curso se creó exitosamente", icon: "success" });
    return courseCreated;
  };

  const fetchUpdateCourse = async (idCourse, course) => {
    await updateCourse(idCourse, course).catch(() => {
      Swal.fire({ title: "Error", text: "Error al actualizar el curso", icon: "error" });
      throw new Error("updateCourse");
    });

    const userId = localStorage.getItem("idUser");
    const updatedUser = await getPerson(userId);
    dispatch(setUser(updatedUser));

    Swal.fire({ title: "¡Actualizado!", text: "El curso se actualizó correctamente", icon: "success" });
  };

  const fetchDeleteLesson = async (idLesson) => {
    const result = await Swal.fire({
      title: "¿Eliminar lección?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return false;

    await deleteLesson(idLesson).catch(() => {
      Swal.fire({ title: "Error", text: "Error al eliminar la lección", icon: "error" });
      throw new Error("deleteLesson");
    });

    Swal.fire({ title: "Eliminada", text: "La lección fue eliminada.", icon: "success", timer: 1500, showConfirmButton: false });
    return true;
  };

  const fetchUpdateLesson = async (idLesson, data) => {
    await updateLesson(idLesson, data).catch(() => {
      toast.error("Error al actualizar la lección");
      throw new Error("updateLesson");
    });
  };

  const fetchUpdateVideo = async (idVideo, data, newFile) => {
    await updateVideoData(idVideo, data).catch(() => {
      toast.error("Error al actualizar el video");
      throw new Error("updateVideoData");
    });

    if (newFile instanceof File) {
      await updateVideoCourse(idVideo, newFile).catch(() => {
        toast.error("Error al subir el nuevo archivo de video");
      });
    }
  };

  const fetchDeleteVideo = async (idVideo) => {
    const result = await Swal.fire({
      title: "¿Eliminar video?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return false;

    await deleteVideo(idVideo).catch(() => {
      Swal.fire({ title: "Error", text: "Error al eliminar el video", icon: "error" });
      throw new Error("deleteVideo");
    });

    Swal.fire({ title: "Eliminado", text: "El video fue eliminado.", icon: "success", timer: 1500, showConfirmButton: false });
    return true;
  };

  const fetchSaveSection = async ({ title, description }) => {
    const idCourse = localStorage.getItem("idCourse");
    if (!idCourse) {
      toast.error("No se encontró el ID del curso");
      throw new Error("No idCourse");
    }

    const [lessonCreated] = await saveLessons([{
      idCourse: Number(idCourse),
      title,
      description,
      videos: [],
    }]).catch(() => {
      toast.error("Error al guardar la lección");
      throw new Error("saveLessons");
    });

    return lessonCreated;
  };

  const fetchSaveVideo = async (idLesson, videoData, videoFile) => {
    const [videoCreated] = await saveVideo(idLesson, [{
      idLesson: idLesson,
      title: videoData.title,
      description: videoData.description,
      urlVideo: videoFile instanceof File ? videoFile.name : videoFile,
      durationSeg: Number(videoData.duration) || 0,
      published: true,
    }]).catch(() => {
      toast.error("Error al guardar el video");
      throw new Error("saveVideo");
    });

    if (videoFile instanceof File) {
      await updateVideoCourse(videoCreated.idVideo, videoFile).catch(() => {
        toast.error("Error al subir el archivo de video");
      });
    }

    return videoCreated;
  };

  const fetchPublishLessons = async (newCourse) => {
    const idCourse = localStorage.getItem("idCourse");
    if (!idCourse) {
      Swal.fire({ title: "Error", text: "No se encontró el ID del curso", icon: "error" });
      return;
    }

    const lessonsMapped = newCourse.lessons.map((lesson) => ({
      ...lesson,
      idCourse: Number(idCourse),
    }));

    const lessonsCreated = await saveLessons(lessonsMapped).catch(() => {
      toast.error("Error al guardar las lecciones");
      throw new Error("saveLessons");
    });

    await Promise.all(
      lessonsCreated.map(async (lessonCreated, lessonIndex) => {
        const videos = lessonsMapped[lessonIndex].videos;
        const video2 = videos.map((video) => ({
          ...video,
          idLesson: lessonCreated.idLesson,
        }));

        const videosCreated = await saveVideo(lessonCreated.idLesson, video2).catch(() => {
          toast.error(`Error al guardar los videos de la lección ${lessonCreated.idLesson}`);
          throw new Error("saveVideo");
        });

        await Promise.all(
          videosCreated.map((videoCreated, videoIndex) => {
            const file = getPendingVideo(lessonIndex, videoIndex);
            if (!file) return Promise.resolve();
            return updateVideoCourse(videoCreated.idVideo, file).catch(() => {
              toast.error(`Error al subir el video ${videoCreated.idVideo}`);
              throw new Error("updateVideoCourse");
            });
          }),
        );
      }),
    );

    clearPendingVideos();

    Swal.fire({ title: "¡Publicado!", text: "Lecciones guardadas correctamente", icon: "success" });
  };

  const fetchDeleteCourse = (idCourse) => {
    setIsLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      try {
        const deleteCourseById = await deleteCourse(idCourse);
    
        if (result.isConfirmed && deleteCourseById === 204) {
          Swal.fire({
            title: "Deleted!",
            text: "Curso eliminado con existo",
            icon: "success",
          });
          const id = localStorage.getItem("idUser")
          await getPerson(id)
        }
      } catch (erro) {
        Swal.fire({
          title: "Error",
          text: "Error con el servidor intentelo mas tarde",
          icon: "error",
        });
        throw erro;
      }
    });
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, isLoading, courseById, fetchCreateOnlyCourse, fetchUpdateCourse, fetchPublishLessons, fetchSaveSection, fetchSaveVideo, fetchUpdateLesson, fetchDeleteLesson, fetchUpdateVideo, fetchDeleteVideo, fetchDeleteCourse };
};
