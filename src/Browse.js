import React from "react";
import Header from "./Header";
import MainVideoContainer from "./MainVideoContainer";
import VideoCategory from "./VideoCategory";

import useNowPlaying from "./hooks/useNowPlaying";

const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <MainVideoContainer />
      <VideoCategory />
    </div>
  );
};

export default Browse;
