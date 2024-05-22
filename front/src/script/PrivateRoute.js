import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (!state.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
