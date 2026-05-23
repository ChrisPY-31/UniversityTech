import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const ThumbnailUpload = ({ setThumbnail, setThumbnailPreview }) => {
    const [preview, setPreview] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setThumbnail(file) // Se guarda el File object real para enviarlo al servidor
            const url = URL.createObjectURL(file)
            setPreview(url)
            if (setThumbnailPreview) setThumbnailPreview(url) // Para preview en otros componentes
        }
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Miniatura del Curso</h3>

            <label className="block border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 transition-colors">
                {preview ? (
                    <img
                        src={preview}
                        alt="Thumbnail preview"
                        className="w-full h-40 object-cover rounded-lg"
                    />
                ) : ( // Ternario
                    <div>
                        <FaCloudUploadAlt className="text-4xl text-blue-400 mx-auto mb-3" />
                        <p className="text-sm font-bold text-gray-700">
                            Arrastra y suelta, o haz clic para subir
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            Archivo JPG o PNG de alta resolución (se recomienda una relación de aspecto de 16:9)
                        </p>
                    </div>
                )}
                <input // Input que permite:
                    type="file" // Permite subir archivos 
                    accept="image/*" // Permite que sólo sean imágenes
                    onChange={handleFileChange}
                    className="hidden" // Hace invisible para no usar el botón predeterminado del navegador
                />
            </label>

            <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                    Las miniaturas profesionales aumentan las inscirpciones hasta en 45%. Utiliza diseños de alto contraste
                </p>
            </div>
        </div>
    )
}

export default ThumbnailUpload
