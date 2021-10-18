import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios";
import { toast } from "react-toastify";

export const signUpUser = createAsyncThunk(
  "signUp/signUpUser",
  async (user) => {
    const response = await axiosInstance.post("auth/local/register", user);
    toast.success("You successfully signed up");
    return response.data;
  }
);

export const signUpWithGoogle = createAsyncThunk(
  "signUp/signUpWithGoogle",
  async (token) => {
    const response = await axiosInstance.get(`auth/google/callback${token}`);
    toast.success("You successfully signed up");
    return response.data;
  }
);

const initialState = {
  isOpen: false,
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
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { open, close, logOut } = signUpSlice.actions;

export default signUpSlice.reducer;
