import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import authReducer from "./authSlice";
import signInReducer from "./signInSlice";
import couponsReducer from "./couponsSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    auth: authReducer,
    coupons: couponsReducer,
  },
});
