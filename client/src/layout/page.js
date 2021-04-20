import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Div } from "../components/Grid/Grid";
import Spinner from "../components/Spinner/Spinner";

const Page = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <Div className="row">
      <Div className="col-lg-12">{loading ? <Spinner /> : children}</Div>
    </Div>
  );
};

export default Page;
