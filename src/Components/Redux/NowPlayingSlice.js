import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  nowPlaying: null,
  mainVideo: null,
};

const NowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addVideo: (state, action) => {
      state.mainVideo = action.payload;
    },
  },
});

export const { addNowPlaying, addVideo } = NowPlayingSlice.actions;
export default NowPlayingSlice.reducer;
