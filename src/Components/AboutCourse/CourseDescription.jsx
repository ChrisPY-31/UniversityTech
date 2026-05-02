import React from "react";
import { Link } from "react-router-dom";
import CoursesCard from "../Courses/CoursesCard";

const CourseDescription = () => {


  return (
    <div className="text-[#E6EDF3] py-8 col-start-1 col-end-3">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            Curso Desarrollo Web para Diseñadores
          </h1>
          <p className="text-[#AAB4C0] mt-3 text-sm">
            Publicado el 07 de diciembre de 2025
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="border border-white/20 text-[#AAB4C0] px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            Nivel Básico
          </span>
          <span className="border border-white/20 text-[#AAB4C0] px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            20 clases
          </span>
          <span className="border border-white/20 text-[#AAB4C0] px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            4 horas de contenido
          </span>
          <span className="border border-white/20 text-[#AAB4C0] px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            12 horas de práctica
          </span>
        </div>

        <div className="text-[#AAB4C0] leading-relaxed text-[17px] pt-4">
          <p>
            Desarrolla habilidades para colaborar eficazmente con equipos de
            desarrollo web. Comprende conceptos clave como HTML, CSS,
            JavaScript, Git y más. Aprende a implementar diseños en Figma y
            optimizar tu comunicación técnica.
          </p>
        </div>

      </div>

     

      {/*   

      
      <div className="lg:col-span-1">
        <div className="bg-[#1A2238] border border-white/5 rounded-[20px] p-6 sticky top-24">
          
          <div className="w-full bg-[#121826] rounded-xl mb-6 overflow-hidden border border-white/10 flex items-center justify-center aspect-video">
            <img 
              src="https://i.ytimg.com/vi/bYOjmW-740M/maxresdefault.jpg" 
              alt="Preview del curso" 
              className="w-full h-full object-cover"
            />
          </div>

          <Link to={"/video-lecciones"} 
          className="w-full block text-center bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-white font-semibold py-3 rounded-xl hover:opacity-90 hover:-translate-y-1 transition-all duration-300 cursor-pointer" >
          Tomar curso 
          </Link>
          
          <p className="text-center text-xs text-[#AAB4C0] mt-4">
            Comenzar a aprender
          </p>

        </div>
      </div>

      */}
    </div>
  );
};

export default CourseDescription;
