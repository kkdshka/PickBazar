import React from "react";
import { Categories } from "../components/categories/Categories";
import { Products } from "../components/products/Products";
import "./Shop.scss";

export const Shop = () => {
  return (
    <div className="shop_container">
      <Categories />
      <Products />
    </div>
  );
};
