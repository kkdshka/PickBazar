import React, { useState, Fragment } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedContactNumber,
  selectContactNumber,
} from "../../store/checkoutSlice";
import {
  allContactNumbers,
  addNumber,
  editNumber,
  removeNumber,
} from "../../store/entities/contactNumbersSlice";
import { ContentCard } from "./cards/ContentCard";
import { CheckoutCard } from "./cards/CheckoutCard";
import { ContactNumberForm } from "./forms/ContactNumberForm";
import { Modal } from "../common/Modal";

export const ContactNumbers = () => {
  const contactNumbers = useSelector(allContactNumbers);
  const selectedContactNumber = useSelector(getSelectedContactNumber);
  const dispatch = useDispatch();

  const [modalContent, setModalContent] = useState(<Fragment />);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);

  const handleOnAddNumberClick = () => {
    const initialValues = {
      number: "",
    };

    const onSubmit = (values) => {
      const newNumber = { ...values, id: uuid() };

      dispatch(addNumber(newNumber));
      dispatch(selectContactNumber(newNumber));
      handleCloseModal();
    };

    setModalContent(
      <ContactNumberForm
        close={handleCloseModal}
        initialValues={initialValues}
        onSubmit={onSubmit}
        title="Add New Number"
      />
    );
    setOpenModal(true);
  };

  const handleOnEditNumberClick = (contactNumber) => () => {
    const initialValues = {
      number: contactNumber.number,
    };

    const onSubmit = (values) => {
      dispatch(editNumber({ changes: { ...values }, id: contactNumber.id }));
      dispatch(selectContactNumber({ ...values, id: contactNumber.id }));
      handleCloseModal();
    };

    setModalContent(
      <ContactNumberForm
        close={handleCloseModal}
        initialValues={initialValues}
        onSubmit={onSubmit}
        title="Edit Number"
      />
    );
    setOpenModal(true);
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
      {openModal && <Modal>{modalContent}</Modal>}
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
