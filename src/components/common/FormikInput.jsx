import React from "react";
import classNames from "classnames";
import "./FormikInput.scss";

export const FormikInput = ({ id, formik, type = "text", ...props }) => {
  const withError = formik.touched[id] && formik.errors[id];

  let input;

  if (type === "textarea") {
    input = (
      <textarea
        id={id}
        className={classNames("formik-input", { "input-error": withError })}
        {...formik.getFieldProps(id)}
        {...props}
      />
    );
  } else {
    input = (
      <input
        id={id}
        type={type}
        className={classNames("formik-input", { "input-error": withError })}
        {...formik.getFieldProps(id)}
        {...props}
      />
    );
  }

  return (
    <div className="formik-input_container">
      {input}
      {withError ? (
        <div className={"formik-input_error-message"}>{formik.errors[id]}</div>
      ) : null}
    </div>
  );
};
