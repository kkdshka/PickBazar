import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const products = state.products;
      const isAdded = products[payload.id] === undefined;
      if (isAdded) {
        state.products[payload.id] = { product: payload, count: 1 };
      } else {
        state.products[payload.id].count += 1;
      }
    },
    removeProduct: (state, { payload }) => {
      delete state.products[payload];
    },
    incrementProductCount: (state, { payload }) => {
      const product = state.products[payload];

      state.products[payload] = { ...product, count: product.count + 1 };
    },
    decrementProductCount: (state, { payload }) => {
      const product = state.products[payload];

      if (product.count > 1) {
        state.products[payload] = { ...product, count: product.count - 1 };
      } else {
        delete state.products[payload];
      }
    },
  },
});

export const getCartState = (state) => {
  const products = Object.values(state.cart.products).map((item) => ({
    id: item.product.id,
    data: item.product,
    count: item.count,
  }));

  const count = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count,
    0
  );
  const price = products
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.data.price * currentValue.count,
      0
    )
    .toFixed(2);

  return { products, count, price };
};

export const {
  addProduct,
  removeProduct,
  decrementProductCount,
  incrementProductCount,
} = cartSlice.actions;

export default cartSlice.reducer;
