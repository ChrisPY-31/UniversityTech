import { register, signIn, signOut } from "@/Services/AuthService";
import { loginUser, logoutUser } from "@/store/Reducer/AuthSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoadding, setIsloadding] = useState(false);

  const fetchSignInUser = async (data) => {
    setIsloadding(true);
    const response = await signIn(data);
    if (response.status) {
      dispatch(loginUser(response));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", response.role.toLowerCase());
      localStorage.setItem("idUser", response.idUser);
      toast.success("Inicio de Sesion Exitoso");
      setTimeout(() => {
        setIsloadding(false);
        navigate("/home");
      }, 1500);
    }
    return response;
  };

  const fetchSignUp = async (data) => {
    try {
      const response = await register(data);
      toast.success("Registro Exitoso");
    } catch (error) {
      toast.error("Error al registrar el usuario");
      throw error;
    }
  };

  const logOut = async () => {
    const response = await signOut();
    if (!response.status) {
      dispatch(logoutUser());
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      localStorage.removeItem("idUser");
      toast.success("Cierre de Sesion Exitoso");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    return response;
  };

  return {
    isLoadding,
    fetchSignInUser,
    fetchSignUp,
    logOut,
  };
};
