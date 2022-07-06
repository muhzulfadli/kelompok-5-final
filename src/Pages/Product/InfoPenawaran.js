import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { IoClose, IoLogoWhatsapp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const InfoPenawaran = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonClick, setButtonClick] = useState(true);
  const [statusOpen, setStatusOpen] = useState(false);
  const [isChecked, setIsChecked] = useState("");
  const [alertOpen, setAlertOpen] = useState(true);

  const handleChecked = (e) => {
    setIsChecked(e.target.value);
  };
  const resetChecked = () => {
    setIsChecked("");
  };

  return (
    <>
      {/* Modal terima start */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } bg-black bg-opacity-50 absolute top-0 left-0 inset-0 z-50 justify-center items-end lg:items-center`}
      >
        <div className="bg-white lg:rounded-2xl lg:w-[27%] rounded-t-2xl w-screen">
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
                  <p className="text-sm lg:text-base line-through">
                    Rp 250.000
                  </p>
                  <p className="text-sm lg:text-base">Ditawar Rp 200.000</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setButtonClick(false);
              }}
              className="flex justify-center items-center gap-6 bg-purple4 w-full py-3 mt-5 rounded-2xl font-medium text-xs lg:text-sm text-white"
              id="tertarik-btn"
            >
              <p>Hubungi via Whatsapp</p>
              <IoLogoWhatsapp className="text-lg lg:text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Modal terima end */}

      {/* Modal status start */}
      <div
        className={`${
          statusOpen ? "flex" : "hidden"
        } bg-black bg-opacity-50 absolute top-0 left-0 inset-0 z-50 justify-center items-end lg:items-center`}
      >
        <div className="bg-white lg:rounded-2xl lg:w-[27%] rounded-t-2xl w-screen">
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
              } w-full py-3 mt-5 rounded-2xl font-medium text-xs lg:text-sm text-white text-center`}
              id="kirim-btn"
              disabled={isChecked ? false : true}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
      {/* Modal status end */}
      
      <div class="relative mt-6 flex justify-center md:mt-10">
        {/* Alert start */}
        <div
          className={`bg-[#73CA5C] rounded-xl fixed top-32 w-[500px] inset-x-1/2 -translate-x-1/2 px-6 py-2 justify-between flex text-white ${
            alertOpen ? "hidden" : ""
          }`}
        >
          <h2 className="text-white my-auto text-sm">
            Status produk berhasil diperbarui
          </h2>
          <div
            role="button"
            onClick={() => setAlertOpen(true)}
            className="my-auto"
          >
            <AiOutlineClose />
          </div>
        </div>
        {/* Alert end */}
        <div class="hidden md:block md:w-3/5">
          <FiArrowLeft class="text-2xl" />
        </div>
        <div class="absolute inset-0 inset-y-auto -z-10 mx-auto w-11/12 md:flex md:w-full md:justify-center">
          <div class="md:w-2/5">
            <div class="space-y-4">
              <div class="w-full rounded-2xl p-5 shadow-md">
                <div class="flex items-center space-x-5">
                  <img
                    src="/images/picprofile.png"
                    alt=""
                    class="h-12 w-12 rounded-xl object-cover"
                  />
                  <div>
                    <div class="font-medium">Nama Pembeli</div>
                    <div class="text-gray-400">kota</div>
                  </div>
                </div>
              </div>
              <div class="font-medium">Daftar Produkmu yang Ditawar</div>
              <div class="space-y-4">
                <div class="flex space-x-4">
                  <img
                    src="/images/jamtangan.png"
                    alt=""
                    class="h-12 w-12 rounded-xl object-cover"
                  />
                  <div class="w-full">
                    <div class="space-y-1">
                      <div class="flex justify-between text-xs text-gray-400">
                        <div>Penawaran produk</div>
                        <div>20 Apr, 14:04</div>
                      </div>
                      <div>Jam Tangan Casio</div>
                      <div>Rp 250.000</div>
                      <div>Ditawar Rp 200.000</div>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 md:divide-y">
                  <div class="flex justify-end">
                    {buttonClick ? (
                      <div class="flex w-full space-x-4 md:w-3/5">
                        <div class="w-1/2 rounded-2xl border border-purple4 bg-white px-6 py-2 text-center cursor-pointer">
                          Tolak
                        </div>
                        <div
                          onClick={() => setIsOpen(true)}
                          class="w-1/2 rounded-2xl border bg-purple4 px-6 py-2 text-center text-white cursor-pointer"
                        >
                          Terima
                        </div>
                      </div>
                    ) : (
                      <div
                        class={`${
                          isChecked ? "hidden" : "flex"
                        } w-full space-x-4 md:w-3/5`}
                      >
                        <div
                          onClick={() => setStatusOpen(true)}
                          class="w-1/2 rounded-2xl border border-purple4 bg-white px-6 py-2 text-center cursor-pointer"
                        >
                          Status
                        </div>
                        <div class="w-1/2 rounded-2xl border bg-purple4 px-auto py-2 flex items-center justify-center gap-2 text-white">
                          <p>Hubungi di</p>
                          <IoLogoWhatsapp />
                        </div>
                      </div>
                    )}
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoPenawaran;
