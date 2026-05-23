import { configureStore } from '@reduxjs/toolkit'
import { courseSlice} from './Reducer/CourseSlice'
import { authSlice } from './Reducer/AuthSlice'
import { userSlice } from './Reducer/UserSlice'
import { lessonSlice } from './Reducer/lessonSlice'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    courses: courseSlice.reducer,
    lessons: lessonSlice.reducer
  },
})