import React from "react";

const ModalInput = ({ submitHandler, hargaTawar, setAlertOpen, setIsOpen, setButtonClick }) => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="col-span-2 pt-1 py-3 px-2 ">
          <div className="flex shadow-auto rounded-2xl py-4 bg-[#fffcfc]">
            <input
              type="number"
              className="pl-3 focus:outline-none"
              required
              placeholder="Rp 0,00"
              ref={hargaTawar}
              data-testid="input-price"
            ></input>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setAlertOpen(false);
          setIsOpen(false);
          setButtonClick(false);
        }}
        className="bg-purple4 hover:bg-purple5 w-full py-3 mt-5 rounded-2xl font-medium text-sm text-white transition ease-in-out duration-300"
        id="tertarik-btn"
      >
        Kirim
      </button>
    </form>
  );
};

export default ModalInput;
