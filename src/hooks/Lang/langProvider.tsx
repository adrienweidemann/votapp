import { useLocalStorage } from "@hooks/useLocalStorage";
import { LangContext } from "@hooks/Lang/langContext";
import { LANG } from "@configs/global";
import { Lang } from "@definitions/global";

export const LangProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [lang, setLang] = useLocalStorage<Lang>("lang", LANG.FR);

  const value = { lang, setLang };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
