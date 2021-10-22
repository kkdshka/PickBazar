import React, { useState } from "react";
import classNames from "classnames";

export const SubCategory = ({ category }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <li
      className={classNames("child-category", { active: active })}
      onClick={handleClick}
    >
      {category.title}
    </li>
  );
};
