import { Navigate } from "react-router-dom";
import { AdminLoginForm } from "@components/Form/AdminLoginForm";
import { useAuth } from "@hooks/Auth/useAuth";

const REDIRECT_PATH = "/admin";

export const AdminLogin = (): JSX.Element => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={REDIRECT_PATH} replace />;
  }

  return (
    <div className="flex justify-center">
      <AdminLoginForm redirectTo={REDIRECT_PATH} />
    </div>
  );
};
