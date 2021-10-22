import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories } from "../../store/categoriesSlice";
import { Category } from "./Category";
import "./Categories.scss";

export const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const categoriesStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    <ul className="categories">
      {categories.map((category) => {
        return <Category category={category} key={`category-${category.id}`} />;
      })}
    </ul>
  );
};
