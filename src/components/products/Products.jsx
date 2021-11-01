import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productsStatus,
  getProducts,
  fetchProducts,
  loadMore,
  getMaxListSize,
} from "../../store/productsSlice";
import { LoadMore } from "./LoadMore";
import { ProductsList } from "../productsList/ProductsList";
import "./Products.scss";

export const Products = () => {
  const dispatch = useDispatch();
  const [products, status] = useSelector(getProducts);
  const isMaxListSize = useSelector(getMaxListSize);

  useEffect(() => {
    if (status === productsStatus.IDLE) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(loadMore());
  };

  return (
    <div className="products_container">
      <ProductsList products={products} />
      <div className="products_load-more_container">
        {!isMaxListSize && <LoadMore onClick={handleLoadMoreClick} />}
      </div>
    </div>
  );
};
