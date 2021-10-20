import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";
import { toast } from "react-toastify";

const initialState = {
  isOpen: false,
};

export const signInUser = createAsyncThunk(
  "signIn/signInUser",
  async (user) => {
    const response = await axiosInstance.post("auth/local", user);
    toast.success("You successfully signed in");
    return response.data;
  }
);

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
