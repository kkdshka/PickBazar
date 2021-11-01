import React from "react";
import { ProductCard } from "./ProductCard";
import "./ProductsList.scss";

export const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
