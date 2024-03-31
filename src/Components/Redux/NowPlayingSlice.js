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
  movieInfo: null,
  castInfo: null,
  movieVideos: null,
  castMovies: null,
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
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    clearMovieInfo: (state, action) => {
      state.movieInfo = null;
    },
    addCastInfo: (state, action) => {
      state.castInfo = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    addCastMovies: (state, action) => {
      state.castMovies = action.payload;
    },
    clearCastMovies: (state, action) => {
      state.castMovies = null;
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
  addTrailerVideo,
  addMovieInfo,
  clearMovieInfo,
  addCastInfo,
  addMovieVideos,
  addCastMovies,
  clearCastMovies,
} = NowPlayingSlice.actions;
export default NowPlayingSlice.reducer;
