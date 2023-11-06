import React, { useState } from "react";
import { chatQuery } from "../utils/gptConfig";
import { addMovieRecomendation, addRecommendationList } from "./Redux/gptSlice";
import GptSearchRecomendations from "./GptSearchRecomendations";
import { tmdbapisearch, tmdbgetoptions } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { applang } from "../utils/appConfig";

const GptSearchBar = () => {
  const [suggestionquery, setsuggestionquery] = useState("");

  const lang = useSelector((state) => state.appconfig.lang);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      tmdbapisearch + movie + "&include_adult=false&language=en-US&page=1",
      tmdbgetoptions
    );
    const json = await data.json();
    return json.results;
  };

  const onGptSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await chatQuery(suggestionquery);
      const recommededNames = response?.split(",");
      // dispatch(addRecommendationList(recommededNames));

      const MovieArray = recommededNames?.map((movie) => searchMovie(movie));
      const tmdbres = await Promise.all(MovieArray);
      console.log(tmdbres);

      dispatch(
        addMovieRecomendation({
          recomendedNames: recommededNames,
          recomenededMovies: tmdbres,
        })
      );
    } catch (error) {
      console.error(error);
    }

    // const recommededNames = chatQuery("comedy drama hindi movie ");
  };

  return (
    <div className="absolute top-20 left-[30%]">
      <form
        className=" bg-black w-96 h-10 grid"
        onSubmit={(e) => onGptSearch(e)}
      >
        <input
          className="col-span-9 row-span-1 row-start-1 p-1 rounded-l-md"
          placeholder={applang[lang].searchText}
          onChange={(e) => setsuggestionquery(e.target.value)}
        />
        <button className="text-white col-span-3 row-span-1 row-start-1 rounded-r-md ">
          {applang[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
