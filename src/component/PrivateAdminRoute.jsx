import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const PrivateAdminRoute = ({ path, element }) => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user.role === "admin") {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateAdminRoute;
