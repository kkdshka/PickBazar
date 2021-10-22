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
  "Fruits & Vegetables": <GiFruitBowl />,
  "Meat & Fish": <GiMeat />,
  Snacks: <GiChipsBag />,
  "Pet Care": <GiPaw />,
  "Home & Cleaning": <GiFamilyHouse />,
  Dairy: <GiMilkCarton />,
  Cooking: <GiCookingPot />,
  Breakfast: <GiCoffeeCup />,
  Beverage: <GiMartini />,
  "Beauty & Health": <GiDelicatePerfume />,
};

export const Category = ({ category: { title, childCategories } }) => {
  const [active, setActive] = useState(false);

  return (
    <li className="category">
      <div
        className={classNames("category_title", { active: active })}
        onClick={() => setActive(!active)}
      >
        {categoriesIcons[title]}
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
