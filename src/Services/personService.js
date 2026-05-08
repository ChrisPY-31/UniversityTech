import { API_URL } from "@/api";
import axios from "axios";

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

export { getPerson, updatePerson, savePerson };
