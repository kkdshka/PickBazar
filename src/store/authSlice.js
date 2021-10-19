import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { signUpUser } from "./signUpSlice";
import { signInUser } from "./signInSlice";
import { axiosInstance } from "../api/axiosClient";

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

const setUser = (state, action) => {
  state.user = action.payload.user;
  state.jwt = action.payload.jwt;
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
    builder.addCase(signUpUser.fulfilled, setUser);
    builder.addCase(authWithGoogle.fulfilled, setUser);
    builder.addCase(signInUser.fulfilled, setUser);
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
