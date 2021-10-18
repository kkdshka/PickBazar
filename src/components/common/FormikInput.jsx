import React from "react";
import "./FormikInput.scss";

export const FormikInput = ({ id, formik, type = "text", ...props }) => {
  return (
    <div className="formik-input_container">
      <input
        id={id}
        type={type}
        className="formik-input"
        {...formik.getFieldProps(id)}
        {...props}
      />
      {formik.touched[id] && formik.errors[id] ? (
        <div className="formik-input_error-message">{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
