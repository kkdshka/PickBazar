import React from "react";
import "./Button.scss";

export const Button = ({ name, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  );
};
