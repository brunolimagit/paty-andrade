import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Agendamento from "../pages/Agendamento";
import Admin from "../pages/Admin";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/agendamento"
          element={<Agendamento />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </BrowserRouter>
  );
}