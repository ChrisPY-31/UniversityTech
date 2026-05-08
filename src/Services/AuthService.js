import axios from "axios";

const API_AUTH = "http://localhost:8080/auth";

const signIn = async (user) => {
  try {
    const response = await axios.post(`${API_AUTH}/login`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (user) => {
  try {
    const response = await axios.post(`${API_AUTH}/register`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${API_AUTH}/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { signIn, register, logout };
