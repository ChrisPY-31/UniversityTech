import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const AddSectionModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [objectives, setObjectives] = useState('')

  if (!isOpen) return null

  const handleSave = () => {
    if (title.trim()) {
      onSave({ title, description, objectives })
      setTitle('')
      setDescription('')
      setObjectives('')
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 animate-[fadeIn_0.2s_ease-out]" onClick={onClose} />

      <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <div className="bg-blue-900 px-8 py-6 text-white">
          <p className="text-sm font-medium text-blue-300 uppercase tracking-wider">Nuevo Módulo</p>
          <h2 className="text-2xl font-bold mt-1">Añadir Nueva Sección</h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <div className="px-8 py-6 space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
              Título de la Sección
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej. Principios de Diseño Cuántico"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
              Descripción de la Sección
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe brevemente el alcance de este módulo..."
              rows={3}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
              Resumen de Objetivos
            </label>
            <textarea
              value={objectives}
              onChange={(e) => setObjectives(e.target.value)}
              placeholder={"• Identificar patrones críticos\n• Aplicar metodologías de flujo\n• Validar resultados estructurales"}
              rows={4}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>
        </div>

        <div className="px-8 py-5 flex items-center justify-center gap-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-3 text-sm font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-lg bg-blue-900 text-white text-sm font-bold hover:bg-blue-800 transition-colors"
          >
            Guardar Sección →
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddSectionModal
