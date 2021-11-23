import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedAddress, selectAddress } from "../../store/checkoutSlice";
import {
  allAddresses,
  removeAddress,
} from "../../store/entities/addressesSlice";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";
import { AddAddress } from "./modals/AddAddress";
import { EditAddress } from "./modals/EditAddress";
import { Modal } from "../common/Modal";

const ModalType = { none: "NONE", add: "ADD", edit: "EDIT" };

export const Addresses = () => {
  const addresses = useSelector(allAddresses);
  const selectedAddress = useSelector(getSelectedAddress);
  const dispatch = useDispatch();

  const [currentModal, setCurrentModal] = useState({
    type: ModalType.none,
    value: "",
  });

  const handleCloseModal = () =>
    setCurrentModal({
      type: ModalType.none,
      value: "",
    });

  const handleOnAddAddressClick = () => {
    setCurrentModal({
      ...currentModal,
      type: ModalType.add,
    });
  };

  const handleOnEditAddressClick = (address) => () => {
    setCurrentModal({
      type: ModalType.edit,
      value: address,
    });
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
      {currentModal.type === ModalType.add && (
        <Modal>
          <AddAddress onClose={handleCloseModal} />
        </Modal>
      )}
      {currentModal.type === ModalType.edit && (
        <Modal>
          <EditAddress
            address={currentModal.value}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
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
