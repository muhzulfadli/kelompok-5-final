import React from "react";
import { BiSearch } from "react-icons/bi";

const CategoryButton = (props) => {
  return (
    <button
      type="button"
      className="text-neutral4 bg-purple1 hover:bg-purple4 hover:text-neutral1 font-medium rounded-lg text-xs lg:text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
    >
      <BiSearch className="mr-2" />
      {props.category}
    </button>
  );
};

export default CategoryButton;
