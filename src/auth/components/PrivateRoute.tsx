import { ReactNode } from "react";
import { Navigate } from "react-router";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

export const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  if(!isAuthenticated) return <Navigate to="/auth" />

  return children
}

