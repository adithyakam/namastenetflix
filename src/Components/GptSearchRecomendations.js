import React from "react";
import { useSelector } from "react-redux";
import VideoCategoryContainer from "./VideoCategoryContainer";

const GptSearchRecomendations = () => {
  const movieNames = useSelector((state) => state.gpt.recomendedNames);
  const movieRecomendation = useSelector(
    (state) => state.gpt.recomenededMovies
  );

  return (
    <div className="absolute h-[40%] top-[60%] md:h-[80%] md:top-40 w-screen mx-auto  overflow-y-scroll">
      <div className="relative mx-auto w-screen md:w-3/4  bg-black p-4 pb-40 bg-opacity-60 rounded-lg ">
        {
          //   <VideoCategoryContainer title="Horror" videos={horror} />
          movieNames?.map((movie, i) => {
            return (
              <VideoCategoryContainer
                key={movie}
                title={movie}
                videos={movieRecomendation[i]}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default GptSearchRecomendations;
