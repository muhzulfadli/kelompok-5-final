import React from "react";
import { IoClose } from "react-icons/io5";

const StatusModal = ({ statusOpen, isChecked, setIsChecked, setStatusOpen, setAlertOpen }) => {

  const handleChecked = (e) => {
    setIsChecked(e.target.value);
  };
  const resetChecked = () => {
    setIsChecked("");
  };

  return (
    <div
      className={`${
        statusOpen ? "flex" : "hidden"
      } bg-black bg-opacity-50 absolute top-0 left-0 inset-0 z-50 justify-center items-end lg:items-center`}
    >
      <div className="bg-neutral1 bottom-0 lg:bottom-auto fixed lg:block lg:rounded-2xl lg:w-[27%] rounded-t-2xl w-screen">
        <div className="flex justify-end items-center pr-4 pt-4">
          <div>
            <IoClose
              onClick={() => {
                resetChecked();
                setStatusOpen();
              }}
              className="text-lg lg:text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div className="text-sm lg:text-base font-medium pt-5 px-6">
          Perbarui status penjualan produkmu
        </div>
        <div className="col-span-2 space-y-4 p-6">
          {
            <div className="flex gap-4 items-center">
              {/* Checkbox start */}
              <label forHTML="radio" className="cursor-pointer relative">
                <input
                  type="radio"
                  id="radio1"
                  name="radio"
                  value="success"
                  checked={isChecked === "success"}
                  onChange={handleChecked}
                  className="appearance-none border-2 border-solid border-neutral3 bg-neutral3 focus:ring-transparent checked:bg-purple4 rounded-full h-[18px] w-[18px]"
                />
              </label>
              {/* Checkbox end */}
              <label forHTML="radio1" className="flex flex-col gap-1">
                <div className="text-sm lg:text-base">Berhasil Terjual</div>
                <div className="text-sm lg:text-base text-neutral3 font-normal">
                  Kamu telah sepakat menjual produk ini kepada pembeli
                </div>
              </label>
            </div>
          }
          <div className="flex gap-4 items-center">
            {/* Checkbox start */}
            <label forHTML="radio" className="cursor-pointer relative">
              <input
                type="radio"
                id="radio2"
                name="radio"
                value="failed"
                checked={isChecked === "failed"}
                onChange={handleChecked}
                className="appearance-none border-2 border-solid border-neutral3 bg-neutral3 focus:ring-transparent checked:bg-purple4 rounded-full h-[18px] w-[18px]"
              />
            </label>
            {/* Checkbox end */}
            <div className="flex flex-col gap-1">
              <div className="text-sm lg:text-base">Batalkan transaksi</div>
              <div className="text-sm lg:text-base text-neutral3 font-normal">
                Kamu membatalkan transaksi produk ini dengan pembeli
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setStatusOpen(false);
              setIsChecked("success");
              setAlertOpen(false);
            }}
            className={`${
              isChecked ? "bg-purple4" : "bg-neutral3"
            } w-full py-3 mt-5 rounded-2xl font-medium text-xs lg:text-sm text-neutral1 hover:transition-all text-center`}
            id="kirim-btn"
            disabled={isChecked ? false : true}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
