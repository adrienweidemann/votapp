import { Route, Routes } from "react-router-dom";

import "./App.css";

import { ProtectedRoute } from "@components/ProtectedRoute";

import { Home } from "@pages/Home";
import { Admin } from "@pages/Admin";
import { Login } from "@pages/Login";
import { LoginAdmin } from "@pages/LoginAdmin";
import { NotFound } from "@pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute roles={["user", "admin"]} redirectPath="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<ProtectedRoute roles={["admin"]} redirectPath="*" />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="*" element={<NotFound />} /> {/* Keep this as last route! */}
    </Routes>
  );
}

export default App;
