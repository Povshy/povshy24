import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(state.token !== null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [state.token]);

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
