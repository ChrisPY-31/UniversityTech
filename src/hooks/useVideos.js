import { getLessons, getLessonsByCourse } from "@/Services/lessonsService";
import { setLessons } from "@/store/Reducer/lessonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useVideos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idCourse = localStorage.getItem("idCourse")

  const getLessonsVideos = async() => {
    try {
        const getAllLessons = await getLessonsByCourse(idCourse);
        dispatch(setLessons(getAllLessons));
      } catch (error) {
        throw error;
      }
  };

  useEffect(() =>{
    getLessonsVideos();
  },[idCourse])

  return { getLessonsVideos };
};
