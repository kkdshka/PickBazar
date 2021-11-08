import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAddress,
  getCheckoutState,
  removeAddress,
  editAddress,
} from "../../store/checkoutSlice";
import { CheckoutCard } from "./cards/CheckoutCard";
import { ContentEditableCard } from "./cards/ContentEditableCard";
import { Modal } from "../common/Modal";
import { AddressForm } from "./forms/AddressForm";

export const Checkout = () => {
  const dispatch = useDispatch();

  const [modalContent, setModalContent] = useState(<></>);
  const [openModal, setOpenModal] = useState(false);

  const { addresses } = useSelector(getCheckoutState);
  const [activeAddress, setActiveAddress] = useState(null);

  const handleCloseModal = () => setOpenModal(false);

  const handleOnAddAddressClick = () => {
    const initialValues = {
      title: "",
      address: "",
    };

    const onSubmit = (values) => {
      dispatch(addAddress(values));
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
      dispatch(editAddress({ ...values, id: address.id }));
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

  return (
    <div className="checkout_container">
      {openModal && <Modal>{modalContent}</Modal>}
      <CheckoutCard
        id={1}
        header="Delivery Address"
        addTitle="Add Address"
        onAddClick={handleOnAddAddressClick}
      >
        {addresses &&
          addresses.map((address) => (
            <ContentEditableCard
              title={address.title}
              text={address.address}
              active={activeAddress && activeAddress.id === address.id}
              onClick={() => setActiveAddress(address)}
              onDelete={() => dispatch(removeAddress(address.id))}
              onEdit={handleOnEditAddressClick(address)}
              key={address.id}
            />
          ))}
      </CheckoutCard>
    </div>
  );
};
