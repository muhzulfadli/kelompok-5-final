import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// React Select Animation
const animatedComponents = makeAnimated();

const Form = () => {
  // React select =========================================
  const categoryOptions = [
    { value: "Hobi", label: "Hobi", color: "#D0D0D0" },
    { value: "Kendaraan", label: "Kendaraan" },
    { value: "Baju", label: "Baju" },
    { value: "Elektronik", label: "Elektronik" },
    { value: "Kesehatan", label: "Kesehatan" },
    { value: "Lainnya", label: "Lainnya" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: "16px",
      padding: "6px 8px",
      border: "1px solid #D0D0D0",
      boxShadow: "none",
      "&:hover": { border: "1px solid #D0D0D0" },
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#E2D4F0" : "none",
      "&:hover": { backgroundColor: "#E2D4F0" },
      "&:focus": { backgroundColor: "#E2D4F0" },
    }),
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#E2D4F0",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: "#4B1979",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#4B1979",
      "&:hover": {
        color: "#4B1979",
        backgroundColor: "#E2D4F0",
      },
    }),
  };

  // React select ================================

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.data);

  const [imgProduct, setImgProduct] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState(0);
  const [kategori, setKategori] = useState([]);
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState([]);
  const [prevGambar, setPrevGambar] = useState([]);

  const pilihGambar = (e) => {
    // mengecek adakah file apa tidak
    if (e.target.files[0]) {
      // set file yang sudah ada kesalam use State
      setGambar(e.target.files[0]);
      //  inisiai untuk merender data file yang sudah di upload
      const reader = new FileReader();
      // melakukan proses render dan di simpan dalam value
      reader.addEventListener("load", () => {
        setPrevGambar(reader.result);
      });
      // melakuan render berdasrakan image yang di pilih
      reader.readAsDataURL(e.target.files[0]);
    } else {
    }
  };

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`
      )
      .then((res) => {
        // console.log(res.data.product.categories);
        setNama(res.data.product.nama);
        setHarga(res.data.product.harga);
        setKategori(res.data.product.categories);
        setDeskripsi(res.data.product.deskripsi);
        setImgProduct(res.data.product.product_photos);
      })
      .catch((error) => {
        console.log("ada error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append(`harga`, harga);
    formData.append(`deskripsi`, deskripsi);
    // formData.append(`categories`, kategori);
    // formData.append(`image_photos`, gambar);
    axios
      .put(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`,
        formData,
        {
          headers: {
            Authorization: user ? localStorage.getItem("accessToken") : "",
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Data telah terkirim");
        navigate("/product");
      })
      .catch(() => {
        alert("Data tidak berhasil dikirm");
      });
  };

  return (
    <div className="flex w-full lg:w-1/2">
      <form
        action="/"
        className="w-full flex flex-col gap-4 text-sm lg:text-base"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nama">Nama Produk</label>
          <input
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Produk"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="harga">Harga Produk</label>
          <input
            id="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Rp 0,00"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="kategori">Pilih Kategori</label>
          <div className="relative w-full">
            <Select
              name="kategori"
              id="kategori"
              components={animatedComponents}
              options={categoryOptions}
              styles={customStyles}
              value={kategori}
              onChange={(e) => setKategori(e)}
              placeholder="Pilih Kategori"
              isMulti
              required
            ></Select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deskripsi">Deskripsi</label>
          <textarea
            name="deskripsi"
            id="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Contoh: Jalan Ikan Hiu 33"
            className="px-4 py-3 border border-solid border-neutral2 rounded-2xl focus:outline-purple4"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fotoProduk">Foto Produk</label>
          <div className="flex justify-between">
            <label htmlFor="customFile" className="block">
              <div className="flex justify-center">
                <img
                  src={imgProduct[0]}
                  alt="foto produk"
                  className="hover:cursor-pointer w-48 h-48 rounded-2xl object-contain mt-3"
                />
              </div>
              <p className="hover:text-slate-600 hover:cursor-pointer text-center italic">
                Klik untuk mengubah gambar
              </p>
            </label>
            <div>
              <input
                type="file"
                name="customFile"
                accept="image/png , image/jpeg, image/webp, link"
                id="customFile"
                hidden
                onChange={pilihGambar}
              />
              <div>
                {prevGambar !== null && (
                  <div>
                    <img
                      src={prevGambar}
                      alt="gambar baru"
                      className="hover:cursor-pointer w-48 h-48 object-contain rounded-2xl mt-3 ml-8"
                    />
                    <p className="italic text-center">*Foto Produk Baru</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-2 mt-2 mb-4">
          <div className="basis-1/2">
            <Link to="/product/productpreview">
              <div className="py-3 px-4 rounded-2xl font-medium text-sm text-center text-neutral1 bg-purple4 hover:bg-purple5 transition ease-in-out duration-300">
                Preview
              </div>
            </Link>
          </div>
          <div className="basis-1/2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 px-4 rounded-2xl font-medium text-sm text-center text-neutral1 bg-purple4 hover:bg-purple5 transition ease-in-out duration-300"
            >
              Terbitkan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
