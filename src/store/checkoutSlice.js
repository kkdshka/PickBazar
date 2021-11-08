import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  addresses: [],
  selectedAddress: null,
  selectedSchedule: null,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.addresses.push({ ...payload, id: uuid() });
    },
    removeAddress: (state, { payload }) => {
      state.addresses = state.addresses.filter(
        (address) => address.id !== payload
      );
    },
    editAddress: (state, { payload }) => {
      state.addresses = state.addresses.map((address) =>
        address.id === payload.id ? payload : address
      );
    },
    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
    },
    selectSchedule: (state, { payload }) => {
      state.selectedSchedule = payload;
    },
  },
});

export const getCheckoutAddressesState = (state) => ({
  addresses: state.checkout.addresses,
  selectedAddress: state.checkout.selectedAddress,
});

export const getCheckoutSchedule = (state) => state.checkout.selectedSchedule;

export const {
  addAddress,
  removeAddress,
  editAddress,
  selectAddress,
  selectSchedule,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
