import React from "react";
import { Div, Span } from "../Grid/Grid";

import "./Footer.scss";

const Footer = () => {
  return (
    <Div className="row">
      <Div className="col-lg-12 footer">
        <Span className="footerTitle">
          &copy; All rights reserved {new Date().getFullYear()}
        </Span>
      </Div>
    </Div>
  );
};

export default Footer;
