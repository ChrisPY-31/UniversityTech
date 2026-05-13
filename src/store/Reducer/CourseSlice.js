import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    value: 0,
    coursesDesc: [],
    courseId : []
    
  },
  reducers: {
    
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = courseSlice.actions

export default courseSlice.reducer