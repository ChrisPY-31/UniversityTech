import React from 'react'

const VisibilityStatus = ({ visibility, setVisibility }) => {
    return (
        <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-1">Visibilidad y Status</h3>
            <p className="text-sm text-gray-500 mb-4">
                Controla cómo y cuándo se muestra el curso a los estudiantes
            </p>
            <div className="flex gap-2">
                <button
                    onClick={() => setVisibility('Draft')}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors
                    ${visibility === 'Draft'
                            ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                            : 'bg-transparent text-gray-500 hover:bg-gray-100'
                        }`}
                >
                    Borrador
                </button>
                <button
                    onClick={() => setVisibility('Published')}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors
                    ${visibility === 'Published'
                            ? 'bg-white text-gray-900 border border-gray-300 shadow-sm'
                            : 'bg-transparent text-gray-500 hover:bg-gray-100'
                        }`}
                >
                    Publicado
                </button>
            </div>
        </div>
    )
}

export default VisibilityStatus
