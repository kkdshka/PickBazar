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
        state.products = products.map((product) => {
          if (product.id === payload.id) {
            return { ...product, count: product.count + 1 };
          } else {
            return product;
          }
        });
      } else {
        state.products.push({ id: payload.id, data: payload, count: 1 });
      }
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload
      );
    },
    incrementProductCount: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      });
    },
    decrementProductCount: (state, { payload }) => {
      state.products = state.products
        .filter((product) => {
          return (
            product.id !== payload ||
            (product.id === payload && product.count > 1)
          );
        })
        .map((product) => {
          if (product.id === payload) {
            return {
              ...product,
              count: product.count - 1,
            };
          } else {
            return product;
          }
        });
    },
  },
});

export const getCartState = (state) => {
  const products = state.cart.products;
  const count = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.count,
    0
  );
  const price = products
    .reduce(
      (previousValue, currentValue) =>
        (previousValue + currentValue.data.price) * currentValue.count,
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
