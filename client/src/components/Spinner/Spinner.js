import React from "react";
import { Div } from "../Grid/Grid";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <Div className="css-spinner">
      <Div className="lds-ripple">
        <Div></Div>
        <Div></Div>
      </Div>
    </Div>
  );
};

export default Spinner;
