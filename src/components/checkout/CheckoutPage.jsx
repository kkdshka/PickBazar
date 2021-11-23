import React from "react";
import { Header } from "../topSection/Header";
import { Checkout } from "./Checkout";
import "./Checkout.scss";

export const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <Header withSearch={false} />
      <Checkout />
    </div>
  );
};
