import React from "react";
import classNames from "classnames";
import "./FormikInput.scss";

export const FormikInput = ({ id, formik, type = "text", ...props }) => {
  const withError = formik.touched[id] && formik.errors[id];

  return (
    <div className="formik-input_container">
      <input
        id={id}
        type={type}
        className={classNames("formik-input", { "input-error": withError })}
        {...formik.getFieldProps(id)}
        {...props}
      />
      {withError ? (
        <div className={"formik-input_error-message"}>{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
