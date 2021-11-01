import React, { useEffect } from "react";
import { Header } from "../topSection/Header";
import { Product } from "./Product";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategoryProducts,
  getState,
  productStatus,
  reset,
} from "../../store/productSlice";
import "./Product.scss";

export const ProductPage = () => {
  const query = useQuery();
  const dispatch = useDispatch();

  const { id } = useParams();
  const categoryId = query.get("category-id");

  const [product, relatedProducts, status] = useSelector(getState);

  useEffect(() => {
    if (status === productStatus.IDLE) {
      dispatch(
        fetchAllCategoryProducts({ categoryId: categoryId, productId: id })
      );
    }
  }, [status, dispatch, categoryId, id]);

  useEffect(() => {
    return () => dispatch(reset());
  }, [id, dispatch]);

  return (
    <div className="product-page_container">
      <Header />
      {product && <Product product={product} />}
    </div>
  );
};
