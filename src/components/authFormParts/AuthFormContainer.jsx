import React from "react";
import { IoClose } from "react-icons/io5";
import "./AuthFormContainer.scss";

export const AuthFormContainer = ({ title, subtitle, onClose, children }) => {
  return (
    <div className="auth-form-container">
      <IoClose className="auth-form-container_close-icon" onClick={onClose}>
        Close
      </IoClose>
      <div className="auth-form-container_title">{title}</div>
      <div className="auth-form-container_subtitle">{subtitle}</div>
      {children}
    </div>
  );
};
