import React from "react";
import { AuthButton } from "../authButton/AuthButton";
import { Search } from "./Search";
import "./Header.scss";
import { useSelector } from "react-redux";
import { SignUp } from "../signUp/SignUp";

export const Header = () => {
  const isSignUpOpen = useSelector((state) => state.signUp.isOpen);

  return (
    <div className="header">
      <div className="flex-row-container">
        <img src={"/logo.png"} alt="logo" className="logo" />
        <Search />
      </div>
      <div>
        <AuthButton />
        {isSignUpOpen ? <SignUp /> : null}
      </div>
    </div>
  );
};
