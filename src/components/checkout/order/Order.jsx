import React from "react";
import { useSelector } from "react-redux";
import { getCartState } from "../../../store/cartSlice";
import { ReceiptProductPart } from "./ReceiptProductPart";
import { ReceiptSubTotalPart } from "./ReceiptSubTotalPart";
import "./Order.scss";

export const Order = () => {
  const { products, price, totalPrice } = useSelector(getCartState);

  return (
    <div className="order_container">
      <div className="order_header">Your order</div>
      {products.map((product) => (
        <ReceiptProductPart product={product} key={product.id} />
      ))}
      <div className="order_divider" />
      <ReceiptSubTotalPart price={price} name="Sub total" />
      <ReceiptSubTotalPart price="3.00" name="Delivery Fee" />
      <ReceiptSubTotalPart price="0.00" name="Discount" />
      <div className="order_total">
        <div className="order_total_name">
          Total <span className="order_total_name_sub">(Incl. VAT)</span>
        </div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};
