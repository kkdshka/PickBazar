import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: null,
  selectedSchedule: null,
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
  },
});

export const getSelectedAddress = (state) => state.checkout.selectedAddress;
export const getSelectedSchedule = (state) => state.checkout.selectedSchedule;

export const { selectAddress, selectSchedule } = checkoutSlice.actions;

export default checkoutSlice.reducer;
