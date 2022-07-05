import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Notification = () => {
  return (
    <div className="flex w-full">
      <div className="container">
        <div className="lg:hidden font-bold text-2xl py-4 absolute top-3 ml-48 z-50 ">
          Notifikasi
        </div>
        <div className="fw-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 my-8">
          <div className="hidden lg:flex items-start mt-4">
            <Link to="/"><IoArrowBack /></Link>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
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
            <div className="flex py-6 gap-4 border-t-[1px] border-gray-300">
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
      </div>
    </div>
  );
};

export default Notification;