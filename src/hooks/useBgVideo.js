import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../Components/Redux/NowPlayingSlice";
import { tmdbapivid, tmdbgetoptions } from "../utils/constants";

const useBgVideo = (id) => {
  const disptach = useDispatch();
  //   console.log(id);
  const getVideo = async () => {
    await fetch(tmdbapivid + id + "/videos?language=en-US", tmdbgetoptions)
      .then((response) => response.json())
      .then((response) => {
        const res = response.results.filter((res) => res.type === "Trailer");

        disptach(addVideo(res[0]));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useBgVideo;
