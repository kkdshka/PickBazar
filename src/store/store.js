import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import signUpReducer from "./signUpSlice";
import authReducer from "./authSlice";
import signInReducer from "./signInSlice";
import couponsReducer from "./couponsSlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import addressesReducer from "./entities/addressesSlice";
import contactNumbersReducer from "./entities/contactNumbersSlice";

const reducers = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  auth: authReducer,
  coupons: couponsReducer,
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  addresses: addressesReducer,
  contactNumbers: contactNumbersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout", "addresses", "contactNumbers", "auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
