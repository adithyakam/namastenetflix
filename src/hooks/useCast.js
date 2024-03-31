import { useEffect } from "react";
import { tmdbgetoptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCastInfo } from "../Components/Redux/NowPlayingSlice";

const useCast = (id) => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    console.log("uE");

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits",
      tmdbgetoptions
    );
    if (data.ok) {
      console.log("good");
    } else {
      console.log("badd");
    }
    const json = await data.json();
    dispatch(addCastInfo(json.cast));
  };

  useEffect(() => {
    console.log("fadsfad");
    fetchMovie();
  }, [id]);
};

export default useCast;
