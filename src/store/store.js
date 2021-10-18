import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});
