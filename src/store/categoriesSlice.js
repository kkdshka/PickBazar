import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosClient";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
  },
});

export const getCategories = (state) => state.categories.data;

export default categoriesSlice.reducer;
