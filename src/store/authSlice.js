import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signUpWithGoogle } from "./signUpSlice";

const initialState = {
  user: null,
  jwt: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => (state.user = action.payload),
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
