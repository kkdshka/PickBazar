import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addNumber } from "../../../store/entities/contactNumbersSlice";
import { selectContactNumber } from "../../../store/checkoutSlice";
import { ContactNumberForm } from "../forms/ContactNumberForm";
import React from "react";

export const AddContactNumber = ({ onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    number: "",
  };

  const onSubmit = (values) => {
    const newNumber = { ...values, id: uuid() };

    dispatch(addNumber(newNumber));
    dispatch(selectContactNumber(newNumber));
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
