import React from "react";
import ProductCard from "./ProductCard";
import Category from "./Category";

const DesktopView = () => {
  return (
    <div className="lg:flex mt-8 block">
      <div className="lg:w-1/3">
        <div className="hidden lg:flex justify-center md:justify-start">
          <Category />
        </div>
      </div>
      {/* product !== null*/}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default DesktopView;
