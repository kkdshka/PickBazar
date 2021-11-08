import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  addresses: [],
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
  },
});

export const getCheckoutState = (state) => ({
  addresses: state.checkout.addresses,
});
export const { addAddress, removeAddress, editAddress } = checkoutSlice.actions;

export default checkoutSlice.reducer;
