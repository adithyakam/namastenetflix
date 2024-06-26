import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useBgVideo from "../hooks/useBgVideo";

const BgVideoContainer = ({ mainmovie }) => {
  const vidId = useSelector((state) => state.nowPlaying.mainVideo);

  //   if (!vidId) return;
  useBgVideo(mainmovie.id);

  //   if (vidId) return;

  return (
    <div>
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          vidId?.key +
          "?rel=0&autoplay=1&mute=1&rel=0&showinfo=0"
        }
        title="YouTube video player"
        frameBorder="0"
        className=" absolute w-screen top-[10%] md:w-screen md:top-0 aspect-video"
        allow=" autoplay"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BgVideoContainer;
