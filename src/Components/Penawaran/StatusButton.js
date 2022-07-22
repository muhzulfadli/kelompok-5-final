import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const StatusButton = ({ isChecked, setStatusOpen }) => {
  return (
    <div class={`${isChecked ? "hidden" : "flex"} w-full space-x-4 md:w-3/5`}>
      <button
        onClick={() => setStatusOpen(true)}
        class="w-1/2 rounded-2xl border border-purple4 bg-neutral1 hover:bg-purple4 px-6 py-2 text-center text-purple5 hover:text-neutral1"
      >
        Status
      </button>
      <button class="w-1/2 rounded-2xl border border-purple4 bg-neutral1 hover:bg-purple4 px-auto py-2 flex items-center justify-center gap-2 text-purple5 hover:text-neutral1">
        <p>Hubungi di</p>
        <IoLogoWhatsapp />
      </button>
    </div>
  );
};

export default StatusButton;
