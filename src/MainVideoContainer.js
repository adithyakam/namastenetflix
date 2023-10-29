import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import BgVideoContainer from "./BgVideoContainer";
import { useSelector } from "react-redux";

const MainVideoContainer = () => {
  const vid = useSelector((state) => state.nowPlaying.nowPlaying);
  if (vid == null) return;
  // console.log(vid);
  const mainmovie = vid[0];
  return (
    <div>
      <VideoTitle mainmovie={mainmovie} />
      <BgVideoContainer mainmovie={mainmovie} />
    </div>
  );
};

export default MainVideoContainer;
