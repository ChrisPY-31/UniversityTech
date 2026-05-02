import { configureStore } from '@reduxjs/toolkit'
import { coursesSlice } from './Courses/Courses'

export default configureStore({
  reducer: {
    courses: coursesSlice.reducer
  },
})