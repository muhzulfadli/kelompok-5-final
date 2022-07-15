import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import tw from "tailwind-styled-components";
import { IoArrowBack } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const AddProduct = () => {

  const navigate = useNavigate();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  // looping
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="w-full min-h-screen">
      <div className="container">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 my-10">
          <div className="flex items-center lg:items-start mt-1">
            <IoArrowBack onClick={() => navigate(-1)} className="cursor-pointer" />
          </div>
          <div className="flex w-full lg:w-1/2">
              <form action="/" className="w-full flex flex-col gap-4 text-sm lg:text-base">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Nama Produk</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nama Produk"
                    className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                  />
                </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="price">Harga Produk</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="Rp 0,00"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                <label htmlFor="nama">Kategori</label>
                <div class="inline-block relative w-full">
                  <select
                    name="kategori"
                    id="kategori"
                    className="block appearance-none w-full px-4 py-3 border border-solid border-gray-300 rounded-2xl first:text-gray-400 focus:text-black last-of-type:text-black focus:border-purple4 focus:outline-none focus:shadow-outline-purple"
                  >
                    <option value="" selected disabled>
                      Pilih Kategori
                    </option>
                    <option value="Hobi">Hobi</option>
                    <option value="Kendaraan">Kendaraan</option>
                    <option value="Baju">Baju</option>
                    <option value="Elektronik">Elektronik</option>
                    <option value="Kesehatan">Kesehatan</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <FiChevronDown className="text-2xl" />
                  </div>
                </div>
              </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="description">Deskripsi</label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Contoh: Jalan Ikan Hiu 33"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fotoProduk">Foto Produk</label>
                    <StyledDiv {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p className="font-medium font-main">
                        <BsPlusLg className="text-lg" />
                      </p>
                    </StyledDiv>    
                    <ul className="text-center text-xs italic">{files}</ul>
                  </div>
                  <div className="w-full flex flex-row gap-2 mt-2 mb-4">
                    <div className="basis-1/2">
                      <Link to="/product/productpreview">
                        <div className="bg-purple4 hover:bg-purple5 py-3 px-4 rounded-2xl font-medium text-sm text-white text-center cursor-pointer transition ease-in-out duration-300">
                          Preview
                        </div>
                      </Link>
                    </div>
                    <div className="basis-1/2">
                      <Link to="/product/productlist">
                        <div className="bg-purple4 hover:bg-purple5 py-3 px-4 rounded-2xl font-medium text-sm text-white text-center cursor-pointer transition ease-in-out duration-300">
                          Terbitkan
                        </div>
                      </Link>
                    </div>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledDiv = tw.div`
  text-neutral2
  rounded-md
  border-2
  border-dashed
  border-neutral2 
  p-8 
  w-fit
  cursor-pointer
`

export default AddProduct;