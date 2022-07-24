import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Alert from "./Alert";
import Seller from "./Seller";
import AcceptButton from "./AcceptButton";
import StatusButton from "./StatusButton";
import List from "./List";
import axios from "axios";
import data from "../../dummyData"

const Content = ({ alertOpen, setAlertOpen, buttonClick, setIsOpen, isChecked, setStatusOpen }) => {
    
  const navigate = useNavigate();

  // const { idTawar } = useParams()

  // const getTawar = () => {
  //   axios.get(`https://binar-second-hand.herokuapp.com/api/v1/product/offer/${idTawar}`, 
  //   {
  //     headers: {
  //       Authorization: localStorage.getItem("accessToken"),
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

  // useEffect(() => {
  //   getTawar();
  // }, []);

  // const onClickTerima = () => {
  //   axios.put(
  //     `https://binar-second-hand.herokuapp.com/api/v1/product/${idTawar}/offer/1/accept`,
  //     {
  //       agreement: "true",
  //     },
  //     {
  //       headers: {
  //         Authorization: localStorage.getItem("accessToken"),
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log("Berhasil Menyetujui Penawaran");
  //       getTawar();
  //     })
  //     .catch((err) => {
  //       console.log("Ada Kesalahan Dalam Pemrosesan Data");
  //     });
  // };

  // const onClickTolak = () => {
  //   axios.put(
  //     `https://binar-second-hand.herokuapp.com/api/v1/product/${idTawar}/offer/1/accept`,
  //     {
  //       agreement: "false",
  //     },
  //     {
  //       headers: {
  //         Authorization: localStorage.getItem("accessToken"),
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log("Berhasil Menolak Penawaran");
  //       navigate(-1);
  //     })
  //     .catch((err) => {
  //       console.log("Ada Kesalahan Dalam Pemrosesan Data");
  //     });
  // };

  return (
    <div className="relative mt-6 flex justify-center md:mt-10">
      {/* Alert */}
      <Alert alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      {/* Back Button */}
      <div className="hidden md:block md:w-3/5">
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
