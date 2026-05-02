import React, { useState } from 'react'
import ActionButtons from '../../components/NewCourse/ActionButtons'
import CategorySelector from '../../components/NewCourse/CategorySelector'
import CoursePreviewCard from '../../components/NewCourse/CoursePreviewCard'
import DifficultyLevel from '../../components/NewCourse/DifficultyLevel'
import GeneralInfo from '../../components/NewCourse/GeneralInfo'
import ThumbnailUpload from '../../components/NewCourse/ThumbnailUpload'
import VisibilityStatus from '../../components/NewCourse/VisibilityStatus'

const NewCourse = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Computación en la Nube')
  const [difficulty, setDifficulty] = useState('Principiante')
  const [visibility, setVisibility] = useState('Draft')
  const [thumbnail, setThumbnail] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-8 py-6">
        <div className="grid grid-cols-3 gap-8">

          <div className="col-span-2 space-y-6">
            <GeneralInfo
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
            />
            <div className="flex gap-6">
              <div className="flex-1">
                <CategorySelector
                  category={category}
                  setCategory={setCategory}
                />
              </div>
              <div className="flex-1">
                <DifficultyLevel
                  difficulty={difficulty}
                  setDifficulty={setDifficulty}
                />
              </div>
            </div>

            <VisibilityStatus
              visibility={visibility}
              setVisibility={setVisibility}
            />
          </div>

          <div className="space-y-6">
            <ThumbnailUpload
              thumbnail={thumbnail}
              setThumbnail={setThumbnail}
            />

            <CoursePreviewCard
              title={title}
              thumbnail={thumbnail}
              difficulty={difficulty}
              visibility={visibility}
            />
          </div>
        </div>

        <div className="mt-8">
          <ActionButtons />
        </div>
      </div>

      <div className="text-center py-6 text-sm text-gray-400">
        Autoguardado a las 00:00hrs - Certificado por Nexus University
      </div>
    </div>
  )
}

export default NewCourse
