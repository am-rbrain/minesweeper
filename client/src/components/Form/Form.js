import React from "react";
import { Div, Small } from "../Grid/Grid";

import "./Form.scss";

export const Form = (props) => {
  const { onSubmit, children, className } = props;
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export const FormGroup = (props) => {
  const { className, children } = props;

  return <Div className={`formGroup ${className}`}>{children}</Div>;
};

export const FormLabel = (props) => {
  const { htmlFor, children, className } = props;

  return (
    <label htmlFor={htmlFor} className={`inputLabel ${className}`}>
      {children}
    </label>
  );
};

export const FormWrapper = (props) => {
  const { className, children } = props;

  return <Div className={`formWrapper ${className}`}>{children}</Div>;
};

export const InputError = (props) => {
  const { className, errorText, show } = props;

  if (show) {
    return <Small className={`inputError ${className}`}>{errorText}</Small>;
  }

  return null;
};

export const FormInput = (props) => {
  const { name, id, type, className, placeholder, register } = props;

  return (
    <input
      {...register}
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};
