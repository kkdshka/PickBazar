import React, { useState } from "react";
import classNames from "classnames";
import { SubCategory } from "./SubCategory";
import {
  GiChipsBag,
  GiFruitBowl,
  GiMeat,
  GiPaw,
  GiFamilyHouse,
  GiMilkCarton,
  GiCookingPot,
  GiCoffeeCup,
  GiMartini,
  GiDelicatePerfume,
} from "react-icons/gi";

const categoriesIcons = {
  1: <GiFruitBowl />,
  4: <GiMeat />,
  7: <GiChipsBag />,
  16: <GiPaw />,
  21: <GiFamilyHouse />,
  28: <GiMilkCarton />,
  35: <GiCookingPot />,
  40: <GiCoffeeCup />,
  47: <GiMartini />,
  55: <GiDelicatePerfume />,
};

export const Category = ({ category: { id, title, childCategories } }) => {
  const [active, setActive] = useState(false);

  return (
    <li className="category">
      <div
        className={classNames("category_title", { active: active })}
        onClick={() => setActive(!active)}
      >
        {categoriesIcons[id]}
        {title}
      </div>
      <ul className={classNames("child-categories", { active: active })}>
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
