import React from "react";

const ModalTawar = ({ isOpen, setIsOpen, setAlertOpen, setButtonClick }) => {
  return (
    <div
      className={`bg-neutral5 bg-opacity-50 absolute top-0 left-0 inset-0 ${
        isOpen ? "flex" : "hidden"
      } justify-center items-end lg:items-center z-50`}
      id="overlay"
    >
      <div className="bg-neutral1 lg:rounded-2xl bottom-0 fixed lg:block lg:bottom-auto rounded-t-2xl w-screen lg:w-fit">
        <div className="flex justify-end items-center pr-4 pt-3">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="close-modal"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>
          <h4 className="text-base font-medium ml-2 pt-5 px-6">
            Masukan Harga Tawarmu
          </h4>
        </div>
        <div className="w-[350px] px-6">
          <p className="ml-2 pt-2 text-gray-500 ">
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
        </div>
        <div className="col-span-2 pt-1 p-6">
          <div className="flex shadow-auto rounded-2xl p-3 bg-[#b8b7b776]">
            <img
              className="w-14 rounded-xl"
              src="/images/picprofile.png"
              alt=""
            />
            <div className="ml-4">
              <h1 className="font-medium text-sm">Jam Tangan Casio</h1>
              <h1 className="text-sm font-normal ">Rp 250.000</h1>
            </div>
          </div>
          <div className="pt-5 ml-2">
            <h1>Harga Tawar</h1>
          </div>
          <div>
            <div className="col-span-2 pt-1 py-3 px-2 ">
              <div className="flex shadow-auto rounded-2xl py-4 bg-[#fffcfc]">
                <input
                  className="pl-3 focus:outline-none"
                  required
                  defaultValue="Rp 0,00"
                  variant="filled"
                ></input>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setAlertOpen(false);
              setIsOpen(false);
              setButtonClick(false);
            }}
            className="bg-purple4 hover:bg-purple5 w-full py-3 mt-5 rounded-2xl font-medium text-sm text-white transition ease-in-out duration-300"
            id="tertarik-btn"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTawar;