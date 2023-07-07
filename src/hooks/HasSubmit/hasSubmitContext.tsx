import { createContext } from "react";

export interface ProvideHasSubmitContext {
  hasSubmit: boolean;
  setHasSubmit: (hasSubmit: boolean) => void;
}

export const HasSubmitContext = createContext<ProvideHasSubmitContext>({
  hasSubmit: false,
  setHasSubmit: (_hasSubmit: boolean) => {
    throw new Error("context is missing");
  }
});
