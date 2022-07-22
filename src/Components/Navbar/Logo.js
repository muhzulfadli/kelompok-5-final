import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex flex-row items-center px-4 py-2 rounded text-purple4 text-sm font-semibold">
        <img
          src="/images/handshaker-ungu.svg "
          className="w-9 h-9 mr-2"
          alt=""
        />
        SecondHand
      </div>
    </Link>
  );
};

export default Logo;
