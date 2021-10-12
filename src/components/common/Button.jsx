import React from "react";
import "./Button.scss";

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button className={"button " + className} onClick={onClick}>
      {children}
    </button>
  );
};
