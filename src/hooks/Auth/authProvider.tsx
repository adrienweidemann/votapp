import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "@hooks/useLocalStorage";
import { AuthContext } from "@hooks/Auth/authContext";
import { login as usersLogin, adminLogin as adminsLogin } from "@api/users";
import { AuthenticatedUser } from "@definitions/models/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useLocalStorage<AuthenticatedUser | null>("user", null);
  const navigate = useNavigate();

  const login = async (credentials: { email: string; password: string }): Promise<void> => {
    const user: AuthenticatedUser = await usersLogin(credentials);
    setUser(user);
    navigate("/");
  };

  const adminLogin = async (credentials: { email: string; password: string }): Promise<void> => {
    const user: AuthenticatedUser = await adminsLogin(credentials);
    setUser(user);
    navigate("/admin");
  };

  const logout = (): void => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = {
    user,
    login,
    adminLogin,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
