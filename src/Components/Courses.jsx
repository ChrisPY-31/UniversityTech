import React from 'react'
//import courses from './Courses/Courses.js'
import CoursesCard from './Courses/CoursesCard'
import { useCourses } from '@/hooks/useCourses.js';
import { useUser } from '@/hooks/useUser';

const Courses = () => { 
  
  const {courses , isLoading} = useCourses();
   
  
  return (
    <div className='flex flex-wrap justify-around mt-5'>
      {isLoading ? <div className='loader'></div> : courses?.map(course => (
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
