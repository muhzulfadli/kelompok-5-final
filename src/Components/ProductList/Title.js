import React from "react";

const Title = () => {
  return (
    <div className="flex items-center title text-xl font-bold py-4">
      <h1 className="hidden lg:block my-2 lg:w-full lg:text-left">
        Daftar Jual Saya
      </h1>
      <h1 className="text-right w-1/2 absolute lg:hidden top-8 left-16 z-50 ml-6">
        Daftar Jual Saya
      </h1>
    </div>
  );
};

export default Title;
