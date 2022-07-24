import React from "react";
import { Link } from "react-router-dom";

const NotificationCard = (closeClick) => {
  return (
    <div className="absolute origin-top-right w-80 bg-white shadow-auto rounded-xl px-4 py-3 -ml-72 mt-8">
      <Link to="/notification">
        <div className={`flex py-4 gap-4 cursor-pointer`}>
          <div>
            <img
              src="/images/picprofile.png"
              alt=""
              className="rounded-md cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full text-tiny text-gray-500 flex space-x-10">
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
      </Link>

      <Link to="/notification">
        <div className="flex py-4 gap-4 border-t-[1px] border-gray-300 cursor-pointer">
          <div>
            <img
              src="/images/picprofile.png"
              alt=""
              className="rounded-md cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="w-full text-tiny text-neutral3 flex space-x-10">
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
      </Link>
    </div>
  );
};

export default NotificationCard;