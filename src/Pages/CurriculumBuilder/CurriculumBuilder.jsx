import React, { useState } from 'react'
import CurriculumHeader from './CurriculumHeader'
import ModuleSection from './ModuleSection'
import AddSectionModal from './AddSectionModal'
import AddLessonModal from './AddLessonModal'
import CurriculumFooter from './CurriculumFooter'

const INITIAL_MODULES = [
  {
    id: 1,
    number: 1,
    title: 'Fundamentos de la Arquitectura Moderna',
    description: 'Introducción al enfoque nativo de la nube y a los patrones de escalabilidad.',
    lessons: [
      {
        id: 1,
        title: 'Introducción a los Sistemas Distribuidos',
        status: 'uploaded',
        duration: '08:24',
        modified: 'Modificado hace 2 horas',
      },
      {
        id: 2,
        title: 'Paradigmas de Latencia Frente a Rendimiento',
        status: 'uploading',
        progress: '65%',
        estimated: 'Se estima que queda 1 minuto',
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: 'Análisis en profundidad de los microservicios',
    description: 'Docker, Kubernetes y estrategias de orquestación.',
    lessons: [
      {
        id: 3,
        title: 'Containerización con Docker',
        status: 'uploaded',
        duration: '15:48',
        modified: 'Modificado ayer',
      },
    ],
  },
]

const CurriculumBuilder = () => {
  const [modules, setModules] = useState(INITIAL_MODULES)
  const [sectionModalOpen, setSectionModalOpen] = useState(false)
  const [lessonModalOpen, setLessonModalOpen] = useState(false)
  const [activeModuleId, setActiveModuleId] = useState(null)

  const handleAddSection = (sectionData) => {
    const newModule = {
      id: Date.now(),
      number: modules.length + 1,
      title: sectionData.title,
      description: sectionData.description,
      lessons: [],
    }
    setModules([...modules, newModule])
  }

  const handleAddLesson = (lessonData) => {
    setModules(modules.map((mod) => {
      if (mod.id === activeModuleId) {
        return {
          ...mod,
          lessons: [...mod.lessons, {
            id: Date.now(),
            title: lessonData.title,
            status: 'uploading',
            progress: '0%',
            estimated: 'Procesando...',
          }],
        }
      }
      return mod
    }))
  }

  const openLessonModal = (moduleId) => {
    setActiveModuleId(moduleId)
    setLessonModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CurriculumHeader onAddSection={() => setSectionModalOpen(true)} />

      <div className="flex-1 px-8 py-4">
        {modules.map((module) => (
          <ModuleSection
            key={module.id}
            module={module}
            onAddLesson={openLessonModal}
          />
        ))}
      </div>

      <CurriculumFooter />

      <AddSectionModal
        isOpen={sectionModalOpen}
        onClose={() => setSectionModalOpen(false)}
        onSave={handleAddSection}
      />

      <AddLessonModal
        isOpen={lessonModalOpen}
        onClose={() => setLessonModalOpen(false)}
        onSave={handleAddLesson}
      />
    </div>
  )
}

export default CurriculumBuilder
