import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { BiSearch, BiBell } from "react-icons/bi";
import { IoList, IoMenu, IoCloseCircle } from "react-icons/io5";
import Dropdown from "../Components/Navbar/Dropdown";
import NotificationCard from "../Components/Navbar/NotificationCard";

const Navbar = () => {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);
  const handleNotification = () => setShowNotification(true);

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

  const user = useSelector((store) => store.user.data);

  return (
    <>
      <div className="z-40 sticky top-0">
        <div className="flex justify-center bg-white px-0 py-5 lg:shadow-lg">
          <div className="container">
            {/* web view start */}
            <div className="hidden lg:flex items-center justify-between">
              <div className="flex w-5/12 items-center justify-between gap-6">
              <Link to='/'>
                  <div className="flex flex-row items-center px-4 py-2 rounded text-purple4 text-sm font-semibold">
                    <img
                      src="/images/handshaker-ungu.svg "
                      className="w-9 h-9 mr-2"
                      alt=""
                    />
                    SecondHand
                  </div>
                </Link>
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
              <div class="flex space-x-8 text-lg relative">
                <IoList className="cursor-pointer" />
                {/* Notification card start */}
                <div className="relative inline-block text-left">
                  <div className="relative w-full mb-1 bg-white text-lg font-medium focus:outline-none" onClick={handleNotification}>
                    <BiBell className="cursor-pointer" />
                    <div className="bg-red-500 w-1.5 h-1.5 rounded-full absolute top-0 ml-2"></div>
                    {showNotification && <NotificationCard />}
                  </div>
                </div>
                {/* Notification card end */}
                <Dropdown />
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
              <div className="lg:hidden min-h-screen w-full bg-black/90 text-white absolute left-0 top-0 overflow-x-hidden">
                <div className="px-4 py-5 w-full flex flex-col gap-6">
                  <div className="flex flex-row justify-between items-center">
                    <div
                      className="flex flex-col items-center mx-5"
                      onClick={button}
                    >
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
                  {user === null && (
                    <div className="text-center">
                      <Link
                        to="/login"
                        className="px-8 py-2 bg-purple4 text-white rounded-md w-fit"
                        onClick={closeMobileMenu}
                      >
                        Login
                      </Link>
                    </div>
                  )}

                  {user !== null && (
                    <div onClick={closeMobileMenu} className="text-center">
                      Notifikasi
                    </div>
                  )}
                  {user !== null && (
                    <div onClick={closeMobileMenu} className="text-center">
                      Daftar Jual
                    </div>
                  )}
                  {user !== null && (
                    <div onClick={closeMobileMenu} className="text-center">
                      Akun Saya
                    </div>
                  )}
                  {user !== null && (
                    <div className="text-center">
                      <Link
                        to="/logout"
                        onClick={closeMobileMenu}
                        className="px-4 py-2 bg-purple4 text-white rounded-md w-fit"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* mobile view end */}
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
    </>
  );
};

export default Navbar;

