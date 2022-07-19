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
import Wishlist from "./Pages/Product/Wishlist";
import History from "./Pages/Product/History";
import User from "./Layouts/User/User";
// import ProtectedRoute from "./Components/HOC/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-main">
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<User />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="logout" element={<Logout />} />
          <Route path="/" element={<Layouts />}>
            {/* ALL */}
            <Route index element={<Homepage />} />

            {/* PROTECTED */}
            {/* <Route path="/" element={<ProtectedRoute />}> */}
              <Route path="product/" >
                <Route path="productlist" element={<ProductList />} />
                <Route path="productdetail/:id" element={<ProductPagebuyer />} />
                <Route path="productpreview" element={<ProductPreview />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="editproduct" element={<EditProduct />} />
                <Route path="diminati" element={<Diminati />} />
                <Route path="history" element={<History />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="infopenawaran" element={<InfoPenawaran />} />
              </Route>
              <Route path="notification" element={<Notification />} />
              <Route path="infoprofile" element={<InfoProfile />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;