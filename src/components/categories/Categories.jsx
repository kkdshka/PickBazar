import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategories } from "../../store/categoriesSlice";
import { Category } from "./Category";
import "./Categories.scss";

export const Categories = () => {
  const dispatch = useDispatch();
  const [categories, status] = useSelector(getCategories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  return (
    <ul className="categories">
      {categories.map((category) => {
        return <Category category={category} key={`category-${category.id}`} />;
      })}
    </ul>
  );
};
