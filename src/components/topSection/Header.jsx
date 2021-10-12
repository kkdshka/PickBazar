import React from "react";
import { Button } from "../common/Button";
import { Search } from "./Search";
import "./Header.scss";
import { open } from "../signUp/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../signUp/SignUp";

export const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.signUp.isOpen);

  return (
    <div className="header">
      <div className="flex-row-container">
        <img src={"/logo.png"} alt="logo" className="logo" />
        <Search />
      </div>
      <div>
        <Button name="Join" onClick={() => dispatch(open())} />
        {isOpen ? <SignUp /> : null}
      </div>
    </div>
  );
};
