import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import NowPlayingSlice from "./NowPlayingSlice";
import gptSlice from "./gptSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    nowPlaying: NowPlayingSlice,
    gpt: gptSlice,
  },
});
