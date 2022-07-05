import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../store/user";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi";

const Login = () => {

  const { register, handleSubmit, formState } = useForm();
  const [regStatus, setRegStatus] = useState({
    success: false,
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (data) => {
    const postData = {
      email: data.user_email,
      password: data.user_password,
      isAdmin: false,
    };

    axios
      .post("http://localhost:4000/login", postData)
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
          message: "Maaf, Email atau Password Anda Salah",
        });
      });
  };

  return (
    <div className="h-screen overflow-hidden font-main">
      <div className="flex flex-row h-full">
        <div className="w-2/3 hidden lg:block h-screen bg-gradient-to-t from-purple3 to-purple3/0 ">
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
            <div className="flex flex-col gap-4 justify-center h-full mx-8">
              <Link to="/"><TbArrowNarrowLeft className="my-4 block lg:hidden" /></Link>
              <div className="flex flex-col grow lg:grow-0 gap-2 text-xs w-full justify-center">
                <Link to="/">
                <div className="flex flex-row items-center gap-2 bg-purple4 p-3 w-fit font-semibold text-white rounded-md text-xs">
                  <img
                    src="/images/handshaker.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                  SecondHand
                </div>
                </Link>
                <h1 className="font-bold text-lg py-4">Masuk</h1>
                { ( !regStatus.success && regStatus.message ) && <p className="text-sm text-purple4 italic">{regStatus.message}</p> }
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Contoh: johndee@gmail.com"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
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
                    <div className="flex flex-row px-4 py-2 border border-solid border-gray-300 rounded-2xl outline-purple4">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Masukkan Password"
                        className="grow outline-none"
                        {...register("user_password", { required: true })}
                        autoComplete="true"
                      />
                      <HiOutlineEye className="w-6 h-6 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                  <p className="text-xs text-purple-900">
                    {formState.errors.user_password?.type === "required" &&
                      "Mohon isi password Anda"}
                  </p>
                  <div>
                    <button type='submit' className="px-4 py-3 text-white disabled:bg-purple3 bg-purple4 rounded-2xl w-full my-4">
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-xs text-center py-8 lg:py-0">
                Belum punya akun?{" "}
                <Link to="/register" className="text-purple4 font-bold">
                  Daftar di sini
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;