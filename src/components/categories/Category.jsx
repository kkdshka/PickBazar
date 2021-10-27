import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { SubCategory } from "./SubCategory";
import { CategoriesIcon } from "./CategoriesIcon";
import { setParentCategoryId } from "../../store/productsSlice";
import {
  getActiveParentCategoryId,
  setActiveParentCategoryId,
} from "../../store/categoriesSlice";

export const Category = ({ category: { id, title, childCategories } }) => {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(getActiveParentCategoryId);

  const handleClick = () => {
    dispatch(setActiveParentCategoryId(id));
    dispatch(setParentCategoryId(id));
  };

  const categoryTitleClassName = classNames("category_title", {
    active: id === activeCategoryId,
  });
  const childCategoriesClassName = classNames("child-categories", {
    active: id === activeCategoryId,
  });

  return (
    <li className="category">
      <div className={categoryTitleClassName} onClick={handleClick}>
        <CategoriesIcon categoryId={id} />
        {title}
      </div>
      <ul className={childCategoriesClassName}>
        {childCategories.map((childCategory) => (
          <SubCategory
            category={childCategory}
            key={`child-category-${childCategory.id}`}
          />
        ))}
      </ul>
    </li>
  );
};
