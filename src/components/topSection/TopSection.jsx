import React from "react";
import { Header } from "./Header";
import { Title } from "./Title";
import "./TopSection.scss";

export const TopSection = () => {
  return (
    <div className="top-section">
      <Header />
      <Title />
    </div>
  );
};
