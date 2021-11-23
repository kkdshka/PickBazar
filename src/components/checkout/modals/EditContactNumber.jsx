import { useDispatch } from "react-redux";
import { editNumber } from "../../../store/entities/contactNumbersSlice";
import { selectContactNumber } from "../../../store/checkoutSlice";
import { ContactNumberForm } from "../forms/ContactNumberForm";
import React from "react";

export const EditContactNumber = ({ contactNumber, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    number: contactNumber.number,
  };

  const onSubmit = (values) => {
    dispatch(editNumber({ changes: { ...values }, id: contactNumber.id }));
    dispatch(selectContactNumber({ ...values, id: contactNumber.id }));
    onClose();
  };

  return (
    <ContactNumberForm
      close={onClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Add New Number"
    />
  );
};
