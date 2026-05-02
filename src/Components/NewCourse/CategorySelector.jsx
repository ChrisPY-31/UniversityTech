import React from 'react'
const CategorySelector = ({ category, setCategory }) => {
    const categories = [
        'Computación en la Nube',
        'Desarrollo Web',
        'Ciencia de Datos',
        'Ciberseguridad',
        'Desarrollo Móvil',
        'DevOps'
    ]

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
            </label>
            <select //dropwdown, menú desplegable nativo de html con <option> para cada opción disponible 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                 //apearance-none quita estilo predeterminado de Tailwind 
                className="w-full px-4 py-3 bg-white rounded-lg text-sm text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
            >
                {categories.map((cat) => ( // .map() de categorias para en vez de usar <option> se recorrde mediamente map, agregandola solo al array
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector
