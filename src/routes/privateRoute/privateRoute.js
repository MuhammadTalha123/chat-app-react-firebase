import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = localStorage.getItem("token");
      if (!token) {
        return <Redirect to={{ pathname: "/signin" }} />;
      }

      return <Component {...props} />;
    }}
  />
);
