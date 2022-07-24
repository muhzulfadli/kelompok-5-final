import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = ({ alertOpen, setAlertOpen }) => {
  return (
    <div
      className={`bg-[#73CA5C] rounded-xl fixed top-32 w-[500px] inset-x-1/2 -translate-x-1/2 px-6 py-2 justify-between flex text-neutral1 hover:transition-all ${
        alertOpen ? "hidden" : ""
      }`}
    >
      <h2 className="text-neutral1 hover:transition-all my-auto text-sm">
        Status produk berhasil diperbarui
      </h2>
      <div role="button" onClick={() => setAlertOpen(true)} className="my-auto">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Alert;
