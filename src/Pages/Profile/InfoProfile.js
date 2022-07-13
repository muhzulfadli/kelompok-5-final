import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { FiChevronDown, FiCamera } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import tw from "tailwind-styled-components";

const InfoProfile = () => {
  const navigate = useNavigate();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  // looping
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="w-full min-h-screen">
      <div className="container">
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
            <form className="flex flex-col gap-4 text-sm lg:text-base">
              <div className="flex flex-col gap-2">
                <label htmlFor="nama">Nama*</label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Nama Lengkap"
                  className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:border-purple4 focus:outline-none focus:shadow-outline-purple"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama">Kota*</label>
                <div class="inline-block relative w-full">
                  <select
                    name="kota"
                    id="kota"
                    className="block appearance-none w-full px-4 py-3 border border-solid border-gray-300 rounded-2xl first:text-gray-400 focus:text-black last-of-type:text-black focus:border-purple4 focus:outline-none focus:shadow-outline-purple"
                  >
                    <option value="" selected disabled>
                      Pilih Kota
                    </option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <FiChevronDown className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama">Alamat*</label>
                <textarea
                  name="nama"
                  id="nama"
                  placeholder="Contoh: Jl. Raya Cikarang No.1"
                  className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:border-purple4 focus:outline-none focus:shadow-outline-purple"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nama">No Handphone*</label>
                <input
                  type="number"
                  name="nama"
                  id="nama"
                  placeholder="+62"
                  className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:border-purple4 focus:outline-none focus:shadow-outline-purple"
                />
              </div>
            </form>
            <Link to="/productlist">
              <div className="px-3 py-3 mb-4 rounded-2xl text-center text-white cursor-pointer text-sm lg:text-base font-semibold bg-purple4 hover:bg-purple5 transition ease-in-out duration-300">
                Submit
              </div>
            </Link>
          </div>
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

export default InfoProfile;
