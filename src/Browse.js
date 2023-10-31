import React from "react";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import VideoCategory from "./VideoCategory";

import useNowPlaying from "./hooks/useNowPlaying";
import usePopular from "./hooks/usePopular";
import useActionMovie from "./hooks/useActionMovie";
import useHorror from "./hooks/useHorror.js";
import useAdventure from "./hooks/useAdventure";
import useThrilleruseThriller from "./hooks/useThriller";
import useThriller from "./hooks/useThriller";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useActionMovie();
  useHorror();
  useAdventure();
  useThriller();

  return (
    <div>
      <Header />
      <MainVideoContainer />
      <VideoCategory />
    </div>
  );
};

export default Browse;
