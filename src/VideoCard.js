import React from "react";
import { tmdbapivid, tmdbimageurl } from "./utils/constants";

const VideoCard = ({ movie, main }) => {
  return (
    <div className="flex z-20  text-white p-1  ">
      <img
        src={tmdbimageurl + movie.poster_path}
        className={`${main ? "mr-8 " : "mr-4"} object-contain max-w-[120px]`}
      />
    </div>
  );
};

export default VideoCard;
