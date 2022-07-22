import React from "react";
import Title from "../../Components/Wishlist/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/Wishlist/CategoryMobile";
import DesktopView from "../../Components/Wishlist/DesktopView";

const Wishlist = () => {
  return (
    <div className="Product">
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* mobile kategori card start */}
        <CategoryMobile />

        {/* Kategori start */}
        <DesktopView />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Wishlist;