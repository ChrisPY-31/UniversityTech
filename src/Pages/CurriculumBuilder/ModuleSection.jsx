import React from 'react'
import { FaPen, FaTrash, FaPlus, FaGripVertical } from 'react-icons/fa'
import LessonCard from './LessonCard'

const ModuleSection = ({ module, onAddLesson }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 mb-6">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <FaGripVertical className="text-gray-300 cursor-grab" />
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded uppercase tracking-wider">
            Module {module.number < 10 ? '0' + module.number : module.number}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <FaPen className="text-sm" />
          </button>
          <button className="w-9 h-9 rounded-lg border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors">
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>

      <div className="px-5 pb-2">
        <p className="text-sm text-gray-500">{module.description}</p>
      </div>

      {module.lessons.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}

      <button
        onClick={() => onAddLesson(module.id)}
        className="w-full p-4 border-t border-dashed border-gray-200 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 rounded-b-xl"
      >
        <FaPlus className="text-xs" />
        Añadir Nueva Lección
      </button>
    </div>
  )
}

export default ModuleSection
