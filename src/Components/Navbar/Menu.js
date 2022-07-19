import React, { useState } from "react";
import Dropdown from "./Dropdown";
import NotificationCard from "./NotificationCard";
import { Link } from "react-router-dom";
import { BiBell } from "react-icons/bi";
import { IoList } from "react-icons/io5";

const Menu = () => {

  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="flex space-x-8 text-lg relative">
      <Link to="/product/productlist">
        <IoList className="cursor-pointer" />
      </Link>
      <div className="relative inline-block text-left">
        <div
          onClick={() => setShowNotification(!showNotification)}
          className="inline-flex justify-center w-full mb-1 bg-white text-lg font-medium focus:outline-none"
        >
          <BiBell className="cursor-pointer" />
          <div className="bg-red-500 w-2 h-2 rounded-full absolute ml-2"></div>
          {showNotification && <NotificationCard />}
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default Menu;
