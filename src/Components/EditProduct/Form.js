import React from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import tw from "tailwind-styled-components";
import { BsPlusLg } from "react-icons/bs";

const Form = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="flex w-full lg:w-1/2">
      <form
        action="/"
        className="w-full flex flex-col gap-4 text-sm lg:text-base"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nama Produk</label>
          <input
            type="text"
            name="name"
            id="name"
            value="Data Sebelumnya"
            placeholder="Nama Produk"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Harga Produk</label>
          <input
            type="text"
            name="price"
            id="price"
            value="Data Sebelumnya"
            placeholder="Rp 0,00"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Pilih Kategori</label>
          <input
            type="text"
            name="category"
            id="category"
            value="Data Sebelumnya"
            placeholder="Pilih Kategori"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Deskripsi</label>
          <textarea
            name="description"
            id="description"
            value="Data Sebelumnya"
            placeholder="Contoh: Jalan Ikan Hiu 33"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
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
            <Link to="/productpreview">
              <div className="py-3 px-4 rounded-2xl font-medium text-sm text-center text-neutral1 bg-purple4 hover:bg-purple5 transition ease-in-out duration-300">
                Preview
              </div>
            </Link>
          </div>
          <div className="basis-1/2">
            <Link to="/productlist">
              <div className="py-3 px-4 rounded-2xl font-medium text-sm text-center text-neutral1 bg-purple4 hover:bg-purple5 transition ease-in-out duration-300">
                Terbitkan
              </div>
            </Link>
          </div>
        </div>
      </form>
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
`;

export default Form;
