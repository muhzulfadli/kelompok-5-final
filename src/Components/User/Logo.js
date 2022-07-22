import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex flex-row items-center gap-2 bg-purple4 p-3 w-fit font-semibold text-white rounded-md text-xs">
        <img src="/images/handshaker.svg" alt="" className="w-5 h-5" />
        SecondHand
      </div>
    </Link>
  );
};

export default Logo;
