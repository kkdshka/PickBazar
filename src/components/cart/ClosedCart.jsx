import React from "react";
import { ReactComponent as CartIcon } from "../../img/shopCartWhite.svg";
import "./ClosedCart.scss";

export const ClosedCart = ({ count, price, open }) => {
  return (
    <div className="closed-cart_container">
      <div className="closed-cart">
        <div className="closed-cart_items-count">
          <CartIcon />
          {count} Item(s)
        </div>
        <button className="closed-cart_items-price" onClick={open}>
          ${price}
        </button>
      </div>
    </div>
  );
};
