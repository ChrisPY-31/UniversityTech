import { API_URL } from "@/api";
import axios from "axios";

const getLessonsByCourse = async (idCourse) => {
  try {
    const response = await axios.get(`${API_URL}/cursos/${idCourse}/lessons`, {
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
  return response.data;
};

const getLessons = async (idCourse) => {
  try {
    const response = await axios.get(`${API_URL}/lessons/${idCourse}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const saveLessons = async (Lessons) => {
  try {
    const response = await axios.post(`${API_URL}/lessons`, Lessons, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateLesson = async (id, lesson) => {
  try {
    const response = await axios.put(`${API_URL}/lessons/${id}`, lesson, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteLesson = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/lessons/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  getLessonsByCourse,
  getLessons,
  saveLessons,
  updateLesson,
  deleteLesson,
};
