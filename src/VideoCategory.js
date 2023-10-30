import React, { useEffect } from "react";
import VideoCategoryContainer from "./VideoCategoryContainer";
import { useSelector } from "react-redux";

const VideoCategory = () => {
  const popularmovie = useSelector((state) => state.nowPlaying.nowPlaying);

  return (
    <div className="bg-black relative w-screen">
      {popularmovie && (
        <VideoCategoryContainer title="Popular" videos={popularmovie} main />
      )}
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
    </div>
  );
};

export default VideoCategory;
