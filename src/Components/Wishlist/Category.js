import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";

const Category = () => {
  return (
    <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
      <h2 className="text-xl pb-4">Kategori</h2>
      <Link to="/product">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
          <BiCube />
          <div className="w-8/12 text-left text-black">Semua Produk</div>
          <BiChevronRight className="text-gray-400" />
        </button>
      </Link>
      <Link to="/product/diminati">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
          <BiHeart />
          <div className="w-8/12 text-left text-black">Diminati</div>
          <BiChevronRight className="text-gray-400" />
        </button>
      </Link>
      <Link to="/product/history">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
          <BiDollar />
          <div className="w-8/12 text-left text-black">Terjual</div>
          <BiChevronRight className="text-gray-400" />
        </button>
      </Link>
      <button className="flex items-center space-x-2 text-purple4 py-3 w-full disabled">
        <AiOutlineStar />
        <div className="w-8/12 text-left">Wishlist</div>
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Category;
