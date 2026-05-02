import React from 'react'
const DifficultyLevel = ({ difficulty, setDifficulty }) => {
    const levels = ['Principiante', 'Intermedio', 'Avanzado']

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Nivel de dificultad
            </label>
            <div className="flex gap-2">
                {levels.map((level) => (
                    <button
                        key={level}
                        onClick={() => setDifficulty(level)} // Al hacer clic el usuario, se ejecuta el setDifficulty sólo si se presiona
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors
                    ${difficulty === level
                                ? 'bg-blue-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {level}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default DifficultyLevel
