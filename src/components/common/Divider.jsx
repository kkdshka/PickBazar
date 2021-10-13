import React from "react";
import "./Divider.scss";

export const Divider = ({ children, className = "" }) => {
  return (
    <div className={"divider_container" + className}>
      <div className="divider_border" />
      <span className="divider_content">{children}</span>
      <div className="divider_border" />
    </div>
  );
};
