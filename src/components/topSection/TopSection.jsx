import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./Header";
import { Title } from "./Title";
import "./TopSection.scss";

export const TopSection = () => {
  return (
    <div className="top-section">
      <Header />
      <Title />
      <ToastContainer />
    </div>
  );
};
