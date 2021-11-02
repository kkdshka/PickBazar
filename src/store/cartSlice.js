import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const products = state.products;
      const isAdded =
        products.filter((product) => product.id === payload.id).length > 0;
      if (isAdded) {
        state.products = products.map((product) =>
          product.id === payload.id
            ? { ...product, count: product.count + 1 }
            : product
        );
      } else {
        state.products.push({ id: payload.id, data: payload, count: 1 });
      }
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
  },
});

export const getCartState = (state) => {
  const products = state.cart.products;
  const count = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count,
    0
  );
  const price = products.reduce(
    (previousValue, currentValue) =>
      (previousValue + currentValue.data.price) * currentValue.count,
    0
  );

  return { products, count, price };
};

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
