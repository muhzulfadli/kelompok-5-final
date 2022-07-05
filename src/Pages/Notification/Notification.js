import React from "react";

const Notification = () => {
  return (
    <div className="flex w-full">
      <div className="container">
        <div className="font-bold text-2xl py-4 absolute top-3 ml-48 ">
          Notifikasi
        </div>
        <div className="w-full flex py-4 gap-4">
          <div>
            <img
              src="/images/profile.png"
              alt=""
              className="rounded-md cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full text-tiny text-gray-500 flex justify-between">
              <div>Penawaran Produk</div>
              <div className="flex items-center gap-2">
                <p>20 Apr, 14:04</p>
                <div className="bg-red-500 w-2 h-2 rounded-full"></div>
              </div>
            </div>
            <div className="text-base">Jam Tangan Abal</div>
            <div className="text-sm my-1">Rp 250.000</div>
            <div className="text-sm">Ditawar Rp 200.000</div>
          </div>
        </div>
        <div className="flex py-4 gap-4 border-t-[1px] border-gray-300">
          <div>
            <img
              src="/images/profile.png"
              alt=""
              className="rounded-md cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full text-tiny text-gray-500 flex justify-between">
              <div>Penawaran Produk</div>
              <div className="flex items-center gap-2">
                <p>20 Apr, 14:04</p>
                <div className="bg-red-500 w-2 h-2 rounded-full"></div>
              </div>
            </div>
            <div className="text-base">Jam Tangan Abal</div>
            <div className="text-sm my-1">Rp 250.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;