import { useContext } from "react";

import { HasSubmitContext, ProvideHasSubmitContext } from "@hooks/HasSubmit/hasSubmitContext";

export const useHasSubmit = () => {
  return useContext<ProvideHasSubmitContext>(HasSubmitContext);
};
