import { Navigate } from "react-router-dom";
import { LoginForm } from "@components/Form/LoginForm";
import { useAuth } from "@hooks/useAuth";

const REDIRECT_PATH = "/";

export const Login = (): JSX.Element => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex justify-center">
      <LoginForm redirectTo={REDIRECT_PATH} />
    </div>
  );
};
