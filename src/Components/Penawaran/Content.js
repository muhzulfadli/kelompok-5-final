import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Alert from "./Alert";
import Seller from "./Seller";
import AcceptButton from "./AcceptButton";
import StatusButton from "./StatusButton";
import List from "./List";

const Content = ({ alertOpen, setAlertOpen, buttonClick, setIsOpen, isChecked, setStatusOpen }) => {
    
  const navigate = useNavigate();

  return (
    <div class="relative mt-6 flex justify-center md:mt-10">
      {/* Alert */}
      <Alert alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      {/* Back Button */}
      <div class="hidden md:block md:w-3/5">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <FiArrowLeft className="text-2xl" />
        </button>
      </div>
      <div className="absolute inset-0 inset-y-auto -z-10 mx-auto w-11/12 md:flex md:w-full md:justify-center">
        <div className="md:w-2/5">
          <div className="space-y-4">
            {/* Seller Information */}
            <Seller />
            <div className="font-medium">Daftar Produkmu yang Ditawar</div>
            <div class="space-y-4">
              <List />
              <div class="space-y-4 md:divide-y">
                <div class="flex justify-end">
                  {buttonClick ? (
                    <AcceptButton setIsOpen={setIsOpen} />
                  ) : (
                    <StatusButton isChecked={isChecked} setStatusOpen={setStatusOpen} />
                  )}
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
