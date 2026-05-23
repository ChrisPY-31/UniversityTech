import { API_URL } from "@/api";
import axios from 'axios';

const updateImageUser = async (id, image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
        const response = await axios.patch(`${API_URL}/users/${id}/image`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error updating user image:", error);
        throw error;
    }
}

const updateImageCourse = async (id, image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
        const response = await axios.patch(`${API_URL}/course/${id}/image`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error updating course image:", error);
        throw error;
    }
}

const updateAccoudUser = async (idUser, password) => {
    try {
        const response = await axios.patch(`${API_URL}/person/${idUser}/password`, { newPassword: password }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error updating password:", error);
        throw error;
    }
}

export { updateImageUser, updateImageCourse, updateAccoudUser }
