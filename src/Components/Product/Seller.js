import React from "react";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <div className="flex p-4 shadow-auto justify-between items-center rounded-3xl">
      <div className="flex">
        <img src="/images/picprofile.png" alt="" className="w-12 h-12" />
        <div className="text-profil ml-5">
          <h1 className="text-sm lg:text-xl font-medium">Nama Penjual</h1>
          <p className="text-tiny lg:text-sm text-gray-300">Kota</p>
        </div>
      </div>
      <Link to="/InfoProfile">
        <button className="border border-purple4 rounded-xl px-5 lg:px-6 py-2 text-sm lg:text-base hover:bg-purple4 hover:text-neutral1 hover:font-semibold">
          Edit
        </button>
      </Link>
    </div>
  );
};

export default Seller;
