import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
  }
);

export const categoriesStatus = { IDLE: "IDLE", SUCCEEDED: "SUCCEEDED" };

const initialState = {
  data: [],
  status: categoriesStatus.IDLE,
  activeCategoryId: null,
  activeParentCategoryId: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategoryId: (state, { payload }) => {
      state.activeCategoryId = payload;
    },
    setActiveParentCategoryId: (state, { payload }) => {
      state.activeParentCategoryId = payload;
      state.activeCategoryId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = categoriesStatus.SUCCEEDED;
      state.data = action.payload;
    });
  },
});

export const getCategories = (state) => [
  state.categories.data,
  state.categories.status,
];
export const getActiveCategoryId = (state) => state.categories.activeCategoryId;
export const getActiveParentCategoryId = (state) =>
  state.categories.activeParentCategoryId;

export const { setActiveCategoryId, setActiveParentCategoryId } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
