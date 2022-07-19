import React from "react";
import { AiFillStar } from "react-icons/ai";

const MobileContent = ({ product, handleWishlist, wishlistClicked }) => {
  return (
    <div className="container mx-auto max-w-4xl mt-3 -translate-y-12">
      <div className="shadow-auto rounded-lg p-4 bg-white text-base font-medium h-28 mx-4 px-3 md:hidden">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h2 className="text-base font-medium">{product.nama}</h2>
            <p className="text-sm font-normal text-neutral3">
              {product.categories}
            </p>
            <p className="font-normal text-base">Rp {product.harga}</p>
          </div>
          <div
            onClick={handleWishlist}
            className={`text-2xl ${
              wishlistClicked ? "text-purple4" : "text-neutral2"
            } hover:text-purple4 cursor-pointer`}
          >
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContent;
