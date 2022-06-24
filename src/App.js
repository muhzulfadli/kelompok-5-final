import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";
import Layouts from './Layouts/Layouts';
import ProductPreview from './Pages/Product/ProductPreview';
import ProductPagebuyer from './Pages/Product/ProductPagebuyer'
import ProductList from './Pages/List/ProductList'

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="logout" element={<Logout />} />
          <Route path="/" element={<Layouts />}>
          <Route path="/productlist" element={<ProductList />} />
            <Route path="/productpagebuyer" element={<ProductPagebuyer />} />
            <Route path="/productpreview" element={<ProductPreview />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
