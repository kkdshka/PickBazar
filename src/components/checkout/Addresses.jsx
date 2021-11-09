import React, { useState, Fragment } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedAddress, selectAddress } from "../../store/checkoutSlice";
import {
  allAddresses,
  addAddress,
  editAddress,
  removeAddress,
} from "../../store/entities/addressesSlice";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";
import { AddressForm } from "./forms/AddressForm";
import { Modal } from "../common/Modal";

export const Addresses = () => {
  const addresses = useSelector(allAddresses);
  const selectedAddress = useSelector(getSelectedAddress);
  const dispatch = useDispatch();

  const [modalContent, setModalContent] = useState(<Fragment />);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  const handleOnAddAddressClick = () => {
    const initialValues = {
      title: "",
      address: "",
    };

    const onSubmit = (values) => {
      dispatch(addAddress({ ...values, id: uuid() }));
      handleCloseModal();
    };

    setModalContent(
      <AddressForm
        close={handleCloseModal}
        initialValues={initialValues}
        onSubmit={onSubmit}
        title="Add New Address"
      />
    );
    setOpenModal(true);
  };

  const handleOnEditAddressClick = (address) => () => {
    const initialValues = {
      title: address.title,
      address: address.address,
    };

    const onSubmit = (values) => {
      dispatch(editAddress({ changes: { ...values }, id: address.id }));
      handleCloseModal();
    };

    setModalContent(
      <AddressForm
        close={handleCloseModal}
        initialValues={initialValues}
        onSubmit={onSubmit}
        title="Edit Address"
      />
    );
    setOpenModal(true);
  };

  const handleOnDeleteAddressClick = (id) => () => dispatch(removeAddress(id));

  const handleOnAddressCardClick = (address) => () =>
    dispatch(selectAddress(address));

  const isActiveAddressCard = (id) =>
    selectedAddress && selectedAddress.id === id;

  return (
    <CheckoutCard
      id={1}
      header="Delivery Address"
      addTitle="Add Address"
      onAddClick={handleOnAddAddressClick}
    >
      {openModal && <Modal>{modalContent}</Modal>}
      {addresses &&
        addresses.map((address) => (
          <ContentCard
            title={address.title}
            text={address.address}
            active={isActiveAddressCard(address.id)}
            onClick={handleOnAddressCardClick(address)}
            onDelete={handleOnDeleteAddressClick(address.id)}
            onEdit={handleOnEditAddressClick(address)}
            key={address.id}
            editable
          />
        ))}
    </CheckoutCard>
  );
};
