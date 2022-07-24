import React, { useState } from "react";
import AcceptModal from "../../Components/Penawaran/AcceptModal";
import StatusModal from "../../Components/Penawaran/StatusModal";
import Content from "../../Components/Penawaran/Content";

const InfoPenawaran = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [buttonClick, setButtonClick] = useState(true);
  const [statusOpen, setStatusOpen] = useState(false);
  const [isChecked, setIsChecked] = useState("");
  const [alertOpen, setAlertOpen] = useState(true);

  return (
    <div>
      {/* Modal terima */}
      <AcceptModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setButtonClick={setButtonClick}
      />
      {/* Modal status */}
      <StatusModal
        statusOpen={statusOpen}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setStatusOpen={setStatusOpen}
        setAlertOpen={setAlertOpen}
      />
      <Content
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
        buttonClick={buttonClick}
        setIsOpen={setIsOpen}
        isChecked={isChecked}
        setStatusOpen={setStatusOpen}
      />
    </div>
  );
};

export default InfoPenawaran;
