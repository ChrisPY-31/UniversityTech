import React, { useState } from 'react';
import { 
  HiOutlineCheck, 
  HiPlay, 
  HiOutlineLockClosed, 
  HiChevronDown, 
  HiChevronUp 
} from "react-icons/hi";

const Playlist = () => {
  // 1. Estructura de datos agrupada por Módulos
  const courseData = [
    {
      id: "m1",
      title: "Introducción al Curso",
      lessonsCount: "3 clases",
      totalTime: "11 min",
      lessons: [
        { id: 1, title: "Introducción", time: "02:08", state: "completed" },
        { id: 2, title: "¿Cómo funcionará el curso?", time: "03:07", state: "completed" },
        { id: 3, title: "Instalaciones recomendadas", time: "05:39", state: "playing" },
      ]
    },
    {
      id: "m2",
      title: "Fundamentos y Conceptos Clave",
      lessonsCount: "4 clases",
      totalTime: "30 min",
      lessons: [
        { id: 4, title: "Modelo de Solicitud y Respuesta", time: "08:16", state: "locked" },
        { id: 5, title: "Frontend y Backend", time: "12:30", state: "locked" },
        { id: 6, title: "Conceptos de APIs", time: "07:16", state: "locked" },
        { id: 7, title: "Control de versiones con Git", time: "06:55", state: "locked" },
      ]
    }
  ];

  // 2. Estado para manejar qué módulos están abiertos (por defecto abrimos el primero 'm1')
  const [openModules, setOpenModules] = useState({
    m1: true 
  });

  // Función para abrir/cerrar un módulo
  const toggleModule = (moduleId) => {
    setOpenModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <div className="bg-[#1A2238] border border-white/5 rounded-xl p-6 h-full flex flex-col">
      
      <div className="flex justify-between items-end mb-6 pb-4 border-b border-white/10 shrink-0">
        <div>
          <h3 className="text-lg font-bold text-white">Contenido del curso</h3>
          <p className="text-xs text-[#AAB4C0] mt-1">Progreso: 25%</p>
        </div>
        <span className="text-xs font-bold bg-white/10 text-white px-2 py-1 rounded">
          1 / 7 Completado
        </span>
      </div>

      {/* Contenedor scrolleable para los módulos */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        
        {courseData.map((module) => (
          <div key={module.id} className="border border-white/5 rounded-lg bg-[#121826] overflow-hidden">
            
            {/* Header del Acordeón (Módulo) */}
            <div 
              onClick={() => toggleModule(module.id)}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div>
                <h4 className="font-semibold text-white text-sm">{module.title}</h4>
                <div className="flex items-center gap-2 text-xs text-[#AAB4C0] mt-1">
                  <span>{module.lessonsCount}</span>
                  <span>•</span>
                  <span>{module.totalTime}</span>
                </div>
              </div>
              <div className="text-[#AAB4C0]">
                {openModules[module.id] ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
              </div>
            </div>

            {/* Cuerpo del Acordeón (Lista de Lecciones con Línea de Tiempo) */}
            {openModules[module.id] && (
              <div className="p-4 pt-2 bg-[#1A2238]">
                
                {/* Contenedor de la línea vertical (Ahora anidado) */}
                <div className="relative border-l-2 border-white/10 ml-3 space-y-6 mt-2 pb-2">
                  
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="relative pl-6 cursor-pointer group">
                      
                      {/*Indicador de la barra de progreso */}
                      <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-[#1A2238] transition-all
                        ${lesson.state === 'completed' ? 'bg-[#00E5FF]' : ''}
                        ${lesson.state === 'playing' ? 'bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]' : ''}
                        ${lesson.state === 'locked' ? 'bg-[#121826] border-2 border-white/20' : ''}
                      `}></div>

                      {/* Tarjeta de la lección */}
                      <div className={`p-3 rounded-lg transition-colors border
                        ${lesson.state === 'playing' ? 'bg-[#00E5FF]/10 border-[#00E5FF]/30 -mt-3' : 'bg-transparent border-transparent group-hover:bg-white/5 -mt-1.5'}
                      `}>
                        <h5 className={`text-sm font-semibold mb-1 
                          ${lesson.state === 'playing' ? 'text-[#00E5FF]' : 'text-white'}
                          ${lesson.state === 'completed' ? 'text-[#AAB4C0] line-through decoration-white/30' : ''}
                          ${lesson.state === 'locked' ? 'text-[#AAB4C0]' : ''}
                        `}>
                          {lesson.id}. {lesson.title}
                        </h5>
                        
                        <div className="flex items-center gap-2 text-xs">
                          {lesson.state === 'completed' && (
                            <span className="text-[#00E5FF] flex items-center gap-1">
                              <HiOutlineCheck className="w-3 h-3" /> Completado
                            </span>
                          )}
                          {lesson.state === 'playing' && (
                            <span className="text-[#00E5FF] flex items-center gap-1">
                              <HiPlay className="w-3 h-3" /> Reproduciendo
                            </span>
                          )}
                          {lesson.state === 'locked' && (
                            <span className="text-gray-500 flex items-center gap-1">
                              <HiOutlineLockClosed className="w-3 h-3" /> {lesson.time}
                            </span>
                          )}
                          {lesson.state !== 'locked' && <span className="text-[#AAB4C0]">{lesson.time}</span>}
                        </div>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            )}
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default Playlist;