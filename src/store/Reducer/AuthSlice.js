import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    role: localStorage.getItem("role") || "",
    idUser: localStorage.getItem("idUser") || null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.role = action.payload.role.toLowerCase();
      state.idUser = action.payload.idUser;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.role = "";
      state.idUser = null;
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;
