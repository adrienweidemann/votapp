import { useLocalStorage } from "@hooks/useLocalStorage";
import { HasSubmitContext } from "@hooks/HasSubmit/hasSubmitContext";

export const UniqueSubmitProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [hasSubmit, setHasSubmit] = useLocalStorage<boolean>("hasSubmit", false);

  const value = { hasSubmit, setHasSubmit };

  return <HasSubmitContext.Provider value={value}>{children}</HasSubmitContext.Provider>;
};
