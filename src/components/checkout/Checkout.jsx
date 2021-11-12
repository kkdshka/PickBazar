import React from "react";
import { Addresses } from "./Addresses";
import { Schedule } from "./Schedule";
import { ContactNumbers } from "./ContactNumbers";
import { PaymentOptions } from "./PaymentOptions";
import { Order } from "./order/Order";

export const Checkout = () => {
  return (
    <div className="checkout_container">
      <div className="checkout_credentials">
        <Addresses />
        <Schedule />
        <ContactNumbers />
        <PaymentOptions />
      </div>
      <Order />
    </div>
  );
};
