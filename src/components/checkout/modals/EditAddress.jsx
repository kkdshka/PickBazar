import React from "react";
import { useDispatch } from "react-redux";
import { editAddress } from "../../../store/entities/addressesSlice";
import { selectAddress } from "../../../store/checkoutSlice";
import { AddressForm } from "../forms/AddressForm";

export const EditAddress = ({ address, onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    title: address.title,
    address: address.address,
  };

  const onSubmit = (values) => {
    dispatch(editAddress({ changes: { ...values }, id: address.id }));
    dispatch(selectAddress({ ...values, id: address.id }));
    onClose();
  };

  return (
    <AddressForm
      close={onClose}
      initialValues={initialValues}
      onSubmit={onSubmit}
      title="Edit Address"
    />
  );
};
