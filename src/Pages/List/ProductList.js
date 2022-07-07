import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCube, BiHeart, BiDollar, BiChevronRight } from "react-icons/bi";
import ProductCard from "../../Components/Product/ProductCard";
import { AiOutlineClose, AiOutlineStar } from "react-icons/ai";

function ProductList() {
  const [alertOpen, setAlertOpen] = useState(true);
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
          <div className="flex items-center gap-2 bg-purple4 px-4 py-4 rounded-xl text-white">
            <BiCube className="font-bold text-xl" />
            <p className="text-sm">Produk</p>
          </div>
          <Link to="/diminati">
            <button className="flex items-center gap-2 bg-purple1 hover:bg-purple4 hover:text-white px-4 py-4 rounded-xl">
              <BiHeart className="font-bold text-xl" />
              <p className="text-sm">Diminati</p>
            </button>
          </Link>
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
                <button className="flex items-center space-x-2 text-purple4 py-3 w-full border-b border-purple4">
                  <BiCube />
                  <div className="w-8/12 text-left">Semua Produk</div>
                  <BiChevronRight />
                </button>

                <Link to="/diminati">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                    <BiHeart />
                    <div className="w-8/12 text-left text-black">Diminati</div>
                    <BiChevronRight />
                  </button>
                </Link>

                <Link to="/history">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full border-b border-neutral2">
                    <BiDollar />
                    <div className="w-8/12 text-left text-black">Terjual</div>
                    <BiChevronRight />
                  </button>
                </Link>

                <Link to="/wishlistkosong">
                  <button className="flex items-center space-x-2 text-neutral3 py-3 w-full">
                    <AiOutlineStar />
                    <div className="w-8/12 text-left text-black">Wishlist</div>
                    <BiChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/addproduct">
              <div className="flex min-h-full lg:h-48 items-center justify-center rounded-2xl border-4 border-dashed border-slate-300 p-8">
                <div className="w-full">
                  <div className="flex justify-center text-3xl font-bold">
                    +
                  </div>
                  <div className="flex justify-center">Tambah Produk</div>
                </div>
                {/* alert */}
                <div
                  className={`bg-successAlert rounded-xl fixed top-32 w-[500px] inset-x-1/2 -translate-x-1/2 px-6 py-2 justify-between flex text-white ${
                    alertOpen ? "hidden" : ""
                  }`}
                >
                  <h2 className="text-white my-auto">
                    Produk berhasil diterbitkan.
                  </h2>
                  <div
                    role="button"
                    onClick={() => setAlertOpen(true)}
                    className="my-auto"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
            </Link>
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
}

export default ProductList;
