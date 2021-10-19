import React from "react";
import { IoClose } from "react-icons/io5";
import "./AuthFormContainer.scss";

export const AuthFormContainer = ({ onClose, children }) => {
  return (
    <div className="auth-form-container">
      <IoClose className="close-icon" onClick={onClose}>
        Close
      </IoClose>
      {children}
    </div>
  );
};
