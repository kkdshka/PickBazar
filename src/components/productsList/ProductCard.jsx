import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../api/axiosClient";
import { CartButton } from "../common/CartButton";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const imageURL = product.photos[0].url;
  const src = baseURL + imageURL.slice(1, imageURL.length);

  const path = `/product/${product.id}?category-id=${product.category.id}`;

  return (
    <div className="product-card">
      <Link to={path}>
        <div className="product-card_image_wrapper">
          <img
            className="product-card_image"
            alt={product.photos[0].alternativeText}
            src={src}
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
        <CartButton />
      </div>
    </div>
  );
};
