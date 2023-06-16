import { Navigate } from "react-router-dom";
import { LoginForm } from "@components/Form/LoginForm";
import { useAuth } from "@hooks/Auth/useAuth";
import { USER } from "@configs/models";

const REDIRECT_PATH = "/admin";

export const LoginAdmin = (): JSX.Element => {
  const { user } = useAuth();

  if (user && user.role === USER.ROLE.ADMIN) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="flex justify-center">
      <LoginForm redirectTo={REDIRECT_PATH} />
    </div>
  );
};
