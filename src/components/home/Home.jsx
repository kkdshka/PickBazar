import React from "react";
import { TopSection } from "../topSection/TopSection";
import { Coupons } from "../coupons/Coupons";
import { Shop } from "../../shop/Shop";

export const Home = () => {
  return (
    <div>
      <TopSection />
      <Coupons />
      <Shop />
    </div>
  );
};
