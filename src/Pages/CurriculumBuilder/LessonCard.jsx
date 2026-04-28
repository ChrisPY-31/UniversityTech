import React from 'react'
import { FaPlay, FaCloudUploadAlt, FaEllipsisV } from 'react-icons/fa'

const LessonCard = ({ lesson }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-t border-gray-100">
      <div className="w-28 h-20 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
        {lesson.status === 'uploaded' ? (
          <>
            <FaPlay className="text-white text-lg z-10" />
            <span className="absolute bottom-1 right-2 text-xs text-white bg-black/60 px-1.5 py-0.5 rounded">
              {lesson.duration}
            </span>
          </>
        ) : (
          <FaCloudUploadAlt className="text-gray-400 text-2xl" />
        )}
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-gray-900">{lesson.title}</h4>
        <div className="flex items-center gap-2 mt-1">
          {lesson.status === 'uploaded' ? (
            <>
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-600">Uploaded</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-400">{lesson.modified}</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-blue-500">Uploading {lesson.progress}...</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-400">{lesson.estimated}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        {lesson.status === 'uploaded' ? (
          <span className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">Manage Video</span>
        ) : (
          <span className="text-sm font-medium text-red-500 hover:text-red-700 cursor-pointer">Cancel</span>
        )}
        <button className="text-gray-400 hover:text-gray-600">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  )
}

export default LessonCard
