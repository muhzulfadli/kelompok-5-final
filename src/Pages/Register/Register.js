import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../store/user";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Register = () => {
  const { register, handleSubmit, formState } = useForm();
  const [regStatus, setRegStatus] = useState({
    success: false,
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (data) => {
    // proses registrasi
    const postData = {
      email: data.user_email,
      password: data.user_password,
      username: data.user_name,
      isAdmin: false,
    };

    axios
      .post("http://localhost:4000/register", postData)
      .then((res) => {
        if (typeof res.data.accessToken !== "undefined") {
          // menyimpan token di localstorage
          localStorage.setItem("cobaAccessToken", res.data.accessToken);

          // menyimpan user di redux store
          const user = jwtDecode(res.data.accessToken);
          axios.get(`http://localhost:4000/users/${user.sub}`).then((res) => {
            dispatch(userSlice.actions.addUser({ userData: res.data }));
            navigate("/");
          });
        }
      })
      .catch((err) => {
        setRegStatus({
          success: false,
          message: "Sorry, something is wrong. Please try again later",
        });
      });
  };

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className="h-screen overflow-hidden font-main">
      <div className="flex flex-row h-full">
        <div className="w-2/3 hidden lg:block h-screen bg-gradient-to-t from-purple3 to-purple3/0">
          <div className="flex flex-col h-screen justify-center z-50 absolute font-bold px-16 text-3xl text-white">
            Second<span>Hand.</span>
          </div>
          <img
            src="/images/login.jpg"
            alt=""
            className="opacity-50 inset-2 bg-cover -translate-y-60"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <div className="container h-screen">
            <div className="flex flex-col gap-4 justify-between lg:justify-center h-full mx-8">
              <Link to="/">
                <TbArrowNarrowLeft className="block my-4 lg:hidden" />
              </Link>
              <div className="flex flex-col gap-2 text-xs w-full justify-center">
                <div className="flex flex-row items-center gap-2 bg-purple4 p-3 w-fit font-semibold text-white rounded-md text-xs">
                  <img
                    src="/images/handshaker.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  SecondHand
                </div>
                <h1 className="font-bold text-lg py-4">Daftar</h1>
                {!regStatus.success && regStatus.message && (
                  <p className="text-sm text-white italic absolute bg-purple4 opacity-50">
                    {regStatus.message}
                  </p>
                )}
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="username">Nama Lengkap</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Nama Lengkap"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl"
                      {...register("user_name", { required: true })}
                      autoComplete="true"
                    />
                    <p className="text-xs text-purple-900">
                      {formState.errors.user_name?.type === "required" &&
                        "Mohon isi nama lengkap Anda"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Contoh: johndee@gmail.com"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl"
                      {...register("user_email", { required: true })}
                      autoComplete="true"
                    />
                    <p className="text-xs text-purple-900">
                      {formState.errors.user_email?.type === "required" &&
                        "Mohon isi email Anda"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <div className="flex flex-row px-4 py-2 border border-solid border-gray-300 rounded-2xl">
                      <input
                        type={passwordShow ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Masukkan Password"
                        className="grow outline-none"
                        {...register("user_password", { required: true })}
                        autoComplete="true"
                      />
                      <div onClick={togglePassword}>
                        {passwordShow ? (
                          <HiOutlineEyeOff className="w-6 h-6 text-gray-400 cursor-pointer" />
                        ) : (
                          <HiOutlineEye className="w-6 h-6 text-gray-400 cursor-pointer" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="px-4 py-3 bg-purple4 rounded-2xl text-white w-full my-4"
                    >
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-xs text-center py-8 lg:py-0">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-purple4 font-bold">
                  Masuk di sini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
