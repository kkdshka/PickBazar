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
  productsListSize: 10,
  isMaxListSize: false,
  allData: [],
  data: [],
  status: productsStatus.IDLE,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.productsListSize += 10;
      if (state.productsListSize >= state.allData.length) {
        state.isMaxListSize = true;
      }
      state.data = state.allData.slice(0, state.productsListSize);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = productsStatus.SUCCEEDED;
      state.allData = action.payload;
      state.data = action.payload.slice(0, state.productsListSize);
      if (state.productsListSize >= state.allData.length) {
        state.isMaxListSize = true;
      }
    });
  },
});

export const getProducts = (state) => [
  state.products.data,
  state.products.status,
];

export const getMaxListSize = (state) => state.products.isMaxListSize;

export const { loadMore } = productsSlice.actions;

export default productsSlice.reducer;
