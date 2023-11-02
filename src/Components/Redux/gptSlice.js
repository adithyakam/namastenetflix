import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    togglegptsearch: (state, action) => {
      return !state;
    },
  },
});

export const { togglegptsearch } = gptSlice.actions;
export default gptSlice.reducer;
