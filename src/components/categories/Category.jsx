import React, { useState } from "react";
import classNames from "classnames";
import { SubCategory } from "./SubCategory";
import { CategoriesIcon } from "./CategoriesIcon";
import { setParentCategoryId } from "../../store/productsSlice";
import { useDispatch } from "react-redux";

export const Category = ({ category: { id, title, childCategories } }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
    dispatch(setParentCategoryId(id));
  };

  const categoryTitleClassName = classNames("category_title", {
    active: active,
  });
  const childCategoriesClassName = classNames("child-categories", {
    active: active,
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
