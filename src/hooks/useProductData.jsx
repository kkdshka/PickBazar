import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategoryProducts,
  productStatus,
  reset,
  getStatus,
} from "../store/productSlice";
import { useQuery } from "./useQuery";

export function useProductData() {
  const query = useQuery();
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const { id } = useParams();
  const categoryId = query.get("category-id");

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
}
