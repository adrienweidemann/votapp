import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@root/App.tsx";
import "@root/i18n";
import "@root/index.css";
import { AuthProvider } from "@hooks/Auth/authProvider";
import { LangProvider } from "@hooks/Lang/langProvider";
import { Loader } from "@components/Loader";
import { UniqueSubmitProvider } from "@hooks/HasSubmit/hasSubmitProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LangProvider>
          <UniqueSubmitProvider>
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </UniqueSubmitProvider>
        </LangProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
