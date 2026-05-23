import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Video = ({ currentVideo }) => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const videoSrc = currentVideo?.urlVideo || null

  useEffect(() => {
    setPlaying(false)
    setProgress(0)
    setCurrentTime(0)
    setDuration(0)
  }, [videoSrc])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(p => !p)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const ct = videoRef.current.currentTime
    const dur = videoRef.current.duration || 1
    setCurrentTime(ct)
    setProgress((ct / dur) * 100)
  }

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current?.duration || 0)
  }

  const handleProgressClick = (e) => {
    if (!videoRef.current || !videoRef.current.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    videoRef.current.currentTime = ratio * videoRef.current.duration
  }

  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  if (!videoSrc) {
    return (
      <div className="w-full aspect-video bg-[#121826] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center mb-6 shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <p className="text-[#AAB4C0] text-sm z-10">Selecciona una clase para comenzar</p>
      </div>
    )
  }

  return (
    <div className="w-full aspect-video bg-[#121826] rounded-xl border border-white/5 relative overflow-hidden mb-6 shadow-lg group">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center z-10 bg-black/20"
        >
          <FaPlay className="text-white text-6xl opacity-90 drop-shadow-lg hover:opacity-100 transition-opacity" />
        </button>
      )}

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button onClick={togglePlay}>
          {playing ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
        </button>
        <div
          className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
          onClick={handleProgressClick}
        >
          <div className="h-full bg-[#00E5FF] transition-none" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs font-mono">{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>
    </div>
  )
}

export default Video
