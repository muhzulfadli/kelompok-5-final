import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BiSearch, BiBell, BiUser } from "react-icons/bi";
import { IoList, IoMenu, IoCloseCircle } from "react-icons/io5";

const Navbar = () => {

  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const user = useSelector(store => store.user.data)

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-center bg-white px-0 py-5 shadow-lg">
        <div className="container">

          {/* web view start */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex w-5/12 items-center justify-between gap-6">
              <div className="flex flex-row items-center px-4 py-2 rounded text-purple4 text-sm font-semibold">
                <img
                  src="/images/handshaker-ungu.svg "
                  className="w-9 h-9 mr-2"
                  alt=""
                />
                SecondHand
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between space-x-4 rounded-2xl bg-white px-6 py-3 md:bg-slate-100">
                  <form>
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Cari di sini ..."
                      class="bg-white md:bg-slate-100 outline-none"
                    />
                  </form>
                  <BiSearch className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div class="flex space-x-8 text-lg">
              {/* Notification card start */}
              <div className="hidden h-fit w-fit bg-white shadow-auto rounded-xl absolute px-4 py-3 -ml-48 mt-8">
                <div className="flex py-4 gap-4">
                  <div>
                    <img src="/images/profile.png" alt="" className="rounded-md cover" />
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
                <div className="flex py-4 gap-4 border-t-[1px] border-gray-300">
                  <div>
                    <img src="/images/profile.png" alt="" className="rounded-md cover" />
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
                  </div>
                </div>
              </div>
              {/* Notification card end */}
              <IoList className="cursor-pointer" />
              <BiBell className="cursor-pointer" />
              <BiUser className="cursor-pointer" />
            </div>
          </div>
          {/* web view end */}

          {/* mobile view start */}
          {click ? (
            <div class="flex justify-between items-center lg:hidden">
              <div>
                <div className="flex flex-col items-center w-full">
                  <img
                    src="/images/handshaker-ungu.svg "
                    className="w-8 h-8"
                    alt=""
                  />
                  <p className="text-[7px] font-bold text-purple4">
                    SecondHand
                  </p>
                </div>
              </div>
              <div className="text-2xl cursor-pointer" onClick={handleClick}>
                {click && <IoMenu />}
              </div>
            </div>
          ) : (
            <div className="lg:hidden min-h-screen w-full bg-white absolute left-0 top-0 overflow-x-hidden">
              <div className="px-4 py-5 w-full flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col items-center mx-5" onClick={button}>
                    <img
                      src="/images/handshaker-ungu.svg"
                      className="w-8 h-8"
                      alt=""
                    />
                    <p className="text-[7px] font-bold text-purple4">
                      SecondHand
                    </p>
                  </div>
                  <div onClick={handleClick}>
                    <IoCloseCircle
                      onClick={click}
                      className="text-3xl cursor-pointer"
                    />
                  </div>
                </div>
                { user === null && <div className="text-center"><Link to="/login" className="px-8 py-2 bg-purple4 text-white rounded-md w-fit" onClick={closeMobileMenu}>Login</Link></div> }

                { user !==null && <div onClick={closeMobileMenu} className="text-center">Notifikasi</div> }
                { user !==null && <div onClick={closeMobileMenu} className="text-center">Daftar Jual</div> }
                { user !==null && <div onClick={closeMobileMenu} className="text-center">Akun Saya</div> }
                { user !==null && <div className="text-center"><Link to="/logout" onClick={closeMobileMenu} className="px-4 py-2 bg-purple4 text-white rounded-md w-fit">Logout</Link></div> }
              </div>
            </div>
          )}
          {/* mobile view end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;