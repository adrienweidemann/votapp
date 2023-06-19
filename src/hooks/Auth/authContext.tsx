import { createContext } from "react";

import { AuthenticatedUser } from "@definitions/models/user";

export interface ProvideAuthContext {
  user: AuthenticatedUser | null;
  login: (user: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<ProvideAuthContext>({
  user: null,
  login: () => {
    throw new Error("context is missing");
  },
  logout: () => {
    throw new Error("context is missing");
  }
});
