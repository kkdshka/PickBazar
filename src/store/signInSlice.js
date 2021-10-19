import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const signInSlice = createSlice({
  name: "signIn",
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

export const { open, close } = signInSlice.actions;

export default signInSlice.reducer;
