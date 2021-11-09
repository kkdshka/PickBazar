import React from "react";
import { Button } from "../../common/Button";
import { IoClose } from "react-icons/io5";
import "./CheckoutForm.scss";

export const CheckoutForm = ({
  formik,
  close,
  title,
  submitName,
  children,
}) => {
  return (
    <div className="checkout-form">
      <IoClose className="checkout-form_close-icon" onClick={close} />
      <div className="checkout-form_title">{title}</div>
      {children}
      <Button
        type="submit"
        className="checkout-form_save-button"
        disabled={!formik.dirty || !formik.isValid}
        onClick={formik.handleSubmit}
      >
        {submitName}
      </Button>
    </div>
  );
};
