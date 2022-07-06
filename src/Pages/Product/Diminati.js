import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const Diminati = () => {
  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center title text-xl font-bold py-4">
          <h1 className="hidden lg:block my-2 lg:w-full lg:text-left">Daftar Jual Saya</h1>
          <h1 className="text-right w-1/2 absolute lg:hidden top-8 left-16 z-50 ml-6">
            Daftar Jual Saya
          </h1>
        </div>

        {/* card nama penjual */}
        <div className="flex p-4 shadow-auto justify-between items-center rounded-3xl">
          <div className="flex">
            <img src="/images/picprofile.png" alt="" className="w-12 h-12" />
            <div className="text-profil ml-5">
              <h1 className="text-sm lg:text-xl font-medium">Nama Penjual</h1>
              <p className="text-tiny lg:text-sm text-gray-300">Kota</p>
            </div>
          </div>
          <Link to="/InfoProfile">
            <button className="border border-purple4 rounded-xl px-5 lg:px-6 py-2 text-sm lg:text-base hover:bg-purple4 hover:text-white hover:font-semibold">
              Edit
            </button>
          </Link>
        </div>
        {/* card nama penjual end */}

        {/* mobile kategori card start */}
        <div className="lg:hidden flex gap-4 h-full my-8">
          <Link to="/productlist">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <BiCube className="font-bold text-xl" />
              <p className="text-sm">Produk</p>
            </button>
          </Link>
          <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
            <BiHeart className="font-bold text-xl" />
            <p className="text-sm">Diminati</p>
          </div>
          <Link to="/history">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <BiDollar className="font-bold text-xl" />
              <p className="text-sm">Terjual</p>
            </button>
          </Link>
          <Link to="/wishlistkosong">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <AiOutlineStar className="font-bold text-xl" />
              <p className="text-sm">Wishlist</p>
            </button>
          </Link>
        </div>
        {/* mobile kategori card end */}

        {/* Kategori start */}
        <div className="lg:flex my-8 block">
          <div className="lg:w-1/3">
            <div className="hidden lg:flex justify-center md:justify-start">
              <div className="shadow-auto rounded-lg p-6 h-fit lg:w-60 w-11/12">
                <h2 className="text-xl pb-4">Kategori</h2>
                <Link to="/productlist">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                    <BiCube />
                    <div className="w-8/12 text-left text-black">
                      Semua Produk
                    </div>
                    <BiChevronRight />
                  </button>
                </Link>

                <button className="flex items-center space-x-2 text-purple4 py-3 w-full border-b border-purple3">
                  <BiHeart />
                  <div className="w-8/12 text-left">Diminati</div>
                  <BiChevronRight />
                </button>

                <Link to="/history">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
                    <BiDollar />
                    <div className="w-8/12 text-left text-black">Terjual</div>
                    <BiChevronRight />
                  </button>
                </Link>

                <Link to="/wishlistkosong">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-gray-300">
                    <AiOutlineStar />
                    <div className="w-8/12 text-left text-black">Wishlist</div>
                    <BiChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-5/6 lg:w-4/6 absolute top-80 text-center lg:left-80 ml-4 lg:top-60 py-8">
            <div className="w-full flex flex-col items-center justify-center text-sm lg:text-base">
              <img
                src="/images/Empty.png"
                alt=""
                className="w-64 lg:w-60 h-64"
              />
              <div>Belum ada produkmu yang diminati nih,</div>
              <div>sabar ya rejeki ga kemana-mana kok</div>
            </div>
          </div>

          <div className="hidden grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;
