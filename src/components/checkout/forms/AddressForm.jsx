import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormikInput } from "../../common/FormikInput";
import { Button } from "../../common/Button";
import { IoClose } from "react-icons/io5";
import "./AddressForm.scss";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required!"),
  address: Yup.string().required("Address is required!"),
});

export const AddressForm = ({ close, initialValues, onSubmit, title }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="address-form">
      <IoClose className="address-form_close-icon" onClick={close} />
      <div className="address-form_title">{title}</div>
      <FormikInput formik={formik} id="title" placeholder="Enter title" />
      <FormikInput
        type="textarea"
        formik={formik}
        id="address"
        placeholder="Enter address"
      />
      <Button
        type="submit"
        className="address-form_save-button"
        disabled={!formik.dirty || !formik.isValid}
        onClick={formik.handleSubmit}
      >
        Save Address
      </Button>
    </div>
  );
};
