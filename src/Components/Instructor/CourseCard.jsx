import React from 'react'
import { FaClock, FaStar, FaPen, FaDesktop, FaEllipsisV } from 'react-icons/fa'

const CourseCard = ({ course }) => {
  const getLevelStyles = (level) => {
    switch (level) {
      case 'ADVANCED':
        return 'bg-green-100 text-green-700'
      case 'INTERMEDIATE':
        return 'bg-blue-100 text-blue-700'
      case 'BEGINNER':
        return 'bg-yellow-100 text-yellow-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-5 items-center">
      <img src={course.image} alt={course.title} className="w-32 h-32 rounded-xl object-cover flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${getLevelStyles(course.level)}`}>
            {course.level}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <FaClock className="text-xs" />
            {course.duration}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{course.description}</p>
      </div>
      <div className="flex gap-8 items-center flex-shrink-0">
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Estudiantes</p>
          <p className="text-lg font-bold text-gray-900">{course.students.toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Calificación</p>
          <p className="text-lg font-bold text-gray-900 flex items-center justify-center gap-1">
            {course.rating} <FaStar className="text-yellow-400 text-sm" />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
          <FaPen className="text-sm" />
        </button>
        <button className="w-10 h-10 rounded-lg bg-teal-600 text-white flex items-center justify-center hover:bg-teal-500 transition-colors">
          <FaDesktop className="text-sm" />
        </button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <FaEllipsisV className="text-sm" />
        </button>
      </div>
    </div>
  )
}

export default CourseCard