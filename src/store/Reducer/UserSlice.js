import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: {},
    name: ""
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.name = action.payload.name +" "+ action.payload.lastName;

    },
    clearUser: (state) => {
      state.user = {};
    },
   
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer