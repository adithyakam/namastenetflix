import React from "react";

const Shimmer = () => {
  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-screen h-1/2 bg-slate-300 animate-pulse "></div>

      <div className="flex flex-row justify-around  flex-wrap ">
        {Array(4)
          .fill("1")
          .map((arr) => {
            return (
              <div className="w-40 h-60 bg-slate-300 animate-pulse m-2"></div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer;
