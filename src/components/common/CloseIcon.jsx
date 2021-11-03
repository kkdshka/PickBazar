import React from "react";
import { IoClose } from "react-icons/io5";
import "./CloseIcon.scss";

export const CloseIcon = ({ onClick }) => {
  return <IoClose className="close-icon" onClick={onClick} />;
};
