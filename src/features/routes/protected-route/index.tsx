import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

export function ProtectedRoute({
  isAuthenticated,
  children,
}: IProtectedRouteProps) {
  return <>{isAuthenticated ? children : <Navigate to="/login" />}</>;
}
