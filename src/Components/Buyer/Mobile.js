import React from "react";
import MobileContent from "./MobileContent";

const Mobile = ({ handleWishlist, wishlistClicked, product, buttonClick, setIsOpen }) => {
  return (
    <div>
      <MobileContent
        handleWishlist={handleWishlist}
        wishlistClicked={wishlistClicked}
        product={product}
      />
      {/* Seller */}
      <div className="container mx-auto max-w-4xl mt-3 -translate-y-11">
        <div className="flex md:hidden shadow-auto rounded-lg bg-white p-4 text-base font-medium  mx-4 px-3">
          <img className="w-12" src="/images/picprofile.png" alt="" />
          <div className="ml-4">
            <h1 className="font-medium text-sm">Nama Penjual</h1>
            <h1 className="text-sm font-normal text-neutral3">kota</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:hidden items-center w-full right">
        {buttonClick ? (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg shadow-purple4 text-neutral1 bg-purple4 focus:outline-none focus:ring-purple2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2 dark:bg-purple4 dark:hover:bg-purple5 dark:focus:ring-purple4"
          >
            <span className="w-full">Saya tertarik dan ingin nego</span>
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg text-neutral1 bg-neutral2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2"
            disabled
          >
            <span className="w-full">Saya tertarik dan ingin nego</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Mobile;
