import React from "react";
import Title from "../../Components/Diminati/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/Diminati/CategoryMobile";
import DesktopView from "../../Components/Diminati/DesktopView";

const Diminati = () => {
  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Category Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <DesktopView />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;