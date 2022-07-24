import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between space-x-4 rounded-2xl bg-white px-6 py-3 md:bg-slate-100">
        <form>
          <input
            type="search"
            name=""
            id=""
            placeholder="Cari di sini ..."
            className="bg-white md:bg-slate-100 outline-none"
          />
        </form>
        <BiSearch className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
