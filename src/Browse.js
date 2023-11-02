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
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();
  usePopular();
  useActionMovie();
  useHorror();
  useAdventure();
  useThriller();
  const toggleGPT = useSelector((state) => state.gpt);

  return (
    <div>
      <Header />
      {toggleGPT ? (
        <GptSearch />
      ) : (
        <>
          <MainVideoContainer />
          <VideoCategory />
        </>
      )}
    </div>
  );
};

export default Browse;
