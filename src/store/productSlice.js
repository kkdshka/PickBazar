import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchAllCategoryProducts = createAsyncThunk(
  "product/fetchAllCategoryProducts",
  async ({ productId }) => {
    const productResponse = await axiosInstance.get(`/products/${productId}`);

    const requestParams = {
      "_where[_or][0][category]": productResponse.data.category.id,
    };
    const productsResponse = await axiosInstance.get("/products", {
      params: requestParams,
    });

    return {
      relatedProducts: productsResponse.data,
      product: productResponse.data,
    };
  }
);

export const productStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = Object.freeze({
  value: null,
  relatedProducts: [],
  status: productStatus.IDLE,
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllCategoryProducts.fulfilled,
      (state, { payload: { relatedProducts, product } }) => {
        state.status = productStatus.SUCCEEDED;
        state.relatedProducts = relatedProducts.filter(
          (item) => item.id !== product.id
        );
        state.value = product;
        state.value.category.parentCategoryName = relatedProducts.filter(
          (item) => item.id === product.id
        )[0].category.parentCategory.title;
      }
    );
  },
});

export const getState = (state) => [
  state.product.value,
  state.product.relatedProducts,
];

export const getStatus = (state) => state.product.status;

export const { reset } = productSlice.actions;

export default productSlice.reducer;
