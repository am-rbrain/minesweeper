import React from "react";

import YouWonImg from "../../assets/images/you-won.png";
import CookieImg from "../../assets/images/cookie.png";
import "./Congratulations.scss";

const Congratulations = () => {
  return (
    <div className="congratulations">
      <img src={YouWonImg} alt="You Won" className="congratulations-image" />
      <span>A</span>
      <img src={CookieImg} alt="Cookie" className="cookie-image" />
    </div>
  );
};

export default Congratulations;
