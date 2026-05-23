import React, { useMemo, useEffect } from 'react'
import Video from '@/components/CourseVideo/Video'
import LessonHeader from '@/components/CourseVideo/LessonHeader'
import Summary from '@/components/CourseVideo/Summary'
import Playlist from '@/components/CourseVideo/Playlist'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentVideo } from '@/store/Reducer/lessonSlice'

const CourseVideo = () => {
  const dispatch = useDispatch()
  const { lessons, currentVideoId } = useSelector(state => state.lessons)

  const flatVideos = useMemo(() => {
    const list = []
    lessons.forEach(lesson => {
      lesson.videos?.forEach(video => {
        list.push({ ...video, lessonId: lesson.idLesson, lessonTitle: lesson.title })
      })
    })
    return list
  }, [lessons])

  useEffect(() => {
    if (!currentVideoId && flatVideos.length > 0) {
      dispatch(setCurrentVideo({ videoId: flatVideos[0].idVideo, lessonId: flatVideos[0].lessonId }))
    }
  }, [flatVideos, currentVideoId, dispatch])

  const currentIndex = flatVideos.findIndex(v => v.idVideo === currentVideoId)
  const currentVideo = flatVideos[currentIndex] ?? null
  const nextVideo = flatVideos[currentIndex + 1] ?? null

  const handleSelectVideo = (video) => {
    dispatch(setCurrentVideo({ videoId: video.idVideo, lessonId: video.lessonId }))
  }

  const handleNext = () => {
    if (nextVideo) {
      dispatch(setCurrentVideo({ videoId: nextVideo.idVideo, lessonId: nextVideo.lessonId }))
    }
  }

  return (
    <section className="w-[96%] max-w-[1600px] mx-auto py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 flex flex-col">
          <Video currentVideo={currentVideo} />
          <LessonHeader
            currentVideo={currentVideo}
            videoIndex={currentIndex}
            total={flatVideos.length}
            onNext={handleNext}
            hasNext={!!nextVideo}
          />
          <Summary />
        </div>

        {/* Columna derecha para acordeon de videos */}
        <div className="lg:col-span-1">
          <Playlist
            lessons={lessons}
            currentVideoId={currentVideoId}
            onSelectVideo={handleSelectVideo}
          />
        </div>

      </div>
    </section>
  )
}

export default CourseVideo
