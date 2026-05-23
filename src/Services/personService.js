import { API_URL } from "@/api";
import axios from "axios";

const getPageUsers = async ()=>{
  const {data} = await axios.get(`${API_URL}/persons` ,{
    withCredentials:true,
  });
  return data.content;
}

const getPerson = async (idPerson) => {
  try {
    const response = await axios.get(`${API_URL}/person/${idPerson}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getPersonComplete = async (idPerson) => {
  const response = await axios.get(`${API_URL}/person/${idPerson}/profile`, {
    withCredentials: true,
  });
  return response.data;
};

const savePerson = async (person) => {
  try {
    const response = await axios.post(`${API_URL}/person`, person, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updatePerson = async (idPerson, person) => {
  try {
    const response = await axios.put(`${API_URL}/person/${idPerson}`, person, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (idUser) =>{
  const response = await axios.delete(`${API_URL}/users/${idUser}`, {
    withCredentials: true,
  })
  return response;
}

export {getPageUsers, getPerson, updatePerson, savePerson ,getPersonComplete , deleteUser};
