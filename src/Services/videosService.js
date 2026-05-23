import { API_URL } from "@/api";
import axios from "axios";

export const saveVideo = async (idLesson, videos) => {
  const { data } = await axios.post(`${API_URL}/lessons/${idLesson}/videos`, videos, {
    withCredentials: true,
  });
  return data;
};

export const updateVideoCourse = async (idVideo, videoUrl) => {
  const form = new FormData();
  form.append("video", videoUrl);
  const response = await axios.patch(`${API_URL}/videos/${idVideo}/upload`, form, {
    withCredentials: true,
  });
  return response;
};

export const updateVideoData = async (idVideo, videoData) => {
  const response = await axios.put(`${API_URL}/videos/${idVideo}`, videoData, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteVideo = async (idVideo) => {
  const response = await axios.delete(`${API_URL}/videos/${idVideo}`, {
    withCredentials: true,
  });
  return response.data;
};
