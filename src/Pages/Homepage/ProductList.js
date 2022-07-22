import React, { useEffect, useState } from "react";
import Seller from "../../Components/Product/Seller";
import Title from "../../Components/ProductList/Title";
import Category from "../../Components/ProductList/Category";
import CategoryMobile from "../../Components/ProductList/CategoryMobile";
import axios from "axios";

function ProductList() {  

  return (
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <Category />
      </div>
  );
}

export default ProductList;