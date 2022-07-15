import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Logout from "./Pages/Logout/Logout";
import Layouts from './Layouts/Main/Layouts';
import ProductPreview from './Pages/Product/ProductPreview';
import Notification from "./Pages/Notification/Notification";
import ProductPagebuyer from './Pages/Product/ProductPagebuyer';
import ProductList from './Pages/List/ProductList'
import Homepage from "./Pages/Homepage/Homepage";
import AddProduct from "./Pages/Product/AddProduct";
import EditProduct from "./Pages/Product/EditProduct";
import InfoProfile from "./Pages/Profile/InfoProfile";
import InfoPenawaran from "./Pages/Product/InfoPenawaran";
import Diminati from "./Pages/Product/Diminati";
import WishlistAdaproduct from "./Pages/Wishlist/WishlistAdaproduct";
import WishlistKosong from "./Pages/Wishlist/WishlistKosong";
import History from "./Pages/Product/History";
import User from "./Layouts/User/User";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
          <Route path="/" element={<User />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="logout" element={<Logout />} />
          <Route path="/" element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path="product/" >
              <Route path="productlist" element={<ProductList />} />
              <Route path="productdetail/:id" element={<ProductPagebuyer />} />
              <Route path="productpreview" element={<ProductPreview />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="editproduct" element={<EditProduct />} />
              <Route path="diminati" element={<Diminati />} />
              <Route path="history" element={<History />} />
              <Route path="wishlistadaproduct" element={<WishlistAdaproduct />} />
              <Route path="wishlistkosong" element={<WishlistKosong />} />
            </Route>
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