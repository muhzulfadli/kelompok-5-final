import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";
import Layouts from './Layouts/Layouts';
import ProductPreview from './Pages/Product/ProductPreview';
import Product from './Pages/Product/Product';
import Notification from "./Pages/Notification/Notification";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
          <Route path="/" element={<Layouts />}>
            <Route index element={<h1>Ini Home</h1>} />
            <Route path="/ProductSeller" element={<Product />} />
            <Route path="/ProductPreview" element={<ProductPreview />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
