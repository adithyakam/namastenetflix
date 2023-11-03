import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const gptSlice = createSlice({
  name: "gptSlice",
  initialState,
  reducers: {
    togglegptsearch: (state, action) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { togglegptsearch } = gptSlice.actions;
export default gptSlice.reducer;
