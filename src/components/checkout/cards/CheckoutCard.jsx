import React from "react";
import "./CheckoutCard.scss";

export const CheckoutCard = ({
  id,
  header,
  addTitle,
  onAddClick,
  children,
}) => {
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
    </div>
  );
};
