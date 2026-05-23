import {
  deleteUser,
  getPageUsers,
  getPerson,
  getPersonComplete,
  updatePerson,
} from "@/Services/personService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/Reducer/UserSlice";
import { updateAccoudUser, updateImageUser } from "@/Services/userFileService";
import Swal from "sweetalert2";

export const useUser = () => {
  const id = localStorage.getItem("idUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const getAllUsers = async () => {
    try {
      const users = await getPageUsers();
      setUsers(users);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAllUsers();
    setIsLoading(false);
  }, []);

  const getAllPersonPorfile = async () => {
    try {
      const profile = await getPersonComplete(id);
      dispatch(setUser(profile));
    } catch (error) {
      throw error;
    }
  };

  const getUserFetch = async () => {
    const fetchUser = await getPerson(id);
    dispatch(setUser(fetchUser));
  };

  const updatePasswordUser = async (password) => {
    await updateAccoudUser(id, password);
  };

  const updateProfile = async ({ name, lastName, email }) => {
    await updatePerson(id, { idPerson: id, name, lastName, email });
    await getUserFetch();
  };

  const updateImage = async (image) => {
    await updateImageUser(id, image);
    await getAllPersonPorfile();
  };

  const fetchDeleteUser = async (idUser) => {
    const result = await Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    try {
      setIsLoading(true);
      await deleteUser(idUser);
      setUsers((prev) => prev.filter((u) => u.idPerson !== idUser));
      Swal.fire({ title: "Eliminado", text: "El usuario fue eliminado.", icon: "success", timer: 1500, showConfirmButton: false });
    } catch {
      Swal.fire({ title: "Error", text: "Error al eliminar el usuario.", icon: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id && isLoggedIn) {
      setIsLoading(true);
      getUserFetch();
      setIsLoading(false);
    }
  }, [id, isLoggedIn]);

  return {
    users,
    isLoggedIn,
    updatePasswordUser,
    updateProfile,
    getAllPersonPorfile,
    updateImage,
    isLoading,
    fetchDeleteUser,
  };
};
