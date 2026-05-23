import React, { useState, useEffect } from "react";
import { HiOutlineCheck, HiPlay, HiOutlineLockClosed } from "react-icons/hi";
import ModuleSection from "../ModuleSection";

const Playlist = ({ lessons, currentVideoId, onSelectVideo }) => {
  const [openModules, setOpenModules] = useState({})

  useEffect(() => {
    setOpenModules(prev => {
      const next = { ...prev }
      lessons.forEach(l => {
        if (!(l.idLesson in next)) next[l.idLesson] = true
      })
      return next
    })
  }, [lessons])

  const toggleModule = (id) =>
    setOpenModules((prev) => ({ ...prev, [id]: !prev[id] }))

  const completedCount = 0
  const totalVideos = lessons.reduce((acc, l) => acc + (l.videos?.length || 0), 0)
  console.log(lessons)

  return (
    <div className="bg-[#1A2238] border border-white/5 rounded-xl p-6 h-full flex flex-col">
      <div className="flex justify-between items-end mb-6 pb-4 border-b border-white/10 shrink-0">
        <div>
          <h3 className="text-lg font-bold text-white">Contenido del curso</h3>
          <p className="text-xs text-[#AAB4C0] mt-1">{lessons.length} módulos</p>
        </div>
        <span className="text-xs font-bold bg-white/10 text-white px-2 py-1 rounded">
          {totalVideos} clases
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
        {lessons.map((lesson) => (
          <ModuleSection
            key={lesson.idLesson}
            module={lesson}
            isOpen={!!openModules[lesson.idLesson]}
            onToggle={() => toggleModule(lesson.idLesson)}
            className="border border-white/5 rounded-lg bg-[#121826] overflow-hidden text-white"
          >
            <div className="p-4 pt-2 bg-[#1A2238]">
              <div className="relative border-l-2 border-white/10 ml-3 space-y-6 mt-2 pb-2">
                {lesson.videos?.map((video, idx) => {
                  const isPlaying = video.idVideo === currentVideoId

                  return (
                    <div
                      key={video.idVideo}
                      onClick={() => onSelectVideo({ ...video, lessonId: lesson.idLesson, lessonTitle: lesson.title })}
                      className="relative pl-6 cursor-pointer group"
                    >
                      <div
                        className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-[#1A2238] transition-all
                          ${isPlaying ? "bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" : "bg-[#121826] border-2 border-white/20"}
                        `}
                      />

                      <div
                        className={`p-3 rounded-lg transition-colors border
                          ${isPlaying ? "bg-[#00E5FF]/10 border-[#00E5FF]/30 -mt-3" : "bg-transparent border-transparent group-hover:bg-white/5 -mt-1.5"}
                        `}
                      >
                        <h5
                          className={`text-sm font-semibold mb-1
                            ${isPlaying ? "text-[#00E5FF]" : "text-[#AAB4C0]"}
                          `}
                        >
                          {idx + 1}. {video.title}
                        </h5>

                        <div className="flex items-center gap-2 text-xs">
                          {isPlaying ? (
                            <span className="text-[#00E5FF] flex items-center gap-1">
                              <HiPlay className="w-3 h-3" /> Reproduciendo
                            </span>
                          ) : (
                            <span className="text-gray-500 flex items-center gap-1">
                              <HiPlay className="w-3 h-3" /> Ver clase
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </ModuleSection>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
