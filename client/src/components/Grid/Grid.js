import React from "react";

export const Div = (props) => {
  const { children, onClick, className } = props;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export const Small = (props) => {
  const { children, onClick, className } = props;
  return (
    <small className={className} onClick={onClick}>
      {children}
    </small>
  );
};

export const Span = (props) => {
  const { children, onClick, className } = props;
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
};

export const Paragraph = (props) => {
  const { children, onClick, className } = props;
  return (
    <p className={className} onClick={onClick}>
      {children}
    </p>
  );
};

export const Ul = (props) => {
  const { children, onClick, className } = props;

  return (
    <ul className={className} onClick={onClick}>
      {children}
    </ul>
  );
};

export const Li = (props) => {
  const { children, onClick, className } = props;

  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
};
