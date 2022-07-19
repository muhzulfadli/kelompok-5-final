import React from "react";

const Seller = () => {
  return (
    <div className="col-span-2 mt-5">
      <div className="md:flex hidden shadow-auto rounded-2xl p-4">
        <img className="w-12" src="/images/picprofile.png" alt="" />
        <div className="ml-4">
          <h1 className="font-medium text-sm">Nama Penjual</h1>
          <h1 className="text-sm font-normal text-neutral3">kota</h1>
        </div>
      </div>
    </div>
  );
};

export default Seller;
