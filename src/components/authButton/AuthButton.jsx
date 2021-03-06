import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/signUpSlice";
import { logOut } from "../../store/authSlice";
import { Button } from "../common/Button";
import "./AuthButton.scss";

export const AuthButton = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  if (user) {
    return (
      <Button className="button-auth" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    );
  } else {
    return (
      <Button className="button-auth" onClick={() => dispatch(open())}>
        Join
      </Button>
    );
  }
};
