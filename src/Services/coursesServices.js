//Aqui van a ir las peticiones a la API, es decir, las funciones que se encargan de hacer las
// peticiones a la API y devolver los datos adaptados a nuestro formato interno.

import { API_URL } from "@/api";
import axios from "axios";

//Traer los cursos desde la API
const getCourses = async () => {
  try {
    const {data} = await axios.get(`${API_URL}/courses`, {
      withCredentials: true,
    });
    return data.content;
  } catch (error) {
    console.log(error);
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
    const response = await axios.post(`${API_URL}/courses`, course , {
      withCredentials:true
    });
    return response.data;
  
};

//Actualiza un curso de la APi por ID
const updateCourse = async (id, course) => {
    const response = await axios.put(`${API_URL}/courses/${id}`, course, {
      withCredentials:true
    });

    return response.data;
  
};


//Eliminar un curso de la API por ID
const deleteCourse = async (id) => {
    const response = await axios.delete(`${API_URL}/courses/${id}`, {
      withCredentials:true
    });
    return response.status;
    
};

const courseImageUpload = async (idCourse , urlImage) =>{
  const form = new FormData();
  form.append("image" , urlImage)
  const response = await axios.patch(`${API_URL}/course/${idCourse}/image`, form ,{
    withCredentials:true
  })
  return response;
}

export {
  getCourses,
  getCourseDescription,
  createCourse,
  updateCourse,
  deleteCourse,
  courseImageUpload
};
