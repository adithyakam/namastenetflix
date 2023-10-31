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
  addAventureMovie,
  addNowPlaying,
  addTopPlayes,
} from "../Components/Redux/NowPlayingSlice";

const useAdventure = () => {
  const dispatch = useDispatch();

  const getAdventure = async () => {
    await fetch(tmdbapiaction, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addAventureMovie(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAdventure();
  }, []);
};

export default useAdventure;
