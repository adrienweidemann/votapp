import { Route, Routes } from "react-router-dom";

import "@root/App.css";
import { ProtectedRoute } from "@components/ProtectedRoute";
import { Admin } from "@pages/Admin";
import { Home } from "@pages/Home";
import { Thanks } from "@pages/Thanks";
import { Login } from "@pages/Login";
import { NotFound } from "@pages/NotFound";
import { USER } from "@configs/models";

function App() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute roles={[USER.ROLE.USER, USER.ROLE.ADMIN]} redirectPath="/login" />
        }>
        <Route path="/" element={<Home />} />
        <Route path="/thanks" element={<Thanks />} />
      </Route>
      <Route element={<ProtectedRoute roles={[USER.ROLE.ADMIN]} redirectPath="*" />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} /> {/* Keep this as last route! */}
    </Routes>
  );
}

export default App;
