import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";
import Layouts from './Layouts/Layouts';
import ProductPreview from './Pages/Product/ProductPreview';
import Notification from "./Pages/Notification/Notification";
import ProductPagebuyer from './Pages/Product/ProductPagebuyer';
import ProductList from './Pages/List/ProductList'
import Homepage from "./Pages/Homepage/Homepage";
import AddProduct from "./Pages/Product/AddProduct";
import EditProduct from "./Pages/Product/EditProduct";
import InfoProfile from "./Pages/Profile/InfoProfile";
import InfoPenawaran from "./Pages/Product/InfoPenawaran";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="/" element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="productdetail" element={<ProductPagebuyer />} />
            <Route path="productpreview" element={<ProductPreview />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="editproduct" element={<EditProduct />} />
            <Route path="notification" element={<Notification />} />
            <Route path="infoprofile" element={<InfoProfile />} />
            <Route path="infopenawaran" element={<InfoPenawaran />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;