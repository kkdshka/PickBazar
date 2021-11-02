import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCartState } from "../../store/cartSlice";
import { ClosedCart } from "./ClosedCart";

export const Cart = () => {
  const { count, price, products } = useSelector(getCartState);
  const [isOpen, setOpen] = useState(false);

  const openCart = () => setOpen(true);
  const closeCart = () => setOpen(false);

  return isOpen ? (
    <div/>
  ) : (
    <ClosedCart count={count} price={price} open={openCart} />
  );
};
