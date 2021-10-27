import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const params = getState().products.params;

    const response = await axiosInstance.get("/products", { params: params });
    return response.data;
  }
);

export const productsStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  isMaxListSize: false,
  data: [],
  status: productsStatus.IDLE,
  params: {
    "_where[_or][1][category.parentCategory.id]": null,
    "_where[_or][0][category]": null,
    _start: 0,
    _limit: 10,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.params = { ...state.params, _start: state.params._start + 10 };
      state.status = productsStatus.IDLE;
    },
    setCategoryId: (state, action) => {
      state.params = {
        ...state.params,
        "_where[_or][1][category.parentCategory.id]": null,
        "_where[_or][0][category]": action.payload,
        _start: 0,
      };
      state.data = [];
      state.status = productsStatus.IDLE;
    },
    setParentCategoryId: (state, action) => {
      state.params = {
        ...state.params,
        "_where[_or][1][category.parentCategory.id]": action.payload,
        "_where[_or][0][category]": null,
        _start: 0,
      };
      state.data = [];
      state.status = productsStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      const data = action.payload;
      if (data.length < 10) {
        state.isMaxListSize = true;
      }

      state.status = productsStatus.SUCCEEDED;
      state.data = state.data.concat(data);
    });
  },
});

export const getProducts = (state) => [
  state.products.data,
  state.products.status,
];

export const getMaxListSize = (state) => state.products.isMaxListSize;

export const { loadMore, setCategoryId, setParentCategoryId } =
  productsSlice.actions;

export default productsSlice.reducer;
