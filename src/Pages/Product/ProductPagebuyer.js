import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai";

export class Fade extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="relative overflow-hidden">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
        </Slider>
        <div className="btn-carousel hidden md:block absolute left-3 top-[45%] ">
          <button className=" rounded-full " onClick={this.previous}>
            <img
              className="rotate-180"
              src="/images/carousel-btn.png"
              alt="btn-carousel"
            />
          </button>
        </div>
        <div className="btn-carousel hidden md:block absolute right-3 top-[45%] ">
          <button className=" rounded-full " onClick={this.next}>
            <img src="/images/carousel-btn.png" alt="btn-carousel" />
          </button>
        </div>
      </div>
    );
  }
}

function ProductPagebuyer() {

  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [buttonClick, setButtonClick] = useState(true);
  return (
    <div className="container mx-auto w-full lg:max-w-4xl md:py-5">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="col-span-3">
          <Fade></Fade>
          {/* responsive */}
          <div className="container mx-auto max-w-4xl mt-3 -translate-y-12">
            <div className="shadow-auto rounded-lg p-4 bg-white text-base font-medium h-28 mx-4 px-3 md:hidden">
              <h2 className="text-base font-medium">Jam Tangan casio</h2>
              <p className="text-sm font-normal text-[#8A8A8A]">aksesoris</p>
              <p className="font-normal text-base">Rp 250.000</p>
            </div>
          </div>
          {/* responsive penjual */}
          <div className="container mx-auto max-w-4xl mt-3 -translate-y-11">
            <div className="flex md:hidden shadow-auto rounded-lg bg-white p-4 text-base font-medium  mx-4 px-3">
              <img className="w-12" src="/images/picprofile.png" alt="" />
              <div className="ml-4">
                <h1 className="font-medium text-sm">Nama Penjual</h1>
                <h1 className="text-sm font-normal text-[#8A8A8A]">kota</h1>
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-4xl mt-5">
            <div className="col-span-3">
              <div className="shadow-auto rounded-lg p-4 ">
                <h2>Deskripsi</h2>
                <h1 className="py-2 text-[#8A8A8A]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quos eius quis odio itaque, officia consequuntur
                  dolor, ullam recusandae modi error quas similique
                  reprehenderit perferendis minus hic. Ducimus illo cumque
                  numquam voluptatem nulla doloribus ad nobis id hic eius rerum
                  quisquam, aliquam, quidem sequi. Corporis quaerat nulla
                  asperiores fugiat vero.
                </h1>

                <h1 className="py-2 text-[#8A8A8A]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quos eius quis odio itaque, officia consequuntur
                  dolor, ullam recusandae modi error quas similique
                  reprehenderit perferendis minus hic. Ducimus illo cumque
                  numquam voluptatem nulla doloribus ad nobis id hic eius rerum
                  quisquam, aliquam, quidem sequi. Corporis quaerat nulla
                  asperiores fugiat vero.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="shadow-auto rounded-lg p-5 md:block hidden">
            <h2 className="text-base font-medium">Jam Tangan casio</h2>
            <p className="text-sm font-normal text-[#8A8A8A]">aksesoris</p>
            <p className="font-normal text-base">Rp 250.000</p>
            {/* modals */}
            {buttonClick ? (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-purple4 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white"
                id="tertarik-btn"
              >
                Saya tertarik dan ingin nego
              </button>
            ) : (
              <button
                className="bg-[#D0D0D0] w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white"
                id="tertarik-btn"
              >
                Menunggu respon penjual
              </button>
            )}
            {/* alert */}
            <div
              className={`bg-[#73CA5C] rounded-xl fixed top-32 w-[500px] inset-x-1/2 -translate-x-1/2 px-6 py-2 justify-between flex text-white ${
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

            <div
              className={`bg-black bg-opacity-50 absolute top-0 left-0 inset-0 ${
                isOpen ? "flex" : "hidden"
              } justify-center items-center z-50`}
              id="overlay"
            >
              <div className="bg-white rounded-2xl">
                <div className="flex justify-end items-center pr-4 pt-3">
                  <button onClick={() => setIsOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="close-modal"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <h4 className="text-base font-medium ml-2 pt-5 px-6">
                    Masukan Harga Tawarmu
                  </h4>
                </div>
                <div className="w-[350px] px-6">
                  <p className="ml-2 pt-2 text-gray-500 ">
                    Harga tawaranmu akan diketahui penjual, jika penjual cocok
                    kamu akan segera dihubungi penjual.
                  </p>
                </div>
                <div className="col-span-2 pt-1 p-6">
                  <div className="flex shadow-auto rounded-2xl p-3 bg-[#b8b7b776]">
                    <img
                      className="w-14 rounded-xl"
                      src="/images/picprofile.png"
                      alt=""
                    />
                    <div className="ml-4">
                      <h1 className="font-medium text-sm">Jam Tangan Casio</h1>
                      <h1 className="text-sm font-normal ">Rp 250.000</h1>
                    </div>
                  </div>
                  <div className="pt-5 ml-2">
                    <h1>Harga Tawar</h1>
                  </div>
                  <div>
                    <div className="col-span-2 pt-1 py-3 px-2 ">
                      <div className="flex shadow-auto rounded-2xl py-4 bg-[#fffcfc]">
                        <input
                          className="pl-3 focus:outline-none"
                          required
                          defaultValue="Rp 0,00"
                          variant="filled"
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
                    className="bg-purple4 w-full py-3 mt-5 rounded-2xl font-medium text-sm text-white"
                    id="tertarik-btn"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* modals end */}
          <div className="col-span-2 mt-5">
            <div className="md:flex hidden shadow-auto rounded-2xl p-4">
              <img className="w-12" src="/images/picprofile.png" alt="" />
              <div className="ml-4">
                <h1 className="font-medium text-sm">Nama Penjual</h1>
                <h1 className="text-sm font-normal text-[#8A8A8A]">kota</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPagebuyer;