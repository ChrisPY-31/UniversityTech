import { useState , useEffect } from "react";
import { getCourses, Videos } from "@/Services/coursesServices";
import { useDispatch } from "react-redux";

export const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() =>{
        const fetchCourses = async() =>{
            setIsLoading(true);
            const data = await getCourses();
            setCourses(data);
            setIsLoading(false);
        }
        fetchCourses();
    },[]);       
    
    return { courses, isLoading };
}