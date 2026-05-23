import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    coursesDesc: [],
    newCourse: {},
    lessons:[],
    videos:[],
    editingCourse: null,
  },
  reducers: {
    setCourseDesc: (state , action) =>{
      state.coursesDesc = action.payload;
    },
    setNewCourse: (state , action) =>{
      state.newCourse = action.payload
    },
    setAddNewLessons: (state, action) =>{
      state.newCourse.lessons = action.payload
    },
    setAddNewVideos: (state , action) =>{
      [...state.videos , action.payload]
    },
    setEditingCourse: (state, action) => {
      state.editingCourse = action.payload;
    },
    clearEditingCourse: (state) => {
      state.editingCourse = null;
    },
  },
})

export const { setCourseDesc, setNewCourse, setAddNewLessons, setAddNewVideos, setEditingCourse, clearEditingCourse } = courseSlice.actions

export default courseSlice.reducer