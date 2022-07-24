import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import Card from "./Card";

const Category = () => {
  return (
    <div className="lg:flex my-8 block">
      <div className="lg:w-1/3">
        <div className="hidden lg:flex justify-center md:justify-start">
          <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
            <h2 className="text-xl pb-4">Kategori</h2>
            <button className="flex items-center space-x-2 text-purple4 py-3 w-full border-b border-purple4">
              <BiCube />
              <div className="w-8/12 text-left">Semua Produk</div>
              <BiChevronRight />
            </button>

            <Link to="/product/diminati">
              <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                <BiHeart />
                <div className="w-8/12 text-left text-black">Diminati</div>
                <BiChevronRight />
              </button>
            </Link>

            <Link to="/product/history">
              <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                <BiDollar />
                <div className="w-8/12 text-left text-black">Terjual</div>
                <BiChevronRight />
              </button>
            </Link>

            <Link to="/product/wishlist">
              <button className="flex items-center space-x-2 text-neutral3 py-3 w-full">
                <AiOutlineStar />
                <div className="w-8/12 text-left text-black">Wishlist</div>
                <BiChevronRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Product Card */}
      <Card />
    </div>
  );
};

export default Category;
