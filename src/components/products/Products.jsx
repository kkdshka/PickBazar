import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsStatus,
  getProducts,
  fetchAllProducts,
} from "../../store/productsSlice";
import { ProductCard } from "./ProductCard";
import "./Products.scss";

export const Products = () => {
  const dispatch = useDispatch();
  const [products, status] = useSelector(getProducts);

  useEffect(() => {
    if (status === productsStatus.IDLE) {
      dispatch(fetchAllProducts());
    }
  }, [status, dispatch]);

  return (
    <div className="products_container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
