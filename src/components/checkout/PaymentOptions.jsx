import React from "react";
import { useDispatch } from "react-redux";
import { checkoutOrder } from "../../store/checkoutSlice";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";

export const PaymentOptions = () => {
  const dispatch = useDispatch();
  const onCheckout = () => dispatch(checkoutOrder());

  return (
    <CheckoutCard id={4} header="Payment Option" onCheckout={onCheckout}>
      <ContentCard title="Cash" text="Cash" active />
    </CheckoutCard>
  );
};
