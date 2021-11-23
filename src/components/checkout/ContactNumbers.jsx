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

export const ContactNumbers = () => {
  const contactNumbers = useSelector(allContactNumbers);
  const selectedContactNumber = useSelector(getSelectedContactNumber);
  const dispatch = useDispatch();

  const [addModal, setAddModal] = useState({ open: false });
  const [editModal, setEditModal] = useState({ open: false, value: "" });

  const handleCloseAddModal = () => setAddModal({ open: false });
  const handleCloseEditModal = () => setEditModal({ open: false, value: "" });

  const handleOnAddNumberClick = () => {
    setAddModal({ open: true });
  };

  const handleOnEditNumberClick = (contactNumber) => () => {
    setEditModal({ open: true, value: contactNumber });
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
      {addModal.open && (
        <Modal>
          <AddContactNumber onClose={handleCloseAddModal} />
        </Modal>
      )}
      {editModal.open && (
        <Modal>
          <EditContactNumber
            contactNumber={editModal.value}
            onClose={handleCloseEditModal}
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
