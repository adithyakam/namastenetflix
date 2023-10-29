import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tmdbapinowplaying, tmdbgetoptions } from "../utils/constants";
import { addNowPlaying } from "../Components/Redux/NowPlayingSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    await fetch(tmdbapinowplaying, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlaying(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlaying;
