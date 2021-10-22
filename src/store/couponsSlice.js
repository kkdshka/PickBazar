import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchCoupons = createAsyncThunk(
  "coupons/fetchCoupons",
  async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  }
);

export const couponsStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  data: [],
  status: couponsStatus.IDLE,
};

export const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoupons.fulfilled, (state, action) => {
      state.status = couponsStatus.SUCCEEDED;
      state.data = action.payload;
    });
  },
});

export const getCouponsState = (state) => [
  state.coupons.data,
  state.coupons.status,
];

export default couponsSlice.reducer;
