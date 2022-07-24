import React from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";

const DesktopView = () => {
  return (
    <div className="lg:flex mt-8 block">
      <div className="lg:w-1/3">
        <div className="hidden lg:flex justify-center md:justify-start">
          <Category />
        </div>
      </div>
      {/* product === null */}
      <div className="w-5/6 lg:w-4/6 absolute top-80 text-center lg:left-80 ml-4 lg:top-60 py-8">
        <div className="w-full flex flex-col items-center justify-center text-sm lg:text-base">
          <img
            src="/images/Empty-wishlist.png"
            alt=""
            className="w-64 lg:w-60 h-64"
          />
          <div>Kamu Belum Punya Barang Impian</div>
        </div>
      </div>
      {/* product !== null*/}
      <div className="hidden grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default DesktopView;
