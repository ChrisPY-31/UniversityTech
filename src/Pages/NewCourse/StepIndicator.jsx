import React from 'react'
/*Current Step recibe números. Según el número que recibe el círculo y el texto del se ven en un color 
diferentes y los demás permanecen en otro. Componente reutilizable que no necesita saber en que página está y que sólo recibe el número */
const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, label: 'Info Básica' },
        { number: 2, label: 'Curriculum' },
        { number: 3, label: 'Tarifas' },
    ]

    return (
        <div className="flex items-center justify-center gap-4 py-6">
            {steps.map((step, index) => ( // Envuelve en algo los elementos iterativos
                // React-Fragment es un contenedor invisible, no necesita de div extras ya que sólo agrupa elementos
                <React.Fragment key={step.number}>
                    <div className="flex items-center gap-2">
                        <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                            ${currentStep === step.number
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-gray-200 text-gray-500'
                                }`}
                        >
                            {step.number}
                        </span>
                        <span
                            className={`text-sm font-medium
                            ${currentStep === step.number
                                    ? 'text-gray-900'
                                    : 'text-gray-400'
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                    {index < steps.length - 1 && (// Línea separador condicional. Si la condición es verdader mostrar index
                        <div className="w-16 h-px bg-gray-300" />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default StepIndicator
