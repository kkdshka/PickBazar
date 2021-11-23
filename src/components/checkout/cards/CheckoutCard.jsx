import React, { Fragment } from "react";
import { Button } from "../../common/Button";
import "./CheckoutCard.scss";
import {
  checkoutOrder,
  getCheckoutIsReady,
} from "../../../store/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";

export const CheckoutCard = ({
  id,
  header,
  addTitle,
  onAddClick,
  onCheckout,
  children,
}) => {
  const dispatch = useDispatch();
  const checkoutIsReady = useSelector(getCheckoutIsReady);

  return (
    <div className="checkout-card">
      <div className="checkout-card_header">
        <div className="checkout-card_title_id">{id}</div>
        <div className="checkout-card_title">{header}</div>
        {addTitle && (
          <div className="checkout-card_add-button" onClick={onAddClick}>
            + {addTitle}
          </div>
        )}
      </div>
      <div className="checkout-card_content">{children}</div>
      {onCheckout && (
        <Fragment>
          <div className="checkout-card_agreement">
            By making this purchase you agree to our{" "}
            <span className="checkout-card_agreement_link">
              terms and conditions
            </span>
          </div>
          <Button
            className="checkout-card_confirm-button"
            onClick={() => dispatch(checkoutOrder())}
            disabled={!checkoutIsReady}
          >
            Proceed to Checkout
          </Button>
        </Fragment>
      )}
    </div>
  );
};
