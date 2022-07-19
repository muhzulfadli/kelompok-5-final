import React from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import tw from "tailwind-styled-components";
import Form from "../../Components/Profile/Form";

const Content = () => {
  const navigate = useNavigate();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  // looping
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 my-4 lg:my-10">
      <div className="flex items-center lg:items-start">
        <button>
          <IoArrowBack
            onClick={() => {
              navigate(-1);
            }}
          />
        </button>
        <div className="lg:hidden w-5/6 font-semibold text-md text-center justify-around ml-6">
          Lengkapi Info Akun
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex justify-center">
          <StyledDiv {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="font-medium font-main">
              <FiCamera className="text-2xl" />
            </p>
          </StyledDiv>
        </div>
        <ul className="text-center text-xs italic">{files}</ul>
        <Form />
        <div className="border border-solid border-purple4 px-3 py-3 rounded-2xl text-center text-purple4 hover:text-white cursor-pointer text-sm lg:text-base font-semibold hover:bg-purple4">
          Submit
        </div>
      </div>
    </div>
  );
};

const StyledDiv = tw.div`
  bg-purple2 
  rounded-md 
  p-8 
  w-fit
`;

export default Content;
