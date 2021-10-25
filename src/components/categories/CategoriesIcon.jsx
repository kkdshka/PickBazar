import React from "react";
import { ReactComponent as FruitIcon } from "../../img/categoriesIcons/1.svg";
import { ReactComponent as MeatIcon } from "../../img/categoriesIcons/2.svg";
import { ReactComponent as SnacksIcon } from "../../img/categoriesIcons/3.svg";
import { ReactComponent as PetIcon } from "../../img/categoriesIcons/4.svg";
import { ReactComponent as HomeIcon } from "../../img/categoriesIcons/5.svg";
import { ReactComponent as DairyIcon } from "../../img/categoriesIcons/6.svg";
import { ReactComponent as CookingIcon } from "../../img/categoriesIcons/7.svg";
import { ReactComponent as BreakfastIcon } from "../../img/categoriesIcons/8.svg";
import { ReactComponent as BeverageIcon } from "../../img/categoriesIcons/9.svg";
import { ReactComponent as BeautyIcon } from "../../img/categoriesIcons/10.svg";

export const CategoriesIcon = ({ categoryId }) => {
  switch (categoryId) {
    case 1:
      return <FruitIcon />;
    case 4:
      return <MeatIcon />;
    case 7:
      return <SnacksIcon />;
    case 16:
      return <PetIcon />;
    case 21:
      return <HomeIcon />;
    case 28:
      return <DairyIcon />;
    case 35:
      return <CookingIcon />;
    case 40:
      return <BreakfastIcon />;
    case 47:
      return <BeverageIcon />;
    case 55:
      return <BeautyIcon />;
  }
};
