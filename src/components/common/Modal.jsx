import React from "react";
import { Portal } from "./Portal";
import "./Modal.scss";

export const Modal = ({ children }) => {
  return (
    <Portal>
      <div className="backdrop">{children}</div>
    </Portal>
  );
};
