import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import signUpReducer from "./signUpSlice";
import authReducer from "./authSlice";
import signInReducer from "./signInSlice";
import couponsReducer from "./couponsSlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const reducers = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  auth: authReducer,
  coupons: couponsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: "cart",
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
