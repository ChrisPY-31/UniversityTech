import React, { useState } from "react";
import { courses } from "../../datos";

const Courses = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="mt-10 ">

      <h2 className="text-xl font-bold text-white mb-4">
        Cursos Populares
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {courses.map((course) => (
          <div
            key={course.id}
            onMouseEnter={() => setHovered(course.id)}
            onMouseLeave={() => setHovered(null)}
            className={`relative rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden cursor-pointer
              transition-all duration-300 ease-out
              ${hovered === course.id ? "scale-[1.03] shadow-2xl border-gray-600" : "scale-100 shadow-md"}
            `}
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />

            <div className="p-6 flex flex-col gap-4">

              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {course.emoji}
                </div>

                <span
                  className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full bg-gradient-to-r ${course.color} text-white`}
                >
                  {course.badge}
                </span>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg">
                  {course.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {course.description}
                </p>
              </div>

              <button
                className={`mt-2 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${course.color}
                opacity-0 translate-y-2 transition-all duration-300
                ${hovered === course.id ? "opacity-100 translate-y-0" : ""}`}
              >
                Ver curso →
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Courses;