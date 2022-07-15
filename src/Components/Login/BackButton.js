import React from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowNarrowLeft } from "react-icons/tb";

const BackButton = (user) => {

  const navigate = useNavigate();

  return (
    <button>
      <TbArrowNarrowLeft
        onClick={user !== null ? () => navigate(-1) : navigate("/")}
        className="my-4 block lg:hidden"
      />
    </button>
  );
};

export default BackButton;
