import React from "react";
import { ProductInCart } from "./ProductInCart";
import { CloseIcon } from "../common/CloseIcon";
import { ReactComponent as CartIcon } from "../../img/shopCartGreen.svg";
import { ReactComponent as EmptyCartIcon } from "../../img/emptyCart.svg";
import "./OpenedCart.scss";

export const OpenedCart = ({ products, count, price, close }) => {
  return (
    <div className="opened-cart">
      <div className="opened-cart_header">
        <CartIcon />
        <span className="opened-cart_header_count">{count} Item(s)</span>
        <div className="opened-cart_header_close-icon">
          <CloseIcon onClick={close} />
        </div>
      </div>
      <div className="opened-cart_products">
        {count === 0 ? (
          <div className="opened-cart_products_no-products">
            <EmptyCartIcon className="opened-cart_products_no-products_cart-icon" />
            <div className="opened-cart_products_no-products_text">
              No products found
            </div>
          </div>
        ) : (
          products.map((product) => (
            <ProductInCart
              product={product}
              key={`product-in-cart-${product.id}`}
            />
          ))
        )}
      </div>
      <div className="opened-cart_checkout">
        <span className="opened-cart_checkout_text">Checkout</span>
        <button className="opened-cart_checkout_button">${price}</button>
      </div>
    </div>
  );
};
