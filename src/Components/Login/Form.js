import React, { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const LoginForm = ({
  handleSubmit,
  formSubmitHandler,
  register,
  formState
}) => {

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
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
      <p className="text-xs text-purple-900">
        {formState.errors.user_password?.type === "required" &&
          "Mohon isi password Anda"}
      </p>
      <div>
        <button
          type="submit"
          className="px-4 py-3 text-white disabled:bg-purple3 bg-purple4 hover:bg-purple5 rounded-2xl w-full my-4 transition ease-in-out duration-300"
        >
          Masuk
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
