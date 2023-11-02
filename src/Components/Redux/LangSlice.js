import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = "en";

const lang = createSlice({
  name: "LangSlice",
  initialState,
  reducers: {
    addLang: (state, action) => {
      return action.payload;
    },
  },
});
