import React from 'react'
//import courses from './Courses/Courses.js'
import CoursesCard from './Courses/CoursesCard'
import { useCourses } from '@/hooks/useCourses.js';
import { useUser } from '@/hooks/useUser';
import { useNavigate, useParams } from 'react-router-dom';

const Courses = () => { 
  
  const {courses , isLoading} = useCourses();
  const {courseById} = useCourses();
  const navigate = useNavigate();

  const handleDescription = (id , titulo) =>{
        navigate(`/course/${titulo}`);
        localStorage.setItem("idCourse" , id);
        courseById();
  }
  
  
  return (
    <div className='flex flex-wrap justify-around mt-5'>
      {isLoading ? <div className='loader'></div> : courses?.map(course => (
        <CoursesCard
          key={course.id}
          id={course.id}
          titulo={course.title}
          descripcion={course.description}
          imagen={course.image}
          puntuacion={course.rating}
          handleClick={handleDescription}
        />
        
      ))}
    </div>
  )
}

export default Courses
