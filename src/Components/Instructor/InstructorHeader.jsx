import React from 'react'
import { FaSearch, FaBell, FaCog } from 'react-icons/fa'

const InstructorHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">Dashboard de Instructor</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input type="text" placeholder="Buscar..." className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-52" />
        </div>
        <button className="text-gray-500 hover:text-gray-700 transition-colors"><FaBell className="text-lg" /></button>
        <button className="text-gray-500 hover:text-gray-700 transition-colors"><FaCog className="text-lg" /></button>
        <div className="w-9 h-9 rounded-full bg-blue-900 border-2 border-blue-300 overflow-hidden">
          <img src="https://ui-avatars.com/api/?name=Dr+Aris&background=1e3a5f&color=fff&size=36" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  )
}

export default InstructorHeader