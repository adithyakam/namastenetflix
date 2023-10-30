import React from "react";
import VideoCard from "./VideoCard";

const VideoCategoryContainer = ({ title, videos, main }) => {
  return (
    <div
      className={`${
        main ? "absolute -top-80 w-[95%] " : ""
      } flex  text-white flex-col ml-20 no-scrollbar`}
    >
      <h1 className="text-lg">{title}</h1>
      <div className="flex overflow-x-scroll">
        {videos?.map((movie) => {
          return main ? (
            <VideoCard movie={movie} key={movie.id} main />
          ) : (
            <VideoCard movie={movie} key={movie.id} />
          );
        })}
      </div>
    </div>
  );
};

export default VideoCategoryContainer;
