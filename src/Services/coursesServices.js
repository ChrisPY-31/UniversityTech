//Aqui van a ir las peticiones a la API, es decir, las funciones que se encargan de hacer las
// peticiones a la API y devolver los datos adaptados a nuestro formato interno.

import axios from "axios";
import { API_URL } from "@/api";
const API_PRUEBA = "https://jsonplaceholder.typicode.com/posts"; //Api de prueba;

const Videos = async () => {
  try {
    const response = await axios.get(`${API_PRUEBA}?_limit=10`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Traer los cursos desde la API
const getCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`,{
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Traer la descripcion de un curso desde la API por ID
const getCourseDescription = async (id) => {
  try{
    const response  = await axios.get(`${API_URL}/courses/${id}` , {
      withCredentials: true,
    });
    return response.data;

  }catch(error){
    throw error;
  }
};

//Crea un nuevo curso de la API
const createCourse = async (course) => {
  try {
    const response = await axios.post(`${API_URL}/courses`, course , {
      withCredentials:true
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Actualiza un curso de la APi por ID
const updateCourse = async (id, course) => {
  try {
    const response = await axios.put(`${API_URL}/courses/${id}}`, course, {
      withCredentials:true
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

//Eliminar un curso de la API por ID
const deleteCourse = (async = async (id) => {
  try{
    const response = await axios.delete(`${API_URL}/courses/${id}`, {
      withCredentials:true
    });
    return response.data;
    
  }catch(error){
    throw error;
  }
});

export {
  Videos,
  getCourses,
  getCourseDescription,
  createCourse,
  updateCourse,
  deleteCourse,
};
