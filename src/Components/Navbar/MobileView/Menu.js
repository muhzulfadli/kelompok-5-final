import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";
import Logo from "./Logo";
import MenuOpened from "./MenuOpened";

const Menu = ({ button, handleClick, user, setClick }) => {

  const closeMobileMenu = () => setClick(true);
  
  return (
    <div className="lg:hidden min-h-screen w-full bg-black/90 text-white absolute left-0 top-0 overflow-x-hidden">
      <div className="px-4 py-5 w-full flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          {button && (
            <Logo />
          )}
          
          <div onClick={handleClick}>
            <IoCloseCircle className="text-3xl cursor-pointer mx-1" />
          </div>
        </div>
        {user === null && (
          <MenuOpened closeMobileMenu={closeMobileMenu} />
        )}

        {user !== null && (
          <div onClick={closeMobileMenu} className="text-center">
            <Link to="/notification">Notifikasi</Link>
          </div>
        )}
        {user !== null && (
          <div onClick={closeMobileMenu} className="text-center">
            <Link to="/product/productlist">Daftar Jual</Link>
          </div>
        )}
        {user !== null && (
          <div onClick={closeMobileMenu} className="text-center">
            <Link to="/infoprofile">Akun Saya</Link>
          </div>
        )}
        {user !== null && (
          <div className="text-center my-2">
            <Link
              to="/logout"
              onClick={closeMobileMenu}
              className="px-4 py-2 bg-purple4 text-white rounded-md w-fit"
            >
              Keluar
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
