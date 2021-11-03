import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementProductCount,
  incrementProductCount,
  removeProduct,
} from "../../store/cartSlice";
import { getImgUrl } from "../../api/axiosClient";
import { Counter } from "./Counter";
import { CloseIcon } from "../common/CloseIcon";
import "./ProductInCart.scss";

export const ProductInCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementProductCount(product.id));
  };

  const handleDecrement = () => {
    dispatch(decrementProductCount(product.id));
  };

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div className="product-in-cart">
      <Counter
        count={product.count}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
      <img
        className="product-in-cart_photo"
        src={getImgUrl(product.data.photos[0].url)}
        alt=""
      />
      <div className="product-in-cart_data">
        <div className="product-in-cart_data_title">{product.data.name}</div>
        <div className="product-in-cart_data_price">$ {product.data.price}</div>
        <div className="product-in-cart_data_size">
          {product.count} x {product.data.size}
        </div>
      </div>
      <div className="product-in-cart_total">
        $ {(product.data.price * product.count).toFixed(2)}
      </div>
      <div className="product-in-cart_remove-icon">
        <CloseIcon onClick={handleRemove} />
      </div>
    </div>
  );
};
