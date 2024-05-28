import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(state.token !== null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("PrivateRoute useEffect - token:", token, "user:", user); // Додайте логування
    if (token && user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [state.token]);

  console.log("PrivateRoute - isAuth:", isAuth); // Додайте логування
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
