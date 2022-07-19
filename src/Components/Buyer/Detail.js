import React from "react";

const Detail = ({ product, handleWishlist, wishlistClicked, buttonClick, AiFillStar, setIsOpen }) => {
  return (
    <div className="shadow-auto rounded-lg p-5 md:block hidden">
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

      {/* modal button */}
      {buttonClick ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple4 hover:bg-purple5 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white transition ease-in-out duration-300"
          id="tertarik-btn"
        >
          Saya tertarik dan ingin nego
        </button>
      ) : (
        <button
          className="bg-neutral2 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white"
          id="tertarik-btn"
        >
          Menunggu respon penjual
        </button>
      )}
      {/* modal button end */}
    </div>
  );
};

export default Detail;
