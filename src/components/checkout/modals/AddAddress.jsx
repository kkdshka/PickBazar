import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../store/entities/addressesSlice";
import { selectAddress } from "../../../store/checkoutSlice";
import { AddressForm } from "../forms/AddressForm";

export const AddAddress = ({ onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: "",
    address: "",
  };

  const onSubmit = (values) => {
    const newAddress = { ...values, id: uuid() };
    dispatch(addAddress(newAddress));
    dispatch(selectAddress(newAddress));
    onClose();
  };

  return (
    <AddressForm
      close={onClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Add New Address"
    />
  );
};
