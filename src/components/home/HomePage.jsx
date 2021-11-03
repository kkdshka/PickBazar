import React from "react";
import { TopSection } from "../topSection/TopSection";
import { Coupons } from "../coupons/Coupons";
import { Shop } from "../../shop/Shop";
import { Cart } from "../cart/Cart";

export const HomePage = () => {
  return (
    <div>
      <TopSection />
      <Coupons />
      <Shop />
      <Cart />
    </div>
  );
};
