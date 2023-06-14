import { LoginForm } from "@components/Form/LoginForm";

const REDIRECT_ELT: string = "home";

export const Login = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <LoginForm redirectTo={REDIRECT_ELT} />
    </div>
  );
};
