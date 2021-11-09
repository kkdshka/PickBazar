import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const addressesAdapter = createEntityAdapter();

const addressesSlice = createSlice({
  name: "addresses",
  initialState: addressesAdapter.getInitialState(),
  reducers: {
    addAddress: addressesAdapter.addOne,
    removeAddress: addressesAdapter.removeOne,
    editAddress: addressesAdapter.updateOne,
  },
});

const addressesSelectors = addressesAdapter.getSelectors(
  (state) => state.addresses
);

export const allAddresses = addressesSelectors.selectAll;

export const { addAddress, editAddress, removeAddress } =
  addressesSlice.actions;

export default addressesSlice.reducer;
