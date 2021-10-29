import React from "react";
import { useHistory } from "react-router-dom";
import { baseURL } from "../../api/axiosClient";
import { ReactComponent as CartIcon } from "../../img/cart.svg";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const history = useHistory();

  const imageURL = product.photos[0].url;
  const src = baseURL + imageURL.slice(1, imageURL.length);

  const handleOnProductClick = () => {
    const path = `/product/${product.id}?category-id=${product.category.id}`;
    history.push(path);
  };

  return (
    <div className="product-card">
      <div
        className="product-card_image_wrapper"
        onClick={handleOnProductClick}
      >
        <img
          className="product-card_image"
          alt={product.photos[0].alternativeText}
          src={src}
        />
      </div>
      <div>
        <div className="product-card_name" onClick={handleOnProductClick}>
          {product.name}
        </div>
        <div className="product-card_size">{product.size}</div>
      </div>
      <div className="product-card_order">
        <div className="product-card_price">${product.price}</div>
        <button className="product-card_cart-button">
          <CartIcon /> Cart
        </button>
      </div>
    </div>
  );
};
