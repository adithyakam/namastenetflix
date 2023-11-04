import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  recomendationList: [],
  recomendedNames: [],
  recomenededMovies: [],
};

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    togglegptsearch: (state, action) => {
      state.toggle = !state.toggle;
    },
    addRecommendationList: (state, action) => {
      state.recomendationList = action.payload;
    },
    addMovieRecomendation: (state, action) => {
      state.recomendedNames = action.payload.recomendedNames;
      state.recomenededMovies = action.payload.recomenededMovies;
    },
  },
});

export const { togglegptsearch, addRecommendationList, addMovieRecomendation } =
  gptSlice.actions;
export default gptSlice.reducer;
