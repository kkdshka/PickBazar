import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchCoupons = createAsyncThunk(
  "coupons/fetchCoupons",
  async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  }
);

const initialState = {
  coupons: [],
  status: "idle",
};

export const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoupons.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.coupons = action.payload;
    });
  },
});

export const getCoupons = (state) => state.coupons.coupons;

export default couponsSlice.reducer;
