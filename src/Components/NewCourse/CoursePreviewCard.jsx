import React from 'react'

const CoursePreviewCard = ({ title, thumbnail, difficulty, visibility }) => {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="h-40 bg-gradient-to-br from-blue-900 to-teal-600">
                {thumbnail ? (
                    <img src={thumbnail}
                        alt="course preview"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                            <span className="text-white/60 text-2xl"></span>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-blue-900 px-4 py-4 text-white">
                <div className="flex gap-2 mb-2">
                    {visibility && (
                        <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded font-medium">
                            NUEVO CURSO
                        </span>
                    )}
                    {difficulty && (
                        <span className="text-xs bg-gray-500 text-white px-2 py-0.5 rounded font-medium">
                            {difficulty}
                        </span>
                    )}
                    {visibility && (
                        <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded font-medium">
                            {visibility === 'Draft' ? 'Borrador' : 'Publicado'}
                        </span>
                    )}
                </div>

                <h4 className="font-bold text-lg">
                    {title || 'El título del curso aparecerá aquí'}
                </h4>

                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/30" />
                        <span className="text-sm text-white/70">Nombre del Intructor</span>
                    </div>
                    <span className="text-sm font-bold text-teal-400">GRATIS</span>
                </div>
            </div>
        </div>
    )
}

export default CoursePreviewCard
