import React from 'react'
import CourseCreationStepper from '@/Components/NewCourse/CourseCreationStepper'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useCourses } from '@/hooks/useCourses'
import { useSelector } from 'react-redux'

const PublishCourse = () => {
  const navigate = useNavigate()
    const {savefetchCourse} = useCourses();
    const {newCourse} = useSelector(state => state.courses)

  const handlePublishCourse = () => {
    
    savefetchCourse(newCourse);
    // TODO: agregar lógica de publicación aquí
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseCreationStepper />

      <div className="flex flex-col items-center justify-center py-24 gap-6">
        <h1 className="text-3xl font-bold text-gray-900">Publicar Curso</h1>
        <p className="text-gray-500 text-sm max-w-md text-center">
          Revisa que tu curso esté completo antes de publicarlo. Una vez publicado estará disponible para los estudiantes.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/cursos/curriculum')}
          >
            Regresar
          </Button>
          <Button
            onClick={handlePublishCourse}
            className="bg-[#0047AB] hover:bg-[#113971] text-white px-8 py-3 text-sm font-bold cursor-pointer"
          >
            Publicar Curso
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PublishCourse
