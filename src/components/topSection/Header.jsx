import React from "react";
import { Button } from "../common/Button";
import { Search } from "./Search";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="flex-row-container">
        <img src={"/logo.png"} alt="logo" className="logo" />
        <Search />
      </div>
      <div>
        <Button name="Join" onClick={() => {}} />
      </div>
    </div>
  );
};
