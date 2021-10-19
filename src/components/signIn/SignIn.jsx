import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { close, signInUser } from "../../store/signInSlice";
import { open } from "../../store/signUpSlice";
import { Modal } from "../common/Modal";
import { FormikInput } from "../common/FormikInput";
import { AuthFormContainer } from "../authFormParts/AuthFormContainer";
import { AuthFormSubmit } from "../authFormParts/AuthFormSubmit";
import "./SignIn.scss";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const SignIn = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleClose = () => {
    formik.resetForm();
    dispatch(close());
  };

  const handleSignUpClick = () => {
    dispatch(close());
    dispatch(open());
  };

  const handleResetPasswordClick = () => {};

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        signInUser({
          identifier: values.email,
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
      <AuthFormContainer
        onClose={handleClose}
        title="Welcome Back"
        subtitle="Login with your email & password"
      >
        <FormikInput formik={formik} id="email" placeholder="Your Email" />
        <FormikInput
          id="password"
          formik={formik}
          type="password"
          placeholder="Your Password"
        />
        <AuthFormSubmit formik={formik} />
        <div>
          Don't have account yet?{" "}
          <span className="sign-in_link" onClick={handleSignUpClick}>
            Sign Up
          </span>
        </div>
        <div className="sign-in_forgot-pass">
          Forgot your password?{" "}
          <span className="sign-in_link" onClick={handleResetPasswordClick}>
            Reset It
          </span>
        </div>
      </AuthFormContainer>
    </Modal>
  );
};
