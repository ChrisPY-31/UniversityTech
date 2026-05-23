import React, { useState } from "react";
import ActionButtons from "../../components/NewCourse/ActionButtons";
import CategorySelector from "../../components/NewCourse/CategorySelector";
import CoursePreviewCard from "../../components/NewCourse/CoursePreviewCard";
import DifficultyLevel from "../../components/NewCourse/DifficultyLevel";
import GeneralInfo from "../../components/NewCourse/GeneralInfo";
import ThumbnailUpload from "../../components/NewCourse/ThumbnailUpload";
import VisibilityStatus from "../../components/NewCourse/VisibilityStatus";
import CourseCreationStepper from "../../components/NewCourse/CourseCreationStepper";
import { useDispatch, useSelector } from "react-redux";
import { clearEditingCourse } from "@/store/Reducer/CourseSlice";
import { useNavigate } from "react-router-dom";
import { useCourses } from "@/hooks/useCourses";
import { Loader2 } from "lucide-react";

const NewCourse = () => {
  const { editingCourse } = useSelector((state) => state.courses);
  const { name } = useSelector((state) => state.user);
  const { fetchCreateOnlyCourse, fetchUpdateCourse } = useCourses();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(editingCourse?.title || "");
  const [description, setDescription] = useState(
    editingCourse?.description || "",
  );
  const [category, setCategory] = useState(
    editingCourse?.category || "Computación en la Nube",
  );
  const [difficulty, setDifficulty] = useState(
    editingCourse?.nevel || "Basico",
  );
  const [visibility, setVisibility] = useState(
    editingCourse?.visibility || false,
  );
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(
    editingCourse?.image || null,
  );
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = !!editingCourse;

  const handleNewCourse = async () => {
    if (!title || !description) {
      setMessage("Todos los campos son obligatorios");
      return;
    }
    if (!isEditing && !thumbnail) {
      setMessage("La imagen del curso es obligatoria");
      return;
    }

    setMessage("");
    setLoading(true);
    const instructorId = localStorage.getItem("idUser");

    try {
      if (isEditing) {
        await fetchUpdateCourse(editingCourse.id, {
          instructorId,
          title,
          description,
          category,
          nevel: difficulty,
          image: thumbnail ? thumbnail.name : editingCourse.image,
        });
        dispatch(clearEditingCourse());
      } else {
        const newCourse = {
          instructorId,
          title,
          description,
          category,
          nevel: difficulty,
          image: thumbnail.name,
          published: visibility,
          lessons: [],
        };
        await fetchCreateOnlyCourse(newCourse, thumbnail);
      }
      navigate("/instructor");
    } catch {
      // errors handled inside hook with Swal
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseCreationStepper />

      {loading && (
        <div className="fixed inset-0 bg-black/40 z-50 flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-14 h-14 text-white animate-spin" />
          <p className="text-white font-semibold text-lg">
            {isEditing ? "Actualizando curso..." : "Creando curso..."}
          </p>
        </div>
      )}

      {message && (
        <div className="bg-blue-50 relative z-50">
          <p className="text-red-500 text-lg text-center mt-1">{message}</p>
        </div>
      )}

      <div className="px-8 py-6">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <GeneralInfo
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
            />
            <div className="flex gap-6">
              <div className="flex-1">
                <CategorySelector
                  category={category}
                  setCategory={setCategory}
                />
              </div>
              <div className="flex-1">
                <DifficultyLevel
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                />
              </div>
            </div>
            <VisibilityStatus
              visibility={visibility}
              setVisibility={setVisibility}
            />
          </div>

          <div className="space-y-6">
            <ThumbnailUpload
              setThumbnail={setThumbnail}
              setThumbnailPreview={setThumbnailPreview}
            />
            <CoursePreviewCard
              title={title}
              nameInstructor={name}
              thumbnail={thumbnailPreview}
              difficulty={difficulty}
              visibility={visibility}
            />
          </div>
        </div>

        <div className="mt-8">
          <ActionButtons
            handleNewCourse={handleNewCourse}
            isEditing={isEditing}
          />
        </div>
      </div>

      <div className="text-center py-6 text-sm text-gray-400">
        Autoguardado a las 00:00hrs - Certificado por Nexus University
      </div>
    </div>
  );
};

export default NewCourse;
