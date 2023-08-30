import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateUserRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuth;
  if (isAuthenticated) {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default PrivateUserRoute;
