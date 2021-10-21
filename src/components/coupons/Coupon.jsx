import React from "react";
import "./Coupon.scss";

export const Coupon = ({
  coupon: { title, description, buttonText, gradientColors },
}) => {
  return (
    <div
      className="coupon"
      style={{
        background: `linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.end} 100%)`,
      }}
    >
      <div className="coupon_title">{title}</div>
      <div className="coupon_description">{description}</div>
      <button
        className="coupon_button-text"
        style={{ color: gradientColors.start }}
      >
        {buttonText}
      </button>
    </div>
  );
};
