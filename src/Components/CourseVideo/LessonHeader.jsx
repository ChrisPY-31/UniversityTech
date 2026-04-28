import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineArrowRight } from "react-icons/hi";

const LessonHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <p className="text-[#AAB4C0] text-sm font-medium mb-1">
          Clase 1 de 24 <span className="mx-2">•</span> Curso Desarrollo Web
          para Diseñadores
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Fundamentos y Conceptos Clave
        </h1>
      </div>

      {/* botones ver clases y next */}
      <div className="flex items-center gap-3">
        <button className="bg-[#1A2238] border border-white/10 text-white font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm cursor-pointer">
          <HiOutlineMenuAlt2 className="w-4 h-4" />
          Ver clases
        </button>

        {/* ruta para siguiente video/leccion */}
        <Link
          to="#"
          className="bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-white font-semibold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm"
        >
          Siguiente clase
          <HiOutlineArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default LessonHeader;