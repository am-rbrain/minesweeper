import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useAuthContext } from "../context/auth-context";
import Spinner from "../components/Spinner/Spinner";

const Signup = lazy(() => import("../pages/signup"));
const Login = lazy(() => import("../pages/login"));
const ForgotPassword = lazy(() => import("../pages/forgot-password"));
const ResetPassword = lazy(() => import("../pages/reset-password"));
const Game = lazy(() => import("../pages/game"));
const Results = lazy(() => import("../pages/results"));
const Rankings = lazy(() => import("../pages/rankings"));

const Routes = () => {
  const { isLoggedin } = useAuthContext();

  let routes;
  if (isLoggedin) {
    routes = (
      <Switch>
        <Route path="/game" exact component={Game} />
        <Route path="/results" exact component={Results} />
        <Route path="/rankings" exact component={Rankings} />
        <Redirect to="/game" />
      </Switch>
    );
  }
  if (!isLoggedin) {
    routes = (
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
};

export default Routes;
