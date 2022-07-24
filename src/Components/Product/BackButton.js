import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center lg:items-start mt-1">
      <IoArrowBack onClick={() => navigate(-1)} className="cursor-pointer" />
    </div>
  );
};

export default BackButton;
