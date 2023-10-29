import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import NowPlayingSlice from "./NowPlayingSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    nowPlaying: NowPlayingSlice,
  },
});
