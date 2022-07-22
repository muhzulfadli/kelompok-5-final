import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube, BiHeart, BiDollar } from "react-icons/bi";

const CategoryMobile = () => {
  return (
    <div className="lg:hidden flex gap-4 h-full my-8">
      <Link to="/product">
        <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
          <BiCube className="font-bold text-xl" />
          <p className="text-sm">Produk</p>
        </button>
      </Link>
      <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
        <BiHeart className="font-bold text-xl" />
        <p className="text-sm">Diminati</p>
      </div>
      <Link to="/product/history">
        <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
          <BiDollar className="font-bold text-xl" />
          <p className="text-sm">Terjual</p>
        </button>
      </Link>
      <Link to="/product/wishlist">
        <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
          <AiOutlineStar className="font-bold text-xl" />
          <p className="text-sm">Wishlist</p>
        </button>
      </Link>
    </div>
  );
};

export default CategoryMobile;
