import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../store/user";
import axios from "axios";
import Form from "../../Components/Register/Form";
import Logo from "../../Components/User/Logo";
import BackButton from "../../Components/Register/BackButton";
import LoginButton from "../../Components/Register/LoginButton";

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
      nama: data.user_name,
    };

    axios
      .post(
        "https://binar-second-hand.herokuapp.com/api/v1/auth/register",
        postData
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "Created") {
          localStorage.setItem('accessToken', res.data.token)
          dispatch(userSlice.actions.addUser({ userData: res.data.data }));
          alert(res.data.message);
          navigate("/");
        }
      })
      .catch((err) => {
        setRegStatus({
          success: false,
          message: "Maaf, Terjadi kesalahan. Silahkan dicoba kembali",
        });
      });
  };

  return (
    <div className="w-full lg:w-1/3">
      <div className="container h-screen">
        <div className="flex flex-col gap-4 justify-between lg:justify-center h-full mx-8">
          <BackButton />
          <div className="flex flex-col gap-2 text-xs w-full justify-center">
            <Logo />
            <h1 className="font-bold text-lg py-4">Daftar</h1>
            {!regStatus.success && regStatus.message && (
              <div className="flex justify-center items-center h-full">
                <p className="text-sm text-white italic absolute text-center rounded-md bg-purple3 p-3">
                  {regStatus.message}
                </p>
              </div>
            )}
            {/* Form */}
            <Form
              handleSubmit={handleSubmit}
              formSubmitHandler={formSubmitHandler}
              register={register}
              formState={formState}
            />
          </div>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Register;