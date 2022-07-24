import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const MenuOpened = (closeMobileMenu) => {
  return (
    <div className="w-full flex justify-center">
      <Link
        to="/login"
        className="flex gap-2 items-center px-4 py-2 bg-purple4 text-white rounded-md w-fit"
        onClick={closeMobileMenu}
      >
        <FiLogIn />
        <div>Masuk</div>
      </Link>
    </div>
  );
};

export default MenuOpened;
