import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  nowPlaying: null,
  mainVideo: null,
  top: null,
  actionMovie: null,
  horror: null,
  adventure: null,
  thriller: null,
};

const NowPlayingSlice = createSlice({
  name: "nowPlaying",
  initialState,
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTopPlayes: (state, action) => {
      state.top = action.payload;
    },
    addVideo: (state, action) => {
      state.mainVideo = action.payload;
    },
    addActionMovie: (state, action) => {
      state.actionMovie = action.payload;
    },
    addHorrorMovie: (state, action) => {
      state.horror = action.payload;
    },
    addAventureMovie: (state, action) => {
      state.adventure = action.payload;
    },
    addThrillerMovie: (state, action) => {
      state.thriller = action.payload;
    },
  },
});

export const {
  addAventureMovie,
  addThrillerMovie,
  addNowPlaying,
  addHorrorMovie,
  addVideo,
  addTopPlayes,
  addActionMovie,
} = NowPlayingSlice.actions;
export default NowPlayingSlice.reducer;
