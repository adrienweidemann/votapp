import { useLocalStorage } from "./useLocalStorage";
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticatedUser } from "@definitions/models/user";

interface ProvideAuthContext {
  user: AuthenticatedUser | null;
  login: (user: AuthenticatedUser) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<ProvideAuthContext>({
  user: null,
  login: () => {
    throw new Error("context is missing");
  },
  logout: () => {
    throw new Error("context is missing");
  }
});

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

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext<ProvideAuthContext>(AuthContext);
};
