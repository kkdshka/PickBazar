import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const params = getState().products.params;

    const requestParams = {
      "_where[_or][1][category.parentCategory.id]": params.parentCategoryId,
      "_where[_or][0][category]": params.categoryId,
      _start: params.start,
      _limit: params.limit,
    };

    const response = await axiosInstance.get("/products", {
      params: requestParams,
    });
    return response.data;
  }
);

export const productsStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  isMaxListSize: false,
  data: [],
  status: productsStatus.IDLE,
  params: {
    parentCategoryId: null,
    categoryId: null,
    start: 0,
    limit: 10,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.params = { ...state.params, _start: state.params.start + 10 };
      state.status = productsStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        const data = action.payload;
        if (data.length < 10) {
          state.isMaxListSize = true;
        }

        state.status = productsStatus.SUCCEEDED;
        state.data = state.data.concat(data);
      })
      .addCase("categories/setActiveParentCategoryId", (state, { payload }) => {
        state.params = {
          ...state.params,
          parentCategoryId: payload,
          categoryId: null,
          start: 0,
        };
        state.data = [];
        state.status = productsStatus.IDLE;
      })
      .addCase("categories/setActiveCategoryId", (state, { payload }) => {
        state.params = {
          ...state.params,
          parentCategoryId: null,
          categoryId: payload,
          start: 0,
        };
        state.data = [];
        state.status = productsStatus.IDLE;
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
