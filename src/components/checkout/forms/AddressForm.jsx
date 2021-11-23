import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CheckoutForm } from "./CheckoutForm";
import { FormikInput } from "../../common/FormikInput";

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
    <CheckoutForm
      formik={formik}
      close={close}
      title={title}
      submitName="Save Address"
    >
      <FormikInput formik={formik} id="title" placeholder="Enter title" />
      <FormikInput
        type="textarea"
        formik={formik}
        id="address"
        placeholder="Enter address"
      />
    </CheckoutForm>
  );
};
