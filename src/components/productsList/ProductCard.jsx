import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import { getImgUrl } from "../../api/axiosClient";
import { CartButton } from "../common/CartButton";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const path = `/product/${product.id}`;

  const handleOnCartClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="product-card">
      <Link to={path}>
        <div className="product-card_image_wrapper">
          <img
            className="product-card_image"
            alt={product.photos[0].alternativeText}
            src={getImgUrl(product.photos[0].url)}
          />
        </div>
      </Link>
      <div>
        <Link className="unstyled-link" to={path}>
          <div className="product-card_name">{product.name}</div>
        </Link>
        <div className="product-card_size">{product.size}</div>
      </div>
      <div className="product-card_order">
        <div className="product-card_price">${product.price}</div>
        <CartButton onClick={handleOnCartClick} />
      </div>
    </div>
  );
};
