import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveCategoryId,
  setActiveCategoryId,
} from "../../store/categoriesSlice";

export const SubCategory = ({ category: { id, title } }) => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(getActiveCategoryId);

  const handleClick = () => {
    dispatch(setActiveCategoryId(id));
  };

  const childCategoryClassName = classNames("child-category", {
    active: activeCategoryId === id,
  });

  return (
    <li className={childCategoryClassName} onClick={handleClick}>
      {title}
    </li>
  );
};
