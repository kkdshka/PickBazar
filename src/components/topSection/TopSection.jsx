import React from "react";
import { Header } from "./Header";
import "./TopSection.css";
import { Title } from "./Title";

export const TopSection = () => {
  return (
    <div className={"top-section"}>
      <Header />
      <Title />
    </div>
  );
};
