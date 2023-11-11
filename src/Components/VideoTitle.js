import React from "react";

const VideoTitle = ({ mainmovie }) => {
  return (
    <div className="bg-gradient-to-r from-black text-white w-screen aspect-video absolute top-[10%] md:top-0 z-10 ">
      <div className="top-[10%] left-2 md:top-[20%] absolute md:left-10">
        <h1 className="text-[20px] md:text-[60px] font-extrabold">
          {mainmovie.title}
        </h1>
        <p className="w-1/2 text-[8px] md:text-base">{mainmovie.overview}</p>
        <div className="flex mt-2 md:mt-8">
          <button className="bg-white text-black font-medium text-sm md:text-base   p-1 md:p-2 rounded-lg w-30 whitespace-nowrap hover:opacity-70">
            Play
          </button>
          <button className="bg-white text-black font-medium text-sm md:text-base p-1 md:p-2 rounded-lg w-30 opacity-70 ml-4 whitespace-nowrap hover:opacity-50	">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
