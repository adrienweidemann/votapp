import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "@hooks/useLocalStorage";
import { AuthContext } from "@hooks/Auth/authContext";
import { login as usersLogin } from "@api/users";
import { AuthenticatedUser } from "@definitions/models/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useLocalStorage<AuthenticatedUser | null>("user", null);
  const navigate = useNavigate();

  const login = async (credentials: { email: string; password: string }): Promise<void> => {
    try {
      const user: AuthenticatedUser = await usersLogin(credentials);
      setUser(user);
      navigate("/");
    } catch (err) {
      throw err;
    }
  };

  const logout = (): void => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = {
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
