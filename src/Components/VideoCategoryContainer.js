import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoCategoryContainer = ({ title, videos, main }) => {
  return (
    <div
      className={`${
        main ? "absolute md:-top-70 w-[95%] " : ""
      } flex  text-white flex-col p-2 md:ml-20 no-scrollbar relative z-10`}
    >
      <h1 className="text-lg">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        {videos?.map((movie) => {
          return main ? (
            <Link to={"/movieinfo/" + movie?.id}>
              <VideoCard movie={movie} key={movie.id} main />
            </Link>
          ) : (
            <Link to={"/movieinfo/" + movie?.id}>
              <VideoCard movie={movie} key={movie.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoCategoryContainer;
