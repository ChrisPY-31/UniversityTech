import React, { useState, useRef, useEffect } from 'react'
import { FaPen, FaEllipsisV, FaPlus } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEditingCourse } from '@/store/Reducer/CourseSlice'

const CourseCard = ({ course, fetchDeleteCourse }) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getLevelStyles = (level) => {
    switch (level) {
      case 'Avanzado': return 'bg-green-100 text-green-700'
      case 'Intermedio': return 'bg-blue-100 text-blue-700'
      case 'Basico': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const handleEdit = () => {
    dispatch(setEditingCourse(course))
    navigate('/cursos/nuevo-curso')
  }

  const handleAddLessons = () => {
    localStorage.setItem('idCourse', course.id)
    setShowMenu(false)
    navigate('/cursos/curriculum')
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-5 items-center">
      <img
        src={course.image ? course.image : "https://ui-avatars.com/api/?name=DS&background=2d5a3d&color=fff&size=200"}
        alt={course.title}
        className="w-32 h-32 rounded-xl object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className={`text-sm font-bold px-3 py-1 rounded-full ${getLevelStyles(course.nevel)}`}>
            {course.nevel}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{course.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleEdit}
          className="w-10 h-10 rounded-lg bg-blue-900 cursor-pointer text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
        >
          <FaPen className="text-sm" />
        </button>
        <button
          onClick={() => fetchDeleteCourse(course.id)}
          className="w-10 h-10 rounded-lg bg-red-600 cursor-pointer text-white flex items-center justify-center hover:bg-red-800 transition-colors"
        >
          <TiDeleteOutline className="text-xl" />
        </button>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="w-10 h-10 rounded-lg border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <FaEllipsisV className="text-sm" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
              <button
                onClick={handleAddLessons}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
              >
                <FaPlus className="text-xs text-blue-600" />
                Agregar Lecciones
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard
