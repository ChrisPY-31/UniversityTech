import React, { useState } from 'react'
import CourseCreationStepper from '@/components/NewCourse/CourseCreationStepper'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import Swal from 'sweetalert2'

const PublishCourse = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handlePublishCourse = async () => {
    setLoading(true)
    Swal.fire({
      title: '¡Curso publicado!',
      text: 'Tu curso ya está disponible para los estudiantes.',
      icon: 'success',
    }).then(() => {
      setLoading(false)
      navigate('/instructor')
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseCreationStepper />

      {loading && (
        <div className="fixed inset-0 bg-black/40 z-50 flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-14 h-14 text-white animate-spin" />
          <p className="text-white font-semibold text-lg">Publicando curso...</p>
        </div>
      )}

      <div className="flex flex-col items-center justify-center py-24 gap-6">
        <h1 className="text-3xl font-bold text-gray-900">Publicar Curso</h1>
        <p className="text-gray-500 text-sm max-w-md text-center">
          Revisa que tu curso esté completo antes de publicarlo. Una vez publicado estará disponible para los estudiantes.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/cursos/curriculum')}
            disabled={loading}
          >
            Regresar
          </Button>
          <Button
            onClick={handlePublishCourse}
            disabled={loading}
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
