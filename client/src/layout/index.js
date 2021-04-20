import React from "react";
import Footer from "../components/Footer/Footer";
import { Div } from "../components/Grid/Grid";
import Navbar from "../components/Navbar/Navbar";
import { useAuthContext } from "../context/auth-context";

import "./index.scss";

const Layout = (props) => {
  const { children } = props;

  const { isLoggedin } = useAuthContext();

  return (
    <Div className="container-fluid">
      {isLoggedin && <Navbar />}
      {isLoggedin && <Div className="spaceFiller" />}
      <Div className="layoutMain">{children}</Div>
      {isLoggedin && <Footer />}
    </Div>
  );
};

export default Layout;
