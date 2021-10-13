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
    setFormValue: (state, action) => {
      const { name, value } = action.payload;
      state.formInitialValues[name] = value;
    },
  },
});

export const { open, close, setFormValue } = signUpSlice.actions;

export default signUpSlice.reducer;
