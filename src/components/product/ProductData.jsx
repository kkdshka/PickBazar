import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import { CartButton } from "../common/CartButton";
import { Tag } from "../common/Tag";
import "./ProductData.scss";

export const ProductData = ({ product }) => {
  const dispatch = useDispatch();
  const handleOnCartClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="product-data_container">
      <div className="product-data">
        <div className="product-data_first-row">
          <div className="product-data_name">{product.name}</div>
          <div className="product-data_price">${product.price}</div>
        </div>
        <div className="product-data_size">{product.size}</div>
        <div className="product-data_description">{product.description}</div>
        <div className="product-data_cart">
          <CartButton onClick={handleOnCartClick} />
        </div>
        <div className="product-data_tags">
          <Tag name={product.category.parentCategoryName} />
          <Tag name={product.category.title} />
        </div>
      </div>
    </div>
  );
};
