import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const renderPage = (props) => {
    const { location } = props;
    // fake testing to be changed
    if (!localStorage.getItem("token")) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      );
    }
    return <Component {...rest} {...props} />;
  };
  return <Route {...rest} render={renderPage} />;
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
