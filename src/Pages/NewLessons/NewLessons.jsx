import React, { useState } from "react";
import CurriculumHeader from "../../components/NewLessons/CurriculumHeader";
import CourseCreationStepper from "../../Components/NewCourse/CourseCreationStepper";
import ModuleSection from "../../components/ModuleSection";
import LessonCard from "../../components/NewLessons/LessonCard";
import AddSectionModal from "../../components/NewLessons/AddSectionModal";
import AddLessonModal from "../../components/NewLessons/AddLessonModal";
import { FaPen, FaTrash, FaGripVertical, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setAddNewLessons } from "@/store/Reducer/CourseSlice";
import toast from "react-hot-toast";

const NewLessons = () => {
  const [modules, setModules] = useState([]);
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const dispatch = useDispatch();

  const handleAddSection = (sectionData) => {
    const newModule = {
      id: Date.now(),
      number: modules.length + 1,
      title: sectionData.title,
      description: sectionData.description,
      videos: [],
    };
    setModules([...modules, newModule]);
  };

  const handleAddLesson = (videoData) => {
    setModules(
      modules.map((mod) => {
        if (mod.id === activeModuleId) {
          return {
            ...mod,
            videos: [
              ...mod.videos,
              {
                id: Date.now(),
                title: videoData.title,
                description: videoData.description,
                status: "uploading",
                progress: "0%",
                estimated: "Procesando...",
                urlVideo: videoData.video,
              },
            ],
          };
        }
        return mod;
      }),
    );
  };

  const openLessonModal = (moduleId) => {
    setActiveModuleId(moduleId);
    setLessonModalOpen(true);
  };

  const handlePublishedCourse = () => {
    console.log("entroooo");
    if(Object.keys(modules).length === 0){
      toast.error("No has agregado lecciones");
      return;
    }

    const mapNewLesson = modules.map((module) => ({
      idCourse: 0,
      title: module.title,
      description: module.description,
      video: module.videos.map((video) => ({
        idLesson: 0,
        title: video.title,
        description: video.description,
        urlVideo: video.urlVideo,
        durationSeg: 0,
        published: true,
      })),
    }));
    dispatch(setAddNewLessons(mapNewLesson))
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CourseCreationStepper />
      <CurriculumHeader
        onAddSection={() => setSectionModalOpen(true)}
        handlePublishedCourse={handlePublishedCourse}
      />

      <div className="flex-1 px-8 py-4">
        {modules.map((module) => (
          <ModuleSection
            key={module.id}
            module={module}
            leading={<FaGripVertical className="text-gray-300 cursor-grab" />}
            actions={
              <>
                <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                  <FaPen className="text-sm" />
                </button>
                <button className="w-9 h-9 rounded-lg border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors">
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
                Añadir Nueva Sección
              </button>
            }
          >
            {module.videos.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </ModuleSection>
        ))}
      </div>

      <AddSectionModal
        isOpen={sectionModalOpen}
        onClose={() => setSectionModalOpen(false)}
        onSave={handleAddSection}
      />

      <AddLessonModal
        isOpen={lessonModalOpen}
        onClose={() => setLessonModalOpen(false)}
        onSave={handleAddLesson}
      />
    </div>
  );
};

export default NewLessons;
