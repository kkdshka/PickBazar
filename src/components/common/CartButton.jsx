import React from "react";
import { ReactComponent as CartIcon } from "../../img/cart.svg";
import "./CartButton.scss";

export const CartButton = () => {
  return (
    <button className="cart-button">
      <CartIcon /> Cart
    </button>
  );
};
