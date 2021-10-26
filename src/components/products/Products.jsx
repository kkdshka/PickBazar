import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsStatus,
  getProducts,
  fetchAllProducts,
  loadMore,
  getMaxListSize,
} from "../../store/productsSlice";
import { ProductCard } from "./ProductCard";
import { LoadMore } from "./LoadMore";
import "./Products.scss";

export const Products = () => {
  const dispatch = useDispatch();
  const [products, status] = useSelector(getProducts);
  const isMaxListSize = useSelector(getMaxListSize);

  useEffect(() => {
    if (status === productsStatus.IDLE) {
      dispatch(fetchAllProducts());
    }
  }, [status, dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(loadMore());
  };

  return (
    <div className="products_container">
      <div className="products_cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="products_load-more_container">
        {!isMaxListSize && <LoadMore onClick={handleLoadMoreClick} />}
      </div>
    </div>
  );
};
