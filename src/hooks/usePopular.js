import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  tmdbapinowplaying,
  tmdbapipopular,
  tmdbgetoptions,
} from "../utils/constants";
import {
  addNowPlaying,
  addTopPlayes,
} from "../Components/Redux/NowPlayingSlice";

const usePopular = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    await fetch(tmdbapipopular, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addTopPlayes(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;
