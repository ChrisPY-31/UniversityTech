import React from 'react'
import Video from '@/Components/CourseVideo/Video'
import LessonHeader from '@/Components/CourseVideo/LessonHeader'
import Summary from '@/Components/CourseVideo/Summary'
import Playlist from '@/Components/CourseVideo/Playlist'

const CourseVideo = () => {
  return (
    <section className="w-[96%] max-w-[1600px] mx-auto py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 flex flex-col">
          <Video />
          <LessonHeader />
          <Summary />
        </div>

        {/* Columna derecha para acordeon de videos */}
        <div className="lg:col-span-1">
          <Playlist />
        </div>

      </div>
    </section>
  )
} 

export default CourseVideo