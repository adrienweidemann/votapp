import { useContext } from "react";

import { LangContext, ProvideLangContext } from "@hooks/Lang/langContext";

export const useLang = () => {
  return useContext<ProvideLangContext>(LangContext);
};
