import React, { useState, useEffect } from "react";
import CurriculumHeader from "../../components/NewLessons/CurriculumHeader";
import CourseCreationStepper from "../../components/NewCourse/CourseCreationStepper";
import ModuleSection from "../../components/ModuleSection";
import LessonCard from "../../components/NewLessons/LessonCard";
import AddSectionModal from "../../components/NewLessons/AddSectionModal";
import AddLessonModal from "../../components/NewLessons/AddLessonModal";
import { FaPen, FaTrash, FaGripVertical, FaPlus } from "react-icons/fa";
import { useCourses } from "@/hooks/useCourses";
import { getLessonsByCourse } from "@/Services/lessonsService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewLessons = () => {
  const [modules, setModules] = useState([]);
  const [loadingLessons, setLoadingLessons] = useState(true);
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [editingModule, setEditingModule] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);
  const navigate = useNavigate();
  const { fetchSaveSection, fetchSaveVideo, fetchUpdateLesson, fetchDeleteLesson, fetchUpdateVideo, fetchDeleteVideo } = useCourses();

  useEffect(() => {
    const idCourse = localStorage.getItem("idCourse");
    if (!idCourse) {
      setLoadingLessons(false);
      return;
    }

    getLessonsByCourse(idCourse)
      .then((lessons) => {
        if (!lessons || lessons.length === 0) return;
        const mapped = lessons.map((lesson, index) => ({
          id: lesson.idLesson,
          idLesson: lesson.idLesson,
          number: index + 1,
          title: lesson.title,
          description: lesson.description,
          videos: (lesson.videos ?? []).map((video) => ({
            id: video.idVideo,
            idVideo: video.idVideo,
            idLesson: lesson.idLesson,
            title: video.title,
            description: video.description,
            status: "uploaded",
            urlVideo: video.urlVideo,
          })),
        }));
        setModules(mapped);
      })
      .catch(() => toast.error("Error al cargar las lecciones"))
      .finally(() => setLoadingLessons(false));
  }, []);

  const handleAddSection = async (sectionData) => {
    const lessonCreated = await fetchSaveSection(sectionData);
    const newModule = {
      id: lessonCreated.idLesson,
      idLesson: lessonCreated.idLesson,
      number: modules.length + 1,
      title: sectionData.title,
      description: sectionData.description,
      videos: [],
    };
    setModules((prev) => [...prev, newModule]);
  };

  const handleEditSection = async (sectionData) => {
    await fetchUpdateLesson(editingModule.idLesson, {
      idCourse: Number(localStorage.getItem("idCourse")),
      title: sectionData.title,
      description: sectionData.description,
    });
    setModules((prev) =>
      prev.map((mod) =>
        mod.id === editingModule.id
          ? { ...mod, title: sectionData.title, description: sectionData.description }
          : mod,
      ),
    );
    setEditingModule(null);
  };

  const handleDeleteSection = async (module) => {
    const deleted = await fetchDeleteLesson(module.idLesson);
    if (deleted) {
      setModules((prev) => prev.filter((m) => m.id !== module.id));
    }
  };

  const openEditModal = (module) => {
    setEditingModule(module);
    setSectionModalOpen(true);
  };

  const handleEditVideo = async (videoData) => {
    await fetchUpdateVideo(
      editingVideo.idVideo,
      {
        idVideo: editingVideo.idVideo,
        idLesson: editingVideo.idLesson,
        title: videoData.title,
        description: videoData.description,
        durationSeg: Number(videoData.duration) || 0,
      },
      videoData.video,
    );
    setModules((prev) =>
      prev.map((mod) => ({
        ...mod,
        videos: mod.videos.map((v) =>
          v.id === editingVideo.id
            ? { ...v, title: videoData.title, description: videoData.description }
            : v,
        ),
      })),
    );
    setEditingVideo(null);
  };

  const handleDeleteVideo = async (video) => {
    const deleted = await fetchDeleteVideo(video.idVideo);
    if (deleted) {
      setModules((prev) =>
        prev.map((mod) => ({
          ...mod,
          videos: mod.videos.filter((v) => v.id !== video.id),
        })),
      );
    }
  };

  const handleAddLesson = async (videoData) => {
    const activeModule = modules.find((m) => m.id === activeModuleId);
    if (!activeModule?.idLesson) return;

    const videoCreated = await fetchSaveVideo(activeModule.idLesson, videoData, videoData.video);

    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id === activeModuleId) {
          return {
            ...mod,
            videos: [
              ...mod.videos,
              {
                id: videoCreated.idVideo,
                idVideo: videoCreated.idVideo,
                idLesson: activeModule.idLesson,
                title: videoData.title,
                description: videoData.description,
                status: "uploaded",
                urlVideo: videoData.video instanceof File ? videoData.video.name : videoData.video,
              },
            ],
          };
        }
        return mod;
      }),
    );
  };

  const openLessonModal = (moduleId) => {
    setEditingVideo(null);
    setActiveModuleId(moduleId);
    setLessonModalOpen(true);
  };

  const openEditVideoModal = (video) => {
    setEditingVideo(video);
    setLessonModalOpen(true);
  };

  const handlePublishedCourse = () => {
    if (modules.length === 0) {
      toast.error("No has agregado lecciones");
      return;
    }
    navigate("/cursos/publicar");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CourseCreationStepper />
      <CurriculumHeader
        onAddSection={() => { setEditingModule(null); setSectionModalOpen(true); }}
        handlePublishedCourse={handlePublishedCourse}
      />

      <div className="flex-1 px-8 py-4">
        {loadingLessons ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm">Cargando lecciones...</p>
          </div>
        ) : (
          modules.map((module) => (
            <ModuleSection
              key={module.id}
              module={module}
              leading={<FaGripVertical className="text-gray-300 cursor-grab" />}
              actions={
                <>
                  <button
                    onClick={() => openEditModal(module)}
                    className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    <FaPen className="text-sm" />
                  </button>
                  <button
                    onClick={() => handleDeleteSection(module)}
                    className="w-9 h-9 rounded-lg border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </>
              }
              footer={
                <button
                  onClick={() => openLessonModal(module.id)}
                  className="w-full p-4 border-t border-dashed border-gray-200 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 rounded-b-xl"
                >
                  <FaPlus className="text-xs" />
                  Añadir Lección
                </button>
              }
            >
              {module.videos.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  onEdit={openEditVideoModal}
                  onDelete={handleDeleteVideo}
                />
              ))}
            </ModuleSection>
          ))
        )}
      </div>

      <AddSectionModal
        isOpen={sectionModalOpen}
        onClose={() => { setSectionModalOpen(false); setEditingModule(null); }}
        onSave={editingModule ? handleEditSection : handleAddSection}
        initialValues={editingModule}
      />

      <AddLessonModal
        isOpen={lessonModalOpen}
        onClose={() => { setLessonModalOpen(false); setEditingVideo(null); }}
        onSave={editingVideo ? handleEditVideo : handleAddLesson}
        initialValues={editingVideo}
      />
    </div>
  );
};

export default NewLessons;
