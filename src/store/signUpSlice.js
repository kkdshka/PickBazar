import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axios";

export const signUpUser = createAsyncThunk(
  "signUp/signUpUser",
  async (user) => {
    const response = await axiosInstance.post("auth/local/register", user);
    return response.data;
  }
);

export const signUpWithGoogle = createAsyncThunk(
  "signUp/signUpWithGoogle",
  async (token) => {
    const response = await axiosInstance.get(
      `${process.env.REACT_APP_BASE_URL}auth/google/callback${token}`
    );
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
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUpWithGoogle.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { open, close, logOut } = signUpSlice.actions;

export default signUpSlice.reducer;
