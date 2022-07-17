import React from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const Mobile = () => {
  return (
    <div>
      <div className="container mx-auto max-w-4xl mt-3 -translate-y-12">
        <div className="shadow-auto rounded-lg p-4 bg-white text-base font-medium h-28 mx-4 px-3 md:hidden">
          <div className="flex justify-between">
            <div>
              <h2 className="text-base font-medium">Jam Tangan casio</h2>
              <p className="text-sm font-normal text-neutral3">aksesoris</p>
              <p className="font-normal text-base">Rp 250.000</p>
            </div>
            <div className="lg:hidden">
              <Link to="/editproduct">
                <FiEdit className="text-2xl text-purple4 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* penjual */}
      <div className="container mx-auto max-w-4xl mt-3 -translate-y-11">
        <div className="flex md:hidden shadow-auto rounded-lg bg-white p-4 text-base font-medium mx-4">
          <img className="w-12" src="/images/picprofile.png" alt="" />
          <div className="ml-4">
            <h1 className="font-medium text-sm">Nama Penjual</h1>
            <h1 className="text-sm font-normal text-neutral3">kota</h1>
          </div>
        </div>
      </div>
      <Link to="/product/productlist">
        <div className="flex justify-center lg:hidden items-center w-full right">
          <div className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg shadow-purple4 hover:bg-purple5 text-neutral1 bg-purple4 focus:ring-4 focus:outline-none focus:ring-purple4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2 transition ease-in-out duration-300 dark:bg-purple4 dark:hover:bg-purple5 dark:focus:ring-purple4">
            <span className="w-full">Terbitkan</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Mobile;
