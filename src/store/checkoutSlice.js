import { createSlice } from "@reduxjs/toolkit";

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

export const { selectAddress, selectSchedule, selectContactNumber } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
