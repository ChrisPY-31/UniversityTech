import { useState, useEffect } from "react";
import { createCourse, getCourseDescription, getCourses, Videos } from "@/Services/coursesServices";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setCourseDesc } from "@/store/Reducer/CourseSlice";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchCourses = async() => {
    setIsLoading(true);
    const data =  await getCourses();
    setCourses(data);
    setIsLoading(false);
  };

  const courseById = async (id) =>{
    try{
      const courseDescription = await getCourseDescription(id);
      dispatch(setCourseDesc(courseDescription));
    }catch(err){

    }
  }

  const savefetchCourse = async (course) =>{
      try{
        const newCourse = await createCourse ;
        
        
      }catch(error){
        toast.error("Error el servidor intentelo mas tarde")
      }
  }
    

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, isLoading , courseById , savefetchCourse};
};
