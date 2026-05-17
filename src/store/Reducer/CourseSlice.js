import NewCourse from '@/Pages/NewCourse/NewCourse';
import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    coursesDesc: [],
    newCourse: []
  },
  reducers: {
    setCourseDesc: (state , action) =>{
      state.coursesDesc = action.payload;
    },
    setNewCourse: (state , action) =>{
      state.NewCourse = action.payload;
    },
    setAddNewLessons: (state, action) =>{
      console.log([...state.NewCourse.lessons , action.payload])
      state.NewCourse.lessons = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCourseDesc ,setNewCourse ,setAddNewLessons} = courseSlice.actions

export default courseSlice.reducer