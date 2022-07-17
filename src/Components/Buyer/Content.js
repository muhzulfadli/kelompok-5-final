import React, { useState } from "react";
import { Fade } from "../../Pages/Product/ProductPagebuyer";
import { AiFillStar } from "react-icons/ai";
import Mobile from "./Mobile";
import Seller from "./Seller";
import Detail from "./Detail";

const Content = ({ product, setIsOpen, buttonClick }) => {
  const [wishlistClicked, setWishlistClicked] = useState(false);

  const handleWishlist = () => {
    setWishlistClicked((current) => !current);
  };

  return (
    <div className="container mx-auto w-full lg:max-w-4xl md:py-5">
      {product !== null ? (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Fade />
            {/* Mobile View */}
            <Mobile
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              product={product}
              buttonClick={buttonClick}
              setIsOpen={setIsOpen}
            />

            <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
              <div className="col-span-3">
                <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
                  <h2>Deskripsi</h2>
                  <h1 className="py-2 text-neutral3">{product.deskripsi}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* Detail dan Button */}
            <Detail
              product={product}
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              buttonClick={buttonClick}
              AiFillStar={AiFillStar}
              setIsOpen={setIsOpen}
            />

            <Seller />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/images/loading.gif" alt="" />
          <p className="text-purple4">Lagi loading coy...</p>
        </div>
      )}
    </div>
  );
};

export default Content;
