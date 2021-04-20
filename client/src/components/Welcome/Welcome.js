import React, { useState, useEffect } from "react";
import { Div, Paragraph } from "../Grid/Grid";

import "./Welcome.scss";

const Welcome = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, []);

  const welcomeClasses = open ? "welcomeBox open" : "welcomeBox closed";

  return (
    <Div className={welcomeClasses}>
      <Paragraph className="message">
        Happy you are joining our little game 😊 😊
      </Paragraph>
    </Div>
  );
};

export default Welcome;
