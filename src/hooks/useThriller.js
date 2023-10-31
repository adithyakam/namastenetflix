import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  tmdbapiaction,
  tmdbapinowplaying,
  tmdbapipopular,
  tmdbgetoptions,
} from "../utils/constants";
import {
  addActionMovie,
  addNowPlaying,
  addThrillerMovie,
  addTopPlayes,
} from "../Components/Redux/NowPlayingSlice";

const useThriller = () => {
  const dispatch = useDispatch();

  const getthriller = async () => {
    await fetch(tmdbapiaction, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addThrillerMovie(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getthriller();
  }, []);
};

export default useThriller;
