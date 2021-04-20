import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";
import { Div, Li, Ul } from "../Grid/Grid";
import Logo from "../Logo/Logo";

import "./Navbar.scss";

const Navbar = () => {
  const { isLoggedin, logout } = useAuthContext();

  return (
    <Div className="appNavbar">
      <Div className="appLogo">
        <NavLink className="logoLink" to="/game">
          <Logo />
        </NavLink>
      </Div>
      <Ul className="appMenu">
        <Li className="listItem">
          <NavLink className="navLink" to="/game">
            Game
          </NavLink>
        </Li>
        <Li className="listItem">
          <NavLink className="navLink" to="/results">
            Results
          </NavLink>
        </Li>
        <Li className="listItem">
          <NavLink className="navLink" to="/rankings">
            Rankings
          </NavLink>
        </Li>
        {!isLoggedin && (
          <Li className="listItem">
            <NavLink className="navLink" to="/login">
              Login
            </NavLink>
          </Li>
        )}
        {isLoggedin && (
          <Li className="listItem">
            <button className="navLink" onClick={logout}>
              Logout
            </button>
          </Li>
        )}
      </Ul>
    </Div>
  );
};

export default Navbar;
