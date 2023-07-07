import { useContext } from "react";

import { AuthContext, ProvideAuthContext } from "@hooks/Auth/authContext";

export const useAuth = () => {
  return useContext<ProvideAuthContext>(AuthContext);
};
