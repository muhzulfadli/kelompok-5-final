import React from "react";
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <div className="col-span-2">
      <div className="shadow-auto hidden lg:block rounded-lg p-5">
        <h2 className="text-base font-medium">Jam Tangan casio</h2>
        <p className="text-sm font-normal text-neutral3">aksesoris</p>
        <p className="font-normal text-base">Rp 250.000</p>
        <Link to="/product/productlist">
          <button className="bg-neutral1 w-full py-3 mt-2 rounded-2xl font-medium text-sm border-2 border-purple4 hover:bg-purple4 text-purple5 hover:text-white transition ease-in-out duration-300">
            Terbitkan
          </button>
        </Link>
        <Link to="/product/editproduct">
          <button className="bg-neutral1 w-full py-3 mt-2 rounded-2xl font-medium text-sm border-2 border-purple4 hover:bg-purple4 text-purple5 hover:text-white transition ease-in-out duration-300">
            Edit
          </button>
        </Link>
      </div>
      <div className="col-span-2 mt-5">
        <div className="lg:flex hidden shadow-auto rounded-2xl p-4">
          <img className="w-12" src="/images/picprofile.png" alt="" />
          <div className="ml-4">
            <h1 className="font-medium text-sm">Nama Penjual</h1>
            <h1 className="text-sm font-normal text-neutral3">kota</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
