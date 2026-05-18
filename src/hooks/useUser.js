import { getPageUsers, getPerson } from "@/Services/personService";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/Reducer/UserSlice";

export const useUser = () => {
  const id = localStorage.getItem("idUser");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const dispatch = useDispatch();

   const getAllUsers = async(id) =>{
    try{
      const users = await getPageUsers(); 
      console.log(users)
    }catch(error){
      throw error;
    }
  }


  const getUserFetch = async () => {
    const fetchUser = await getPerson(id);
      dispatch(setUser(fetchUser));

  };

  useEffect(() => {
    if (id && isLoggedIn) {
      getUserFetch();
    }
  }, [id, isLoggedIn]);

  return {getAllUsers , isLoggedIn};
};
