import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
  return (
    <div className="bg-purple4 hover:bg-purple5 px-3 py-2 text-white rounded-md flex gap-2 items-center transition ease-in-out duration-300">
      <FiLogIn />
      <Link to="/login" className="text-white">
        Masuk
      </Link>
    </div>
  );
};

export default LoginButton;
