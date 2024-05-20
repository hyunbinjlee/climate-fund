import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DonorSubmit from "./pages/DonorSubmit";
import AdminDashboard from "./pages/AdminDashboard";
import UserProfiles from "./pages/UserProfiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/submit" element={<DonorSubmit />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profiles" element={<UserProfiles />} />
        <Route path="/" element={<DonorSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
