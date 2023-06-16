import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { UserRole } from "@definitions/models/user";

interface Props {
  roles?: UserRole[];
  redirectPath?: string;
}

export const ProtectedRoute = ({ roles, redirectPath = "/login" }: Props) => {
  const { user } = useAuth();

  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
