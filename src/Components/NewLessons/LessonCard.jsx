import React from 'react'
import { FaPlay, FaCloudUploadAlt, FaPen, FaTrash } from 'react-icons/fa'

const LessonCard = ({ lesson, onEdit, onDelete }) => {
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
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-blue-500">Uploading {lesson.progress}...</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => onEdit?.(lesson)}
          className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <FaPen className="text-xs" />
        </button>
        <button
          onClick={() => onDelete?.(lesson)}
          className="w-8 h-8 rounded-lg border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors"
        >
          <FaTrash className="text-xs" />
        </button>
      </div>
    </div>
  )
}

export default LessonCard
