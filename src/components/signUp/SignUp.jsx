import React from "react";
import { Modal } from "../common/Modal";
import { useDispatch } from "react-redux";
import { close } from "./signUpSlice";
import { IoClose } from "react-icons/io5";
import "./SignUp.scss";

export const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="sign-up">
        <h1>Sign up</h1>
        <IoClose className="close-icon" onClick={() => dispatch(close())}>
          Close
        </IoClose>
      </div>
    </Modal>
  );
};
