import React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const MobileView = ({ handleClick, click }) => {
  return (
    <div className="flex justify-between items-center lg:hidden">
      <Link to="/">
        <div className="flex flex-col items-center w-full">
          <img src="/images/handshaker-ungu.svg " className="w-8 h-8" alt="" />
          <p className="text-[7px] font-bold text-purple4">SecondHand</p>
        </div>
      </Link>
      <div className="text-2xl cursor-pointer" onClick={handleClick}>
        {click && <IoMenu />}
      </div>
    </div>
  );
};

export default MobileView;
