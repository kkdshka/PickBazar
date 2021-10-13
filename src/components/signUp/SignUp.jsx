import React from "react";
import { Modal } from "../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { close, setFormValues } from "./signUpSlice";
import { IoClose } from "react-icons/io5";
import "./SignUp.scss";
import { Button } from "../common/Button";
import { Divider } from "../common/Divider";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { useFormik } from "formik";

export const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.signUp.formInitialValues);

  const handleContinueWithFacebook = () => {};

  const handleContinueWithGoogle = () => {};

  const handleLoginClick = () => {};

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      dispatch(setFormValues(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal>
      <div className="sign-up">
        <div className="sign-up_title">Sign up</div>
        <div className="sign-up_subtitle">Welcome!</div>
        <input
          id="username"
          type="text"
          className="sign-up_input"
          {...formik.getFieldProps("username")}
        />
        <input
          id="email"
          type="text"
          className="sign-up_input"
          {...formik.getFieldProps("email")}
        />
        <input
          id="password"
          type="password"
          className="sign-up_input"
          {...formik.getFieldProps("password")}
        />
        <input
          id="passwordConfirmation"
          type="password"
          className="sign-up_input"
          {...formik.getFieldProps("passwordConfirmation")}
        />
        <div className="sign-up_agreement">
          By signing up, you agree to Pickbazar's{" "}
          <span className="link">Terms & Condtion</span>
        </div>
        <Button
          type="button"
          className="button-continue"
          onClick={formik.handleSubmit}
        >
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
