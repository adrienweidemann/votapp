import { useNavigate } from "react-router-dom";

import { useLocalStorage } from "@hooks/useLocalStorage";
import { AuthContext } from "@hooks/Auth/authContext";
import { AuthenticatedUser } from "@definitions/models/user";

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useLocalStorage<AuthenticatedUser | null>("user", null);
  const navigate = useNavigate();

  const login = async (user: AuthenticatedUser): Promise<void> => {
    setUser(user);
    navigate("/");
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
