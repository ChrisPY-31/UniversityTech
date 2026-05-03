import React from 'react'
import { FaEye, FaUpload, FaPlus } from 'react-icons/fa'

const CurriculumHeader = ({ onAddSection }) => {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <span className="uppercase tracking-wider font-medium">Cursos</span>
        <span>{'>'}</span>
        <span className="uppercase tracking-wider font-medium text-blue-900">Arquitectura avanzada de sistemas</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Plan de Estudios <span className="text-blue-600 italic"></span>
          </h1>
          <p className="text-gray-500 mt-2 max-w-lg">
            Diseña y estructura tu itinerario formativo. Gestiona módulos, lecciones y recursos multimedia en un entorno de alto rendimiento.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <FaEye />
            Vista Previa
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 text-white text-sm font-bold hover:bg-blue-800 transition-colors">
            <FaUpload />
            Publicar curso
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-300 text-sm text-green-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            12 Lecciones Publicadas
          </span>
          <span className="px-4 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600 font-medium">
            4 Borradores
          </span>
        </div>
        <button
          onClick={onAddSection}
          className="flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors"
        >
          <FaPlus />
          Añadir Nueva Lección
        </button>
      </div>
    </div>
  )
}

export default CurriculumHeader
