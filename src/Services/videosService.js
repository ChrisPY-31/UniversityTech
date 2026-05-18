import { API_URL } from "@/api";
import axios from "axios";


export const saveVideo =  async (video)=>{
    const response = await axios.post(`${API_URL}`)
}

export const patchVideoCourse = async (id , videoUrl) =>{
  const form = new FormData();
  form.append("video" , videoUrl);
  const response = await axios.patch(`${API_URL}/videos/${id}/upload` , {
      withCredentials: true,
      body:form
    })
    return response;
}

