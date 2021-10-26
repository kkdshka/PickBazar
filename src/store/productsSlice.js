import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axiosInstance.get("/products");
    return response.data;
  }
);

export const productsStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  data: [],
  status: productsStatus.IDLE,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = productsStatus.SUCCEEDED;
      state.data = action.payload;
    });
  },
});

export const getProducts = (state) => [
  state.products.data,
  state.products.status,
];

export default productsSlice.reducer;
