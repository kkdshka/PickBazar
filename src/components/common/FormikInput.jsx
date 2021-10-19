import React from "react";
import "./FormikInput.scss";

export const FormikInput = ({ id, formik, type = "text", ...props }) => {
  const withError = formik.touched[id] && formik.errors[id];

  const inputClassName = withError
    ? "formik-input input-error"
    : "formik-input";

  return (
    <div className="formik-input_container">
      <input
        id={id}
        type={type}
        className={inputClassName}
        {...formik.getFieldProps(id)}
        {...props}
      />
      {withError ? (
        <div className="formik-input_error-message">{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
