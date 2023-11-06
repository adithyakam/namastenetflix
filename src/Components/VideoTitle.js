import React from "react";

const VideoTitle = ({ mainmovie }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 z-10 bg-gradient-to-r from-black text-white">
      <div className="top-[20%] absolute left-10">
        <h1 className="text-[60px] font-extrabold">{mainmovie.title}</h1>
        <p className="w-1/2 ">{mainmovie.overview}</p>
        <div className="flex mt-8">
          <button className="bg-white text-black font-medium  p-2 rounded-lg w-30 whitespace-nowrap hover:opacity-70">
            Play
          </button>
          <button className="bg-white text-black font-medium  p-2 rounded-lg w-30 opacity-70 ml-4 whitespace-nowrap hover:opacity-50	">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
