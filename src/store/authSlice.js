import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signUpUser } from "./signUpSlice";
import { signInUser } from "./signInSlice";
import { axiosInstance } from "../api/axiosClient";
import { toast } from "react-toastify";

export const authWithGoogle = createAsyncThunk(
  "auth/authWithGoogle",
  async (token) => {
    const response = await axiosInstance.get(`auth/google/callback${token}`);
    toast.success("You successfully authenticated by google");
    return response.data;
  }
);

const initialState = {
  user: null,
  jwt: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    });
    builder.addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.jwt = action.payload.jwt;
    });
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
