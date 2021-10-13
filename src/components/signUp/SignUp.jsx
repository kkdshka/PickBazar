import React from "react";
import { Modal } from "../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { close, setFormValue } from "./signUpSlice";
import { IoClose } from "react-icons/io5";
import "./SignUp.scss";
import { Button } from "../common/Button";
import { Divider } from "../common/Divider";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";

export const SignUp = () => {
  const dispatch = useDispatch();
  const { username, email, password, passwordConfirmation } = useSelector(
    (state) => state.signUp.formInitialValues
  );

  const handleChange = (name) => (e) => {
    dispatch(setFormValue({ name: name, value: e.currentTarget.value }));
  };

  const handleContinueClick = () => {};

  const handleContinueWithFacebook = () => {};

  const handleContinueWithGoogle = () => {};

  const handleLoginClick = () => {};

  return (
    <Modal>
      <div className="sign-up">
        <div className="sign-up_title">Sign up</div>
        <div className="sign-up_subtitle">Welcome!</div>
        <CustomInput
          type="text"
          value={username}
          placeholder="Your username"
          onChange={handleChange("username")}
        />
        <CustomInput
          type="text"
          value={email}
          placeholder="Your email"
          onChange={handleChange("email")}
        />
        <CustomInput
          type="password"
          value={password}
          placeholder="Your password"
          onChange={handleChange("password")}
        />
        <CustomInput
          type="password"
          value={passwordConfirmation}
          placeholder="Confirm password"
          onChange={handleChange("passwordConfirmation")}
        />
        <div className="sign-up_agreement">
          By signing up, you agree to Pickbazar's{" "}
          <span className="link">Terms & Condtion</span>
        </div>
        <Button className="button-continue" onClick={handleContinueClick}>
          Continue
        </Button>
        <div className="sign-up_divider">
          <Divider>or</Divider>
        </div>
        <Button
          className="button-facebook"
          onClick={handleContinueWithFacebook}
        >
          <AiFillFacebook className="sign-up_icon" />
          Continue with Facebook
        </Button>
        <Button className="button-google" onClick={handleContinueWithGoogle}>
          <AiOutlineGoogle size={17} className="sign-up_icon" />
          Continue with Google
        </Button>
        <div>
          Already have an account?{" "}
          <span className="sign-up_login" onClick={handleLoginClick}>
            Login
          </span>
        </div>
        <IoClose className="close-icon" onClick={() => dispatch(close())}>
          Close
        </IoClose>
      </div>
    </Modal>
  );
};

const CustomInput = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className="sign-up_input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
