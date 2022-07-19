import React from "react";

const Seller = () => {
  return (
    <div className="w-full rounded-2xl p-5 shadow-md">
      <div className="flex items-center space-x-5">
        <img
          src="/images/picprofile.png"
          alt=""
          className="h-12 w-12 rounded-xl object-cover"
        />
        <div>
          <div className="font-medium">Nama Pembeli</div>
          <div className="text-neutral3">kota</div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
