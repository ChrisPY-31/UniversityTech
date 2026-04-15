import React from 'react'
import { FaPlus } from 'react-icons/fa'

const WelcomeSection = () => {
  return (
    <section className="flex justify-between items-start">
      <div>
        <p className="text-sm font-bold text-blue-700 tracking-widest uppercase">
          Bienvenido de nuevo, Dr. Gabito
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          Tu plan de estudios está que vuela.
        </h2>
        <p className="text-gray-500 mt-2">
          Este mes has recibido 50 nuevo enrolamientos de personas que desean aprender.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
        <FaPlus className="text-sm" />
        Subir un nuevo curso
      </button>
    </section>
  )
}

export default WelcomeSection