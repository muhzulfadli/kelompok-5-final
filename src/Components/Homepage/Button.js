import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Button = () => {
  return (
    <div className="flex items-center justify-center -ml-24">
      <Link to="/product/addproduct">
        <button
          type="button"
          className="fixed bottom-6 shadow-lg shadow-purple4 hover:shadow-purple5 text-neutral1 bg-purple4 hover:bg-purple5 focus:ring-4 focus:outline-none focus:ring-purple2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition ease-in-out duration-300"
        >
          <FaPlus className="mr-2" />
          Jual
        </button>
      </Link>
    </div>
  );
};

export default Button;
