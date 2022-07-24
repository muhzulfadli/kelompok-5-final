import React from "react";
import Title from "../../Components/History/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/History/CategoryMobile";
import DesktopView from "../../Components/History/DesktopView";

const History = () => {
  return (
    <div className="Product">
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

export default History;
