import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";
import { toast } from "react-toastify";
import { getCartState } from "./cartSlice";

export const checkoutOrder = createAsyncThunk(
  "checkout/checkoutOrder",
  async (_, { getState }) => {
    const { checkout, auth } = getState();
    const order = {
      address: checkout.selectedAddress.address,
      when: checkout.selectedSchedule.value,
      products: getCartState(getState()).products,
      phone: checkout.selectedContactNumber.number,
      email: auth.user.email,
    };

    const response = await axiosInstance.post("/orders", order);
    toast.success("You successfully created an order");
    return response.data;
  }
);

const initialState = {
  selectedAddress: null,
  selectedSchedule: null,
  selectedContactNumber: null,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
    selectSchedule: (state, { payload }) => {
      state.selectedSchedule = payload;
    },
    selectContactNumber: (state, { payload }) => {
      state.selectedContactNumber = payload;
    },
  },
});

export const getSelectedAddress = (state) => state.checkout.selectedAddress;
export const getSelectedSchedule = (state) => state.checkout.selectedSchedule;
export const getSelectedContactNumber = (state) =>
  state.checkout.selectedContactNumber;
export const getCheckoutIsReady = (state) => {
  return (
    Boolean(state.checkout.selectedAddress) &&
    Boolean(state.checkout.selectedSchedule) &&
    Boolean(state.checkout.selectedContactNumber) &&
    Boolean(state.auth.user) &&
    Boolean(state.cart.products)
  );
};

export const { selectAddress, selectSchedule, selectContactNumber } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
