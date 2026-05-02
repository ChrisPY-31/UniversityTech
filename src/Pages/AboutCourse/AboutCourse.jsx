import React, { useState } from "react";
import CourseDescription from "../../components/AboutCourse/CourseDescription";
import ModuleSection from "../../components/ModuleSection";
import { HiPlay, HiOutlineClock } from "react-icons/hi";
import { INITIAL_MODULES } from "../../datos";
import CoursesCard from "@/components/Courses/CoursesCard";

const AboutCourse = () => {
  const [modules] = useState(INITIAL_MODULES);
  const courses = [
    {
      id: 1,
      title: "Curso de desarrollo web",
      description: "Descubre que técnias y métodos existen...",
      image: "https://i.ytimg.com/vi/bYOjmW-740M/maxresdefault.jpg",
      level: "INTERMEDIATE",
      duration: "28h 40m",
      rating: 4.1,
    },
  ];
  return (
    <section className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 text-[#E6EDF3] py-8">
      <CourseDescription />
      <div>
        <div>
          {courses.map((course) => {
            return (
              <CoursesCard
                key={course.id}
                titulo={course.title}
                descripcion={course.description}
                imagen={course.image}
                puntuacion={course.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8 col-start-1 col-end-3">
        {modules.map((module) => (
          <ModuleSection key={module.id} module={module}>
            {module.lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center gap-3 px-5 py-3 border-t border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <HiPlay className="text-blue-500 flex-shrink-0" />
                <span className="flex-1 text-sm text-gray-800">
                  {lesson.title}
                </span>
                {lesson.duration && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <HiOutlineClock />
                    {lesson.duration}
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
