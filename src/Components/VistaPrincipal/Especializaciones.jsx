import React, { useState } from "react";
import { courses } from "../../datos";

const Especializaciones = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <span className="inline-block text-2xl font-semibold tracking-widest uppercase text-cyan-400 mb-3">
          Especializaciones
        </span>
        <p className=" text-gray-400 text-base max-w-xl mx-auto">
          Cursos diseñados para llevarte del fundamento a la industria en el área que más te apasiona.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {/* Gradient top strip */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${course.color}`} />

            {/* Card body */}
            <div className="p-6 flex flex-col gap-4">
              {/* Icon + Badge */}
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {course.emoji}
                </div>
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${course.color} text-white opacity-90`}
                >
                  {course.badge}
                </span>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-white font-bold text-lg leading-snug">
                  {course.name}
                </h2>
                <p className="mt-1.5 text-gray-400 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* CTA */}
              <button
                className={`mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${course.color}
                  opacity-0 translate-y-2 transition-all duration-300
                  ${hovered === course.id ? "opacity-100 translate-y-0" : ""}
                `}
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

export default Especializaciones;
