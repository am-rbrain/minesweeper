import React from "react";
import { Span } from "../Grid/Grid";

import LogoImg from "../../assets/images/logo.png";

import "./Logo.scss";

const Logo = () => {
  return (
    <Span className="appLogo">
      Mineswepper
      <img src={LogoImg} alt="Mineswepper" />{" "}
    </Span>
  );
};

export default Logo;
