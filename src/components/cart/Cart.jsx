import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCartState } from "../../store/cartSlice";
import { ClosedCart } from "./ClosedCart";
import { OpenedCart } from "./OpenedCart";

export const Cart = () => {
  const { count, price, products } = useSelector(getCartState);
  const [isOpen, setOpen] = useState(false);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  if (isOpen) {
    return (
      <OpenedCart
        products={products}
        count={count}
        price={price}
        close={closeCart}
      />
    );
  } else {
    return <ClosedCart count={count} price={price} open={openCart} />;
  }
};
