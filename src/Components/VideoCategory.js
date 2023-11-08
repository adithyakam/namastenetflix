import React, { useEffect } from "react";
import VideoCategoryContainer from "./VideoCategoryContainer";
import { useSelector } from "react-redux";

const VideoCategory = () => {
  const popularmovie = useSelector((state) => state.nowPlaying.nowPlaying);
  const top = useSelector((state) => state.nowPlaying.top);
  const action = useSelector((state) => state.nowPlaying.actionMovie);
  const horror = useSelector((state) => state.nowPlaying.horror);
  const adventure = useSelector((state) => state.nowPlaying.adventure);
  const thriller = useSelector((state) => state.nowPlaying.thriller);

  return (
    <div className="bg-black  w-screen z-20 pt-[120%] md:pt-[30%]">
      {popularmovie && <VideoCategoryContainer title="Top" videos={top} main />}
      <VideoCategoryContainer title="Popular" videos={popularmovie} />
      <VideoCategoryContainer title="Action" videos={action} />
      <VideoCategoryContainer title="Horror" videos={horror} />
      <VideoCategoryContainer title="Adventure" videos={adventure} />
      <VideoCategoryContainer title="Thriller" videos={thriller} />
    </div>
  );
};

export default VideoCategory;
