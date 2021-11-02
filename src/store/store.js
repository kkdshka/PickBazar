import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import authReducer from "./authSlice";
import signInReducer from "./signInSlice";
import couponsReducer from "./couponsSlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
    auth: authReducer,
    coupons: couponsReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
