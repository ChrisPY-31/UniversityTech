import React from 'react'
import { FaSlidersH, FaTh } from 'react-icons/fa'
import CourseCard from './CourseCard'
import { object } from 'yup'


const CourseList = ({courses , fetchDeleteCourse}) => {

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
        {Object.keys(courses).length > 0 ? courses.map((course) => (
          <CourseCard key={course.id} course={course} fetchDeleteCourse={fetchDeleteCourse}/>
        )): <h3 className='text-black text-center text-2xl'>No tienes cursos actualmente</h3>}
      </div>
    </section>
  )
}

export default CourseList