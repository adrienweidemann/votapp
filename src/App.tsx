import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

import Home from "@pages/Home";
import Admin from "@pages/Admin";
import Login from "@pages/Login";
import LoginAdmin from "@pages/LoginAdmin";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="*" element={<NotFound />} /> {/* Keep this as last route! */}
    </Routes>
  );
}

export default App;
