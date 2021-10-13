import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../helpers/axios";

export const signUpUser = createAsyncThunk(
  "signUp/signUpUser",
  async (user) => {
    const response = await axiosInstance.post("auth/local/register", user);
    return response.data;
  }
);

const initialState = {
  isOpen: false,
  user: null,
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { open, close } = signUpSlice.actions;

export default signUpSlice.reducer;
