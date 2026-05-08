import { API_URL } from "@/api";
import axios from 'axios';

const updateImageUser = async ( id , image) =>{
    const formData = new FormData();
    formData.apppend("image", image);
    try{
        const response = await axios.patch(`${API_URL}/users/${id}/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch(error){
        console.error("Error updating user image:", error);
        throw error;
    }

}

const updateImageCourse = async (id , image) =>{
const formData = new FormData();
    formData.apppend("image", image);
    try{
        const response = await axios.patch(`${API_URL}/course/${id}/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch(error){
        console.error("Error updating course image:", error);
        throw error;
    }
}

export {updateImageUser , updateImageCourse}