import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};
