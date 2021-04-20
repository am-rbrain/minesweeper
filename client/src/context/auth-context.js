import { createContext, useContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

const Context = createContext();

export const useAuthContext = () => {
  return useContext(Context);
};

const AuthContext = (props) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(true);

  const { children } = props;

  const login = (token) => {
    setIsLoggedin(true);
    window.localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLoggedin(false);
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    setLoading(true);

    if (token) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
    setLoading(false);
  }, []);

  const value = {
    isLoggedin,
    login,
    logout,
  };

  return (
    <Context.Provider value={value}>
      {loading ? <Spinner /> : children}
    </Context.Provider>
  );
};

export default AuthContext;
