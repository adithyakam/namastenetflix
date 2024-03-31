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
    setOtherURL: (state, action) => {
      state.otherURL = action.payload;
    },
  },
});

export const { changeLang, setOtherURL } = appConfigSlice.actions;

export default appConfigSlice.reducer;
