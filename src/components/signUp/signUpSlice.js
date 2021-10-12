import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const signUpSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = signUpSlice.actions;

export default signUpSlice.reducer;