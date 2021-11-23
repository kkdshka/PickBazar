import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedContactNumber,
  selectContactNumber,
} from "../../store/checkoutSlice";
import {
  allContactNumbers,
  removeNumber,
} from "../../store/entities/contactNumbersSlice";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";
import { AddContactNumber } from "./modals/AddContactNumber";
import { EditContactNumber } from "./modals/EditContactNumber";
import { Modal } from "../common/Modal";

const ModalType = { none: "NONE", add: "ADD", edit: "EDIT" };

export const ContactNumbers = () => {
  const contactNumbers = useSelector(allContactNumbers);
  const selectedContactNumber = useSelector(getSelectedContactNumber);
  const dispatch = useDispatch();

  const [currentModal, setCurrentModal] = useState({
    type: ModalType.none,
    value: "",
  });

  const handleCloseModal = () => {
    setCurrentModal({
      type: ModalType.none,
      value: "",
    });
  };

  const handleOnAddNumberClick = () => {
    setCurrentModal({ ...currentModal, type: ModalType.add });
  };

  const handleOnEditNumberClick = (contactNumber) => () => {
    setCurrentModal({ type: ModalType.edit, value: contactNumber });
  };

  const handleOnDeleteNumberClick = (id) => () => dispatch(removeNumber(id));

  const handleOnNumberCardClick = (number) => () =>
    dispatch(selectContactNumber(number));

  const isActiveNumberCard = (id) =>
    selectedContactNumber && selectedContactNumber.id === id;

  return (
    <CheckoutCard
      id={3}
      header="Contact Number"
      addTitle="Add Number"
      onAddClick={handleOnAddNumberClick}
    >
      {currentModal.type === ModalType.add && (
        <Modal>
          <AddContactNumber onClose={handleCloseModal} />
        </Modal>
      )}
      {currentModal.type === ModalType.edit && (
        <Modal>
          <EditContactNumber
            contactNumber={currentModal.value}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
      {contactNumbers &&
        contactNumbers.map((number) => (
          <ContentCard
            title={"Primary"}
            text={number.number}
            active={isActiveNumberCard(number.id)}
            onClick={handleOnNumberCardClick(number)}
            onDelete={handleOnDeleteNumberClick(number.id)}
            onEdit={handleOnEditNumberClick(number)}
            key={number.id}
            editable
          />
        ))}
    </CheckoutCard>
  );
};
