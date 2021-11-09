import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { CheckoutForm } from "./CheckoutForm";
import { FormikInput } from "../../common/FormikInput";

const validationSchema = Yup.object({
  number: Yup.string().required("Title is required!"),
});

export const ContactNumberForm = ({
  close,
  initialValues,
  onSubmit,
  title,
}) => {
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
      submitName="Save Number"
    >
      <FormikInput
        formik={formik}
        id="number"
        placeholder="Enter a phone number"
      />
    </CheckoutForm>
  );
};
