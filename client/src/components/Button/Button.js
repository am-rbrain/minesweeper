import React from "react";
import ShuffleIcon from "../../assets/images/shuffle.svg";

import "./Button.scss";

export const Button = (props) => {
  const { className, placeholder, type, loading } = props;

  if (loading) {
    return (
      <button className={className} type={"button"} disabled={true}>
        {`Loading...`}
      </button>
    );
  }

  if (!loading) {
    return (
      <button className={className} type={type || "submit"}>
        {placeholder || "Button"}
      </button>
    );
  }
};

export const ShuffleButton = (props) => {
  const { placeholder, onClick, winner, destroyed } = props;

  return (
    <button className="shuffleButton" onClick={onClick}>
      {winner || destroyed ? `Restart` : placeholder}
      <img src={ShuffleIcon} alt="" className="icon" />
    </button>
  );
};
