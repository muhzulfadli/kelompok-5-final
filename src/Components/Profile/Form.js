import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InfoProfil = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.data);
  const [imgProfile, setImgProfile] = useState("");
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nohp, setNohp] = useState("");
  const [gambar, setGambar] = useState(null);
  const [prevGambar, setPrevGambar] = useState(null);

  const choosePicture = (e) => {
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

  useEffect(() => {
    axios.get("https://binar-second-hand.herokuapp.com/api/v1/profile", {
      headers: {
          Authorization: user ? localStorage.getItem("accessToken") : null,
      },
    })
      .then((res) => {
        setNama(res.data.userProfile.nama);
        setKota(res.data.userProfile.kota);
        setAlamat(res.data.userProfile.alamat);
        setNohp(res.data.userProfile.no_handphone);
        setImgProfile(res.data.userProfile.image_url);
      })
      .catch((err) => {
        console.log('ini ada kesalahan')
        // alert("Ada kesalahan");
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(`nama`, nama);
    formData.append(`kota`, kota);
    formData.append(`alamat`, alamat);
    formData.append(`no_handphone`, nohp);
    formData.append(`image_url`, gambar);
    axios.put("https://binar-second-hand.herokuapp.com/api/v1/profile", formData, {
      headers: {
        Authorization: user ? localStorage.getItem("accessToken") : "",
      },
    })
      .then(() => {
        alert("Data telah terkirim");
        window.location.replace("/infoprofile");
      })
      .catch(() => {
        alert("Data tidak berhasil dikirm");
      });
  };

  return (
    <div className="App">
      <div className="relative mt-3 h-auto w-full p-3">
        <button>
          <IoArrowBack
            onClick={() => {
              navigate(-1);
            }}
          />
        </button>
        <div className="flex justify-center">
          <p className="text-2xl mb-20 -mt-8 md:hidden">Lengkapi Info Profil</p>
        </div>

        {/*Body Form */}
        <div className="flex justify-center">
          <form action="">
            <div className="mb-4 flex w-[328px] flex-col justify-center px-5 md:w-[568px]">
              <div className="flex justify-center mb-8">
                {/**gambar profile */}
                <label htmlFor="customFile" className="block">
                  <div className="flex justify-center">
                    <img
                      src={imgProfile}
                      // onError={(e) =>
                      //   (e.target.onerror = null)(
                      //     (e.target.src = "/images/picprofile.png")
                      //   )
                      // }
                      alt="foto profil"
                      className="hover:cursor-pointer w-48 h-48 rounded-2xl object-contain mt-3"
                    />
                  </div>
                  <p className="mt-3 text-center hover:text-slate-600 hover:cursor-pointer italic">
                    Klik untuk mengubah gambar
                  </p>
                </label>
                <div className="">
                  <input
                    type="file"
                    name="customFile"
                    accept="image/png , image/jpeg, image/webp, link"
                    id="customFile"
                    hidden
                    onChange={choosePicture}
                  />
                  <div>
                    {prevGambar != null && (
                      <div>
                        <img
                          src={prevGambar}
                          alt="gambar baru"
                          className="hover:cursor-pointer w-48 h-48 object-contain rounded-2xl mt-3 ml-8"
                        />
                        <p className="mt-3 text-center">*Foto Profil Baru</p>
                      </div>
                    )}
                  </div>
                </div>
                {/**gambar profile */}
              </div>
              <label htmlFor="nama" className="mb-1">
                Nama*
              </label>
              <input
                id="nama"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                className="mb-6 w-full py-3 shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-purple4 focus:border-1"
                placeholder="Nama"
                required
              />
              <label htmlFor="kota" className="mb-1">
                Kota*
              </label>
              <input
                id="kota"
                value={kota}
                onChange={(e) => {
                  setKota(e.target.value);
                }}
                className="mb-6 w-full py-3 shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-purple4 focus:border-1"
                placeholder="Kota"
                required
              />
              <label htmlFor="alamat" className="mb-1">
                Alamat*
              </label>
              <textarea
                id="alamat"
                value={alamat}
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
                className="mb-6 w-full p-3 shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline focus:border-purple4 focus:border-1"
                required
              ></textarea>
              <label htmlFor="nohp" className="mb-1">
                No Handphone*
              </label>
              <input
                type="text"
                maxLength="12"
                id="nohp"
                value={nohp}
                onChange={(e) => {
                  setNohp(e.target.value);
                }}
                className="mb-6 w-full py-3 shadow appearance-none text-gray-700 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 focus:border-purple4 focus:border-1"
                placeholder="contoh: +628123456789"
                required
              />
              <button
                type="submit"
                onClick={handleOnSubmit}
                className="mb-1 w-full py-3 appearance-none bg-purple4 leading-tight rounded-2xl border-2 focus:outline-none focus:shadow-outline indent-3 hover:bg-purple5 focus:bg-purple4"
              >
                <p className="text-white">Simpan</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoProfil;