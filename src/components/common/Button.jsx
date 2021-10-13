import React from "react";
import "./Button.scss";

export const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button className={"button " + className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
