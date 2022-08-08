import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

const PublicRoute = () => {
  const { user } = useContext(AuthContext);

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;