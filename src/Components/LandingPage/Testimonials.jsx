import React, { useState } from "react";
import {testimonials} from "../../datos";

const Testimonials = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screenpx-6 py-16">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-14 text-center">
        <span className="inline-block text-2xl font-semibold tracking-widest uppercase text-cyan-400 ">
          Testimonios
        </span>
        <p className="mt-3 text-gray-400 text-base max-w-xl mx-auto">
          Historias reales de personas que transformaron su carrera con nuestros
          cursos.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            onMouseEnter={() => setActive(t.id)}
            onMouseLeave={() => setActive(null)}
            className={`relative cursor-pointer rounded-2xl bg-gray-900 border overflow-hidden
              transition-all duration-300 ease-out card
              ${
                active === t.id
                  ? "border-gray-600 scale-[1.03] shadow-2xl shadow-black/50"
                  : "border-gray-800 scale-100"
              }`}
          >
            {/* Top accent */}
            <div className={`h-1 w-full bg-gradient-to-r ${t.color}`} />

            <div className="p-6 flex flex-col gap-4">
              {/* Quote icon */}
              <svg
                className={`w-8 h-8 bg-gradient-to-br ${t.color} rounded-lg p-1.5 text-white`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Comment */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "{t.comment}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-800" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-11 h-11 rounded-full border-2 bg-gray-800 object-cover transition-all duration-300
                    ${active === t.id ? "border-white/30" : "border-gray-700"}`}
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
