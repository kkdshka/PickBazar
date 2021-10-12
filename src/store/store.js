import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "../components/signUp/signUpSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});
