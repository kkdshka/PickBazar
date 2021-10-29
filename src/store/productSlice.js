import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchAllCategoryProducts = createAsyncThunk(
  "product/fetchAllCategoryProducts",
  async ({ categoryId, productId }) => {
    const requestParams = {
      "_where[_or][0][category]": categoryId,
    };

    const response = await axiosInstance.get("/products", {
      params: requestParams,
    });
    return { data: response.data, productId };
  }
);

export const productStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  value: null,
  relatedProducts: [],
  status: productStatus.IDLE,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllCategoryProducts.fulfilled,
      (state, { payload: { data, productId } }) => {
        state.status = productStatus.SUCCEEDED;
        state.relatedProducts = data;
        state.value = data.filter((item) => item.id === Number(productId))[0];
      }
    );
  },
});

export const getState = (state) => [
  state.product.value,
  state.product.relatedProducts,
  state.product.status,
];

export const { reset } = productSlice.actions;

export default productSlice.reducer;
