import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  tmdbapihorror,
  tmdbapinowplaying,
  tmdbapipopular,
  tmdbgetoptions,
} from "../utils/constants";
import {
  addHorrorMovie,
  addNowPlaying,
  addTopPlayes,
} from "../Components/Redux/NowPlayingSlice";

const useHorror = () => {
  const dispatch = useDispatch();

  const getHorror = async () => {
    await fetch(tmdbapihorror, tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        dispatch(addHorrorMovie(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getHorror();
  }, []);
};

export default useHorror;
