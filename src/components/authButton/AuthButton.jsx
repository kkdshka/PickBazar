import React from "react";
import { open, logOut } from "../../store/signUpSlice";
import { Button } from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import "./AuthButton.scss";

export const AuthButton = () => {
  const user = useSelector((state) => state.user.user);
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
