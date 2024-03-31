import { useEffect } from "react";
import { tmdbgetoptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../Components/Redux/NowPlayingSlice";

const useVideo = (id) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      tmdbgetoptions
    );
    const json = await data.json();
    dispatch(addMovieVideos(json.results));
  };

  useEffect(() => {
    getVideos();
  }, [id]);
};

export default useVideo;
