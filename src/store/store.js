import { configureStore } from '@reduxjs/toolkit'
import { courseSlice} from './Reducer/CourseSlice'
import { authSlice } from './Reducer/AuthSlice'
import { userSlice } from './Reducer/UserSlice'

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    courses: courseSlice.reducer
  },
})