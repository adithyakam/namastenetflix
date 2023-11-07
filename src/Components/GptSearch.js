import React from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import GptSearchRecomendations from "./GptSearchRecomendations";

const GptSearch = () => {
  return (
    <div className=" ">
      <div className="bg-gradient-to-b -z-10 bg-slate-950 bg-opacity-50  md:absolute md:right-0 md:top-0 w-full h-full"></div>

      <div>
        <div className="-z-10 bg-gradient-to-b bg-slate-950 bg-opacity-50 md:fixed  md:right-0 md:top-0  w-full h-full"></div>
        <img
          className="w-screen h-screen md:w-full md:h-full -z-10 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSearchRecomendations />
      </div>
    </div>
  );
};

export default GptSearch;
