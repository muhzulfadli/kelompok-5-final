import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";

function App() {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
          <Route path="/" element={<h1>Ini Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
