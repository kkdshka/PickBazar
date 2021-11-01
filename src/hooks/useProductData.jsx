import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategoryProducts,
  productStatus,
  reset,
  getStatus,
  getState,
} from "../store/productSlice";

export function useProductData() {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const { id } = useParams();

  useEffect(() => {
    if (status === productStatus.IDLE) {
      dispatch(fetchAllCategoryProducts({ productId: id }));
    }
  }, [status, dispatch, id]);

  useEffect(() => {
    return () => dispatch(reset());
  }, [id, dispatch]);

  return useSelector(getState);
}
