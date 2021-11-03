import React from "react";
import { ReactComponent as CartIcon } from "../../img/cart.svg";
import "./CartButton.scss";

export const CartButton = ({ onClick }) => {
  return (
    <button className="cart-button" onClick={onClick}>
      <CartIcon /> Cart
    </button>
  );
};
