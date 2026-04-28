import React, { useState } from 'react'
import { FaTimes, FaCloudUploadAlt, FaClock, FaInfoCircle } from 'react-icons/fa'

const AddLessonModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('')
  const [video, setVideo] = useState(null)
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')

  if (!isOpen) return null

  const handleVideoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setVideo(file.name)
    }
  }

  const handleSave = () => {
    if (title.trim()) {
      onSave({ title, video, duration, description })
      setTitle('')
      setVideo(null)
      setDuration('')
      setDescription('')
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 animate-[fadeIn_0.2s_ease-out]" onClick={onClose} />

      <div className="relative bg-white rounded-2xl w-full max-w-xl shadow-xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
        <div className="px-8 py-6">
          <span className="text-xs font-bold text-teal-600 bg-teal-100 px-3 py-1 rounded-full uppercase tracking-wider">
            Nueva Lección
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mt-3">Añadir Nueva Lección</h2>
          <p className="text-sm text-gray-500 mt-1">
            Configura los detalles de tu contenido educativo de alto nivel.
          </p>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <div className="px-8 pb-6 space-y-5">
          <div>
            <label className="block text-sm font-bold text-blue-900 mb-2">
              Título de la lección
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej. Optimización de Microservicios con Stratum"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-blue-900 mb-2">
                Video de la lección
              </label>
              <label className="block border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-blue-400 transition-colors">
                {video ? (
                  <p className="text-sm text-green-600 font-medium">{video}</p>
                ) : (
                  <div>
                    <FaCloudUploadAlt className="text-3xl text-teal-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Arrastra tu video aquí</p>
                    <p className="text-xs text-gray-400 mt-1">MP4, MOV o WebM (Máx. 2GB)</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="w-44">
              <label className="flex items-center gap-1 text-sm font-bold text-blue-900 mb-2">
                <FaClock className="text-blue-400" />
                Duración estimada
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="00"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">
                  MIN
                </span>
              </div>
              <div className="mt-3 bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700 flex gap-2">
                  <FaInfoCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                  Los videos optimizados aumentan la retención de los estudiantes en un 40%.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-blue-900 mb-2">
              Descripción breve
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe los objetivos clave de aprendizaje para esta lección..."
              rows={3}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>
        </div>

        <div className="px-8 py-5 flex items-center justify-center gap-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-6 py-3 text-sm font-bold text-gray-700 hover:text-gray-900 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-lg bg-blue-900 text-white text-sm font-bold hover:bg-blue-800 transition-colors"
          >
            Crear Lección →
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddLessonModal
