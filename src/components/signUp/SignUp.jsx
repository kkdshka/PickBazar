import React from "react";
import { Modal } from "../common/Modal";
import { useDispatch } from "react-redux";
import { close, signUpUser } from "../../store/signUpSlice";
import { IoClose } from "react-icons/io5";
import "./SignUp.scss";
import { Button } from "../common/Button";
import { Divider } from "../common/Divider";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "../common/FormikInput";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const handleContinueWithFacebook = () => {};

  const handleLoginClick = () => {};

  const handleClose = () => {
    formik.resetForm();
    dispatch(close());
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        signUpUser({
          username: values.username,
          email: values.email,
          password: values.password,
        })
      ).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(close());
        }
      });
    },
  });

  return (
    <Modal>
      <div className="sign-up">
        <IoClose className="close-icon" onClick={handleClose}>
          Close
        </IoClose>
        <div className="sign-up_title">Sign up</div>
        <div className="sign-up_subtitle">Welcome!</div>
        <FormikInput
          id="username"
          formik={formik}
          placeholder="Your Username"
        />
        <FormikInput id="email" formik={formik} placeholder="Your Email" />
        <FormikInput
          id="password"
          formik={formik}
          type="password"
          placeholder="Your Password"
        />
        <FormikInput
          id="passwordConfirmation"
          formik={formik}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="sign-up_agreement">
          By signing up, you agree to Pickbazar's{" "}
          <span className="link">Terms & Condtion</span>
        </div>
        <Button
          type="button"
          className="button-continue"
          disabled={!formik.dirty || !formik.isValid}
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
        <a
          className="button button-google"
          href={`${process.env.REACT_APP_BASE_URL}connect/google`}
        >
          <AiOutlineGoogle size={17} className="sign-up_icon" />
          Continue with Google
        </a>
        <div>
          Already have an account?{" "}
          <span className="sign-up_login" onClick={handleLoginClick}>
            Login
          </span>
        </div>
      </div>
    </Modal>
  );
};
