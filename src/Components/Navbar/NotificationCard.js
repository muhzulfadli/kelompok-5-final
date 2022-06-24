import React from "react";

const NotificationCard = () => {
  return (
    <div className="absolute origin-top-right w-80 bg-white shadow-auto rounded-xl px-6 -ml-72 mt-4">
      <div className="flex py-4 gap-4 w-full">
        <div>
          <img src="/images/Jamtangan.png" alt="" className="w-16 h-10 mt-2 rounded-md" />
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
      <div className="flex w-full py-4 gap-4 border-t-[1px] border-gray-300">
        <div>
        <img src="/images/Jamtangan.png" alt="" className="w-16 h-10 mt-2 rounded-md" />
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
  );
};

export default NotificationCard;
