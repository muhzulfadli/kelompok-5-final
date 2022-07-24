import React from "react";
import { IoClose, IoLogoWhatsapp } from "react-icons/io5";

const AcceptModal = ({ isOpen, setIsOpen, setButtonClick }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black bg-opacity-50 absolute top-0 left-0 inset-0 z-50 justify-center items-end lg:items-center`}
    >
      <div className="bg-neutral1 bottom-0 lg:bottom-auto fixed lg:block lg:rounded-2xl lg:w-[27%] rounded-t-2xl w-screen">
        <div className="flex justify-end items-center pr-4 pt-4">
          <div>
            <IoClose
              onClick={() => setIsOpen(false)}
              className="text-lg lg:text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div className="text-sm lg:text-base font-medium ml-2 pt-5 px-6">
          Yeay kamu berhasil mendapat harga yang sesuai
        </div>
        <div className="w-full px-6 ml-2 py-3 text-gray-500 text-sm lg:text-base">
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </div>
        <div className="col-span-2 pt-1 p-6">
          <div className="flex flex-col gap-4 shadow-auto rounded-2xl px-3 py-4 bg-[#b8b7b776]">
            <div className="text-sm lg:text-base text-center font-medium">
              Product Match
            </div>
            <div className="flex items-center">
              <img
                className="w-fit h-fit rounded-xl"
                src="/images/picprofile.png"
                alt=""
              />
              <div className="ml-4">
                <h1 className="font-medium text-sm lg:text-base">
                  Nama Pembeli
                </h1>
                <h1 className="text-xs lg:text-sm font-normal ">Kota</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-xl"
                src="/images/jamtangan.png"
                alt=""
              />
              <div className="flex flex-col">
                <p className="text-sm lg:text-base">Jam Tangan Cesio</p>
                <p className="text-sm lg:text-base line-through">Rp 250.000</p>
                <p className="text-sm lg:text-base">Ditawar Rp 200.000</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              setButtonClick(false);
            }}
            className="flex justify-center items-center gap-6 border border-purple4 bg-neutral1 hover:bg-purple4 w-full py-3 mt-5 rounded-2xl font-medium text-xs lg:text-sm text-purple5 hover:text-neutral1 hover:transition-all"
            id="tertarik-btn"
          >
            <p>Hubungi via Whatsapp</p>
            <IoLogoWhatsapp className="text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptModal;
