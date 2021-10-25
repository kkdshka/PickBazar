import React, { useState } from "react";
import classNames from "classnames";

export const SubCategory = ({ category }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
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
