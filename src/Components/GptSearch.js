import React from "react";
import Header from "./Header";
import GptSearchBar from "./GptSearchBar";
import GptSearchRecomendations from "./GptSearchRecomendations";

const GptSearch = () => {
  return (
    <div className="fixed ">
      <div className="absolute right-0 top-0 bg-gradient-to-b bg-slate-950 bg-opacity-50 w-full h-full"></div>

      <div>
        <div className="fixed  right-0 top-0 bg-gradient-to-b bg-slate-950 bg-opacity-50 w-full h-full"></div>
        <img
          className="w-full h-full -z-10 "
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
