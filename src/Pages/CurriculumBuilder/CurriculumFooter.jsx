import React from 'react'

const CurriculumFooter = () => {
  return (
    <footer className="border-t border-gray-200 px-8 py-6 mt-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {['Política de Privacidad', 'Directrices para los Profesores', 'Especificaciones de Media'].map((link) => (
            <a key={link} href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>NEXUS ENGINE V2.4</span>
          <span className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
    </footer>
  )
}

export default CurriculumFooter
