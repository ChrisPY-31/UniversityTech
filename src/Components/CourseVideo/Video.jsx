import React from "react";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <div className="w-full aspect-video bg-[#121826] rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center mb-6 shadow-lg group">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <button className="z-10 flex items-center justify-center hover:scale-110 transition-transform">
        <FaPlay className="text-white text-6xl opacity-90 drop-shadow-lg hover:opacity-100 transition-opacity cursor-pointer" />
      </button>

    {/* Controles */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        <button>
            <FaPlay className="w-2 h-2 text-white text-6xl opacity-90 drop-shadow-lg hover:opacity-100 transition-opacity cursor-pointer" />
        </button>
        <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#00E5FF] cursor-pointer"></div>
        </div>
        <span className="text-xs font-mono">03:15 / 10:45</span>
      </div>
    </div>
  );
};

export default Video;
