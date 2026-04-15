import React from 'react'
import { FaSlidersH, FaTh } from 'react-icons/fa'
import CourseCard from './CourseCard'

const COURSES_DATA = [
  {
    id: 1,
    title: 'Pruebas y Mantenimiento de Software',
    description: 'Descubre que técnias y métodos existen...',
    image: 'https://ui-avatars.com/api/?name=QC&background=1e3a5f&color=fff&size=200',
    level: 'INTERMEDIATE',
    duration: '28h 40m',
    students: 75,
    rating: 4.1,
  },
  {
    id: 2,
    title: 'Ciencia de Datos e IA',
    description: 'Adentrate en la manipulación de datos para...',
    image: 'https://ui-avatars.com/api/?name=DS&background=2d5a3d&color=fff&size=200',
    level: 'ADVANCED',
    duration: '56h 30m',
    students: 75,
    rating: 3.5,
  },
]

const CourseList = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Mis cursos publicados</h2>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <FaSlidersH className="text-sm" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
            <FaTh className="text-sm" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {COURSES_DATA.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

export default CourseList