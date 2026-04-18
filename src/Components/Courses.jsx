import React from 'react'
import courses from './Courses/Courses'
import CoursesCard from './Courses/CoursesCard'

console.log(courses)
const Courses = () => {
  return (
    <div className='flex flex-wrap justify-around mt-5'>
      {courses.map(course => (
        <CoursesCard
          key={course.id}
          titulo={course.title}
          descripcion={course.description}
          imagen={course.image}
          puntuacion={course.rating}
        />
      ))}
    </div>
  )
}

export default Courses
