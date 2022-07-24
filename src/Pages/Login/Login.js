import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../store/user";
import axios from "axios";
import Form from "../../Components/Login/Form";
import BackButton from "../../Components/Login/BackButton";
import Logo from "../../Components/User/Logo";
import RegisterButton from "../../Components/Login/RegisterButton";

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
    };

    axios
      .post(
        "https://binar-second-hand.herokuapp.com/api/v1/auth/login",
        postData
      )
      .then((res) => {
        console.log(res);
        if (typeof res.data.token !== "undefined") {
          localStorage.setItem('accessToken', res.data.token)
          dispatch(userSlice.actions.addUser({ userData: res.data.data }));
          alert(res.data.message);
          navigate("/");
        }
      })
      .catch((err) => {
        setRegStatus({
          success: false,
          message: "Maaf, Email atau Password Anda Salah",
        });
      });
  };

  const user = useSelector((store) => store.user.data);

  return (
    <div className="w-full lg:w-1/3">
      <div className="container h-screen">
        <div className="flex flex-col gap-4 justify-center h-full mx-8">
          <BackButton user={user} />
          <div className="flex flex-col grow lg:grow-0 gap-2 text-xs w-full justify-center">
            <Logo />
            <h1 className="font-bold text-lg py-4">Masuk</h1>
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
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default Login;