import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { close, signUpUser } from "../../store/signUpSlice";
import { open } from "../../store/signInSlice";
import { Modal } from "../common/Modal";
import { FormikInput } from "../common/FormikInput";
import { AuthFormContainer } from "../authFormParts/AuthFormContainer";
import { AuthFormSubmit } from "../authFormParts/AuthFormSubmit";
import "./SignUp.scss";

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

  const handleLoginClick = () => {
    dispatch(close());
    dispatch(open());
  };

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
      <AuthFormContainer
        title="Sign Up"
        subtitle="Welcome!"
        onClose={handleClose}
      >
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
          <span className="sign-up_agreement_link">Terms & Condition</span>
        </div>
        <AuthFormSubmit formik={formik} />
        <div>
          Already have an account?{" "}
          <span className="sign-up_link" onClick={handleLoginClick}>
            Login
          </span>
        </div>
      </AuthFormContainer>
    </Modal>
  );
};
