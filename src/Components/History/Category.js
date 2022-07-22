import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";

const Category = () => {
  return (
    <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
      <h2 className="text-xl pb-4">Kategori</h2>
      <Link to="/product">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
          <BiCube />
          <div className="w-8/12 text-left text-neutral6">Semua Produk</div>
          <BiChevronRight />
        </button>
      </Link>

      <Link to="/product/diminati">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
          <BiHeart />
          <div className="w-8/12 text-left text-neutral6">Diminati</div>
          <BiChevronRight />
        </button>
      </Link>

      <Link to="/product/history">
        <button className="flex items-center space-x-2 text-purple4 py-3 w-full border-b border-purple3">
            <BiDollar />
            <div className="w-8/12 text-left">Terjual</div>
            <BiChevronRight />
        </button>
      </Link>

      <Link to="/product/wishlist">
        <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
          <AiOutlineStar />
          <div className="w-8/12 text-left text-neutral6">Wishlist</div>
          <BiChevronRight />
        </button>
      </Link>
    </div>
  );
};

export default Category;
