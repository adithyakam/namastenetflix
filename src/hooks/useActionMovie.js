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
  addTopPlayes,
} from "../Components/Redux/NowPlayingSlice";

const useActionMovie = () => {
  const dispatch = useDispatch();

  const getAction = async () => {
    await fetch(tmdbapiaction, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addActionMovie(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAction();
  }, []);
};

export default useActionMovie;
