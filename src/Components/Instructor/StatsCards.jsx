import React from 'react'
import { FaUsers, FaStar } from 'react-icons/fa'

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <FaUsers className="text-blue-900 text-lg" />
          </div>
          <span className="text-green-500 text-sm font-semibold">+12%</span>
        </div>
        <p className="text-sm text-gray-500">Total de Estudiantes</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">150</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <FaStar className="text-green-600 text-lg" />
          </div>
          <span className="text-sm text-gray-400">Top 5%</span>
        </div>
        <p className="text-sm text-gray-500">Calificación de Cursos</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">4.9/5.0</p>
      </div>
      <div className="bg-blue-900 rounded-xl p-6 text-white">
        <p className="text-sm text-blue-200">Total de Ingresos</p>
        <p className="text-3xl font-bold mt-2">$2</p>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-blue-900 bg-blue-700" />
            <div className="w-8 h-8 rounded-full border-2 border-blue-900 bg-blue-600" />
            <div className="w-8 h-8 rounded-full border-2 border-blue-900 bg-blue-500" />
          </div>
          <span className="text-sm text-blue-200">Pagos recientes</span>
        </div>
      </div>
    </div>
  )
}

export default StatsCards