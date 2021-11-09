import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const contactNumbersAdapter = createEntityAdapter();

const contactNumbersSlice = createSlice({
  name: "contactNumbers",
  initialState: contactNumbersAdapter.getInitialState(),
  reducers: {
    addNumber: contactNumbersAdapter.addOne,
    removeNumber: contactNumbersAdapter.removeOne,
    editNumber: contactNumbersAdapter.updateOne,
  },
});

const contactNumbersSelectors = contactNumbersAdapter.getSelectors(
  (state) => state.contactNumbers
);

export const allContactNumbers = contactNumbersSelectors.selectAll;

export const { addNumber, editNumber, removeNumber } =
  contactNumbersSlice.actions;

export default contactNumbersSlice.reducer;
