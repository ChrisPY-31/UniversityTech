import React, { useState } from "react";
import CourseDescription from "../../components/AboutCourse/CourseDescription";
import ModuleSection from "../../components/ModuleSection";
import { HiPlay, HiOutlineClock } from "react-icons/hi";
import { useSelector } from "react-redux";
import { INITIAL_MODULES } from "../../datos";
import CoursesCard from "@/components/Courses/CoursesCard";
import { useVideos } from "@/hooks/useVideos";

const AboutCourse = () => {
  const [modules] = useState(INITIAL_MODULES);
  const {coursesDesc} = useSelector(state => state.courses)
  const {getLessonsVideos} = useVideos();

  const handleWatchVideo = () =>{ 
    getLessonsVideos();
  } 

  return (
    <section className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 text-[#E6EDF3] py-8">
      <CourseDescription 
      id={coursesDesc.idCourse}
      titulo={coursesDesc.title}
      publicado={coursesDesc.create} 
      nivel={coursesDesc.nevel}
      clases={20} //aqui tiene que ir las lessiones
      descripcion={coursesDesc.description}
      handleVideo={()=>handleWatchVideo()}
      />
      <div>
        <div>
          {<CoursesCard
                key={coursesDesc.idCourse}
                id={coursesDesc.idCourse}
                titulo={coursesDesc.title}
                descripcion={coursesDesc.description}
                imagen={coursesDesc.image}
              />}    
        </div>
      </div>
      <div className="mt-8 col-start-1 col-end-3">
        {coursesDesc.lessons.map((module) => (
          <ModuleSection key={module.idLesson} module={module}>
            {module.videos.map((lesson) => (
              <div
                key={lesson.idVideo}
                className="flex items-center gap-3 px-5 py-3 border-t border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <HiPlay className="text-blue-500 flex-shrink-0" />
                <span className="flex-1 text-sm text-gray-800">
                  {lesson.title }
                </span>

                {lesson?.duration && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <HiOutlineClock />
                    {lesson?.duration}
                  </span>
                )}
              </div>
            ))}
          </ModuleSection>
        ))}
      </div>
    </section>
  );
};

export default AboutCourse;
