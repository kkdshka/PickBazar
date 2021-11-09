import React from "react";
import { Addresses } from "./Addresses";
import { Schedule } from "./Schedule";
import { ContactNumbers } from "./ContactNumbers";

export const Checkout = () => {
  return (
    <div className="checkout_container">
      <div className="checkout_credentials">
        <Addresses />
        <Schedule />
        <ContactNumbers />
      </div>
    </div>
  );
};
