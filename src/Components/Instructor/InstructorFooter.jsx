import React from 'react'

const InstructorFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-6 mt-auto">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </span>
            Nexus Tech
          </h3>
          <p className="text-sm text-gray-500 mt-1">© 2026 Nexus Tech University. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400">Aprender nunca fue tan fácil.</p>
        </div>
        <div className="flex items-center gap-6">
          {['Política de Privacidad', 'Términos de Servicio', 'Accesibilidad', 'Contacta Soporte Técnico'].map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default InstructorFooter