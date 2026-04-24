import React from 'react'
import { FaBold, FaItalic, FaListUl, FaLink } from 'react-icons/fa'

const GeneralInfo = ({ title, setTitle, description, setDescription }) => { // Este componente recibe 4 props
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Información General</h3>

            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título del Curso <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={title}
                    // e es el evento, e.target es input donde se escribe y e.target.value es el texto actual
                    onChange={(e) => setTitle(e.target.value)} // Modificar título y detectar que digita el usuario en título
                    placeholder="Por ejemplo: Arquitectura avanzada de sistemas con Rust"
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción
                </label>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 border-b border-gray-200">
                        <button className="text-gray-500 hover:text-gray-700"><FaBold /></button>
                        <button className="text-gray-500 hover:text-gray-700"><FaItalic /></button>
                        <button className="text-gray-500 hover:text-gray-700"><FaListUl /></button>
                        <button className="text-gray-500 hover:text-gray-700"><FaLink /></button>
                    </div>
                    <textarea
                        value={description}
                        // // e es el evento, e.target es input donde se escribe y e.target.value es el texto actual
                        onChange={(e) => setDescription(e.target.value)} // Modificar descripción y detectar que digita el usuario en descripción
                        placeholder="Describe los objetivos del curso, el público destinatario y los resultados de aprendizaje clave..."
                        rows={5}
                        className="w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none resize-y"
                    />
                </div>
            </div>
        </div >
    )
}

export default GeneralInfo
