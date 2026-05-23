import { createSlice } from '@reduxjs/toolkit'

export const lessonSlice = createSlice({
  name: 'lessons',
  initialState: {
    lessons: [],
    currentVideoId: null,
    currentLessonId: null,
  },
  reducers: {
    setLessons: (state, action) => {
      state.lessons = action.payload
    },
    setCurrentVideo: (state, action) => {
      state.currentVideoId = action.payload.videoId
      state.currentLessonId = action.payload.lessonId
    },
  }
});

export const { setLessons, setCurrentVideo } = lessonSlice.actions;
