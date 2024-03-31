import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useCastMovies from "../hooks/useCastMovies";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../Components/VideoCard";
import Header from "../Components/Header";
import { clearMovieInfo } from "../Components/Redux/NowPlayingSlice";
import Shimmer from "./Shimmer";

const MoviesByActor = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const actorName = location?.state?.actorName;

  useCastMovies(id);

  //Clear Movie Info Slice
  dispatch(clearMovieInfo());

  const moviesByActor = useSelector((store) => store.nowPlaying.castMovies);
  if (!moviesByActor)
    return (
      <h1>
        {" "}
        <Shimmer />
      </h1>
    );

  return (
    <div>
      <Header />
      <div className="bg-black text-white md:px-16 px-5 min-h-screen">
        <div className="pt-28">
          <h1 className="md:text-4xl text-xl">
            Discover Movies Starring <b>{actorName}</b>
          </h1>
        </div>
        <div className="mt-8 flex flex-wrap gap-8 justify-center">
          {moviesByActor?.map((movie) => (
            <div>
              <Link to={"/movieinfo/" + movie?.id}>
                <VideoCard key={movie?.id} movie={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesByActor;
