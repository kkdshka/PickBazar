import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";
import { toast } from "react-toastify";

export const signUpUser = createAsyncThunk(
  "signUp/signUpUser",
  async (user) => {
    const response = await axiosInstance.post("auth/local/register", user);
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
  },
});

export const { open, close } = signUpSlice.actions;

export default signUpSlice.reducer;
