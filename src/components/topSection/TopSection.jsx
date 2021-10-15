import React from "react";
import { Header } from "./Header";
import "./TopSection.scss";
import { Title } from "./Title";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopSection = () => {
  return (
    <div className="top-section">
      <Header />
      <Title />
      <ToastContainer />
    </div>
  );
};
