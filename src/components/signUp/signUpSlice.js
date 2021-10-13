import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  formInitialValues: {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  },
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
    setFormValues: (state, action) => {
      state.formInitialValues = action.payload;
    },
  },
});

export const { open, close, setFormValues } = signUpSlice.actions;

export default signUpSlice.reducer;
