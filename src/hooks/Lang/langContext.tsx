import { createContext } from "react";

import { LANG } from "@configs/global";
import { Lang } from "@definitions/global";

export interface ProvideLangContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LangContext = createContext<ProvideLangContext>({
  lang: LANG.FR,
  setLang: (_lang: Lang) => {
    throw new Error("context is missing");
  }
});
