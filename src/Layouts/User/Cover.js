import React from "react";

const Cover = () => {
  return (
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
  );
};

export default Cover;
