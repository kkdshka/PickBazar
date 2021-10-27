import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../store/productsSlice";

export const SubCategory = ({ category }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
    dispatch(setCategoryId(category.id));
  };

  const childCategoryClassName = classNames("child-category", {
    active: active,
  });

  return (
    <li className={childCategoryClassName} onClick={handleClick}>
      {category.title}
    </li>
  );
};
