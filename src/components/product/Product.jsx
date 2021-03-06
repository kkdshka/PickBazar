import React from "react";
import { ProductPhotos } from "./ProductPhotos";
import { ProductData } from "./ProductData";
import "./Product.scss";

export const Product = ({ product }) => {
  return (
    <div className="product_container">
      <div className="product_photos">
        <ProductPhotos photos={product.photos} />
      </div>
      <div className="product_data">
        <ProductData product={product} />
      </div>
    </div>
  );
};
