import React from "react";

const AcceptButton = ({setIsOpen}) => {
  return (
    <div class="flex w-full space-x-4 md:w-3/5">
      <div class="w-1/2 rounded-2xl border border-purple4 bg-neutral1 hover:bg-purple4 px-6 py-2 text-purple5 hover:text-neutral1 hover:transition-all text-center cursor-pointer">
        Tolak
      </div>
      <div
        onClick={() => setIsOpen(true)}
        class="w-1/2 rounded-2xl border border-purple4 bg-neutral1 hover:bg-purple4 px-6 py-2 text-center text-purple5 hover:text-neutral1 hover:transition-all cursor-pointer"
      >
        Terima
      </div>
    </div>
  );
};

export default AcceptButton;
