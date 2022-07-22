import React from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowNarrowLeft } from "react-icons/tb";

const BackButton = () => {
    
  const navigate = useNavigate();

  return (
    <button>
      <TbArrowNarrowLeft
        onClick={() => navigate(-1)}
        className="block lg:hidden my-4"
      />
    </button>
  );
};

export default BackButton;
