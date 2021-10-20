import React from "react";
import { IoClose } from "react-icons/io5";
import "./AuthFormContainer.scss";

export const AuthFormContainer = ({ title, subtitle, onClose, children }) => {
  return (
    <div className="auth-form-container">
      <IoClose className="auth-form_close-icon" onClick={onClose}>
        Close
      </IoClose>
      <div className="auth-form_title">{title}</div>
      <div className="auth-form_subtitle">{subtitle}</div>
      {children}
    </div>
  );
};
