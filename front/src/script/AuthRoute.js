import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const AuthRoute = ({ children }) => {
  const { state } = useContext(AuthContext);

  // console.log("AuthRoute state:", state); // Додано для перевірки стану

  // if (state.token) {
  //   return <Navigate to={`/balance/${state.user.id}`} replace />;
  // }

  // return children;

  return state && state.token ? (
    <Navigate to={`/balance/${state.user.id}`} />
  ) : (
    children
  );
};

export default AuthRoute;
