import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@root/App.tsx";
import "@root/i18n";
import "@root/index.css";
import { AuthProvider } from "@hooks/useAuth.tsx";

const Loader = () => (
  <div className="App">
    <img src="/logo.svg" className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
