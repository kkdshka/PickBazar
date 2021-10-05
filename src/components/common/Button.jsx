import React from "react";
import "./Button.css";

export const Button = ({ name, onClick }) => {
  return (
    <button className={"button"} onClick={onClick}>
      {name}
    </button>
  );
};
