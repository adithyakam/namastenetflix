import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { applang } from "./utils/appConfig";

const GptSearch = () => {
  const lang = useSelector((state) => state.appconfig.lang);

  const onGptSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full h-full -z-10 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-b bg-slate-950 bg-opacity-50 w-full h-full"></div>
      <div className="absolute top-20 left-[40%]">
        <form
          className=" bg-black w-96 h-10 grid"
          onSubmit={(e) => onGptSearch(e)}
        >
          <input
            className="col-span-9 row-span-1 row-start-1 p-1 rounded-l-md"
            placeholder={applang[lang].searchText}
          />
          <button className="text-white col-span-3 row-span-1 row-start-1 rounded-r-md ">
            {applang[lang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
