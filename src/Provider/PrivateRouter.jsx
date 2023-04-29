import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRouter = ({ children }) => {
  const location = useLocation();

  console.log(location);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner className="mx-auto" animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRouter;
