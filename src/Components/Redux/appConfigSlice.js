import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = appConfigSlice.actions;

export default appConfigSlice.reducer;
