import React from "react";
import {} from "react-router-dom";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { DefaultLayout } from "../../layout/DefaultLayout";

const isAuth = true;

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
