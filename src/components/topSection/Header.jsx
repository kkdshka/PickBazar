import React from "react";
import { useSelector } from "react-redux";
import { Search } from "./Search";
import { SignUp } from "../signUp/SignUp";
import { SignIn } from "../signIn/SignIn";
import { AuthButton } from "../authButton/AuthButton";
import "./Header.scss";

export const Header = () => {
  const isSignUpOpen = useSelector((state) => state.signUp.isOpen);
  const isSignInOpen = useSelector((state) => state.signIn.isOpen);

  return (
    <div className="header">
      <div className="flex-row-container">
        <img src={"/logo.png"} alt="logo" className="logo" />
        <Search />
      </div>
      <div>
        <AuthButton />
        {isSignUpOpen ? <SignUp /> : null}
        {isSignInOpen ? <SignIn /> : null}
      </div>
    </div>
  );
};
