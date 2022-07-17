import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Form = () => {
  return (
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
  );
};

export default Form;
