import React, { Fragment } from "react";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import { Button } from "../common/Button";
import { Divider } from "../common/Divider";
import { baseURL } from "../../api/axiosClient";
import "./AuthFormSubmit.scss";

export const AuthFormSubmit = ({ formik }) => {
  const handleContinueWithFacebook = () => {};

  return (
    <Fragment>
      <Button
        type="button"
        className="button-continue"
        disabled={!formik.dirty || !formik.isValid}
        onClick={formik.handleSubmit}
      >
        Continue
      </Button>
      <div className="auth-form_divider">
        <Divider>or</Divider>
      </div>
      <Button className="button-facebook" onClick={handleContinueWithFacebook}>
        <AiFillFacebook className="auth-form_icon" />
        Continue with Facebook
      </Button>
      <a className="button button-google" href={`${baseURL}connect/google`}>
        <AiOutlineGoogle size={17} className="auth-form_icon" />
        Continue with Google
      </a>
    </Fragment>
  );
};
