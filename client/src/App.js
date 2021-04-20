import React from "react";
import AuthContext from "./context/auth-context";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import Layout from "./layout";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthContext>
      <Layout>
        <Routes />
      </Layout>
      <ToastContainer
        hideProgressBar={true}
        toastClassName="toastify-element"
      />
    </AuthContext>
  );
};

export default App;
