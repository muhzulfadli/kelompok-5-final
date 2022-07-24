import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = ({alertOpen, setAlertOpen}) => {
  return (
    <div
    className={`bg-successAlert rounded-xl fixed top-28 lg:top-32 z-20 w-fit lg:w-[500px] inset-x-1/2 -translate-x-1/2 px-4 lg:px-6 py-2 justify-between flex gap-2 text-white text-sm lg:text-base ${
      alertOpen ? "hidden" : ""
    }`}
  >
    <h2 className="text-white my-auto">
      Harga tawarmu berhasil dikirim ke penjual
    </h2>
    <div
      role="button"
      onClick={() => setAlertOpen(true)}
      className="my-auto"
    >
      <AiOutlineClose />
    </div>
  </div>
  )
}

export default Alert;