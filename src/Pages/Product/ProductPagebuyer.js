import React, { Component, useState } from "react";
import Alert from "../../Components/Buyer/Alert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai";
import ModalTawar from "../../Components/Buyer/ModalTawar";

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

const ProductPagebuyer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [buttonClick, setButtonClick] = useState(true);

  return (
    <>
    {/* modal */}
    <ModalTawar isOpen={isOpen} setIsOpen={setIsOpen} setAlertOpen={setAlertOpen} setButtonClick={setButtonClick} />
    
    {/* alert */}
    <Alert setAlertOpen={setAlertOpen} alertOpen={alertOpen} />

    <div className="container mx-auto w-full lg:max-w-4xl md:py-5">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="col-span-3">
          <Fade />
          {/* responsive */}
          <div className="container mx-auto max-w-4xl mt-3 -translate-y-12">
            <div className="shadow-auto rounded-lg p-4 bg-white text-base font-medium h-28 mx-4 px-3 md:hidden">
              <h2 className="text-base font-medium">Jam Tangan casio</h2>
              <p className="text-sm font-normal text-neutral3">aksesoris</p>
              <p className="font-normal text-base">Rp 250.000</p>
            </div>
          </div>
          {/* responsive penjual */}
          <div className="container mx-auto max-w-4xl mt-3 -translate-y-11">
            <div className="flex md:hidden shadow-auto rounded-lg bg-white p-4 text-base font-medium  mx-4 px-3">
              <img className="w-12" src="/images/picprofile.png" alt="" />
              <div className="ml-4">
                <h1 className="font-medium text-sm">Nama Penjual</h1>
                <h1 className="text-sm font-normal text-neutral3">kota</h1>
              </div>
            </div>
          </div>
            <div className="flex justify-center lg:hidden items-center w-full right">
              {buttonClick ? (<button
                onClick={() => setIsOpen(true)}
                className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg shadow-purple4 text-neutral1 bg-purple4 focus:outline-none focus:ring-purple2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2 dark:bg-purple4 dark:hover:bg-purple5 dark:focus:ring-purple4"
              >
                <span className="w-full">Saya tertarik dan ingin nego</span>
              </button>
              ) : (
                <button
                onClick={() => setIsOpen(true)}
                className="fixed left-46 w-[77%] bottom-6 z-20 shadow-lg text-neutral1 bg-neutral2 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mx-auto lg:mr-2"
              >
                <span className="w-full">Saya tertarik dan ingin nego</span>
              </button>
              )}
            </div>

          <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
            <div className="col-span-3">
              <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
                <h2>Deskripsi</h2>
                <h1 className="py-2 text-neutral3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium quos eius quis odio itaque, officia consequuntur
                  dolor, ullam recusandae modi error quas similique
                  reprehenderit perferendis minus hic. Ducimus illo cumque
                  numquam voluptatem nulla doloribus ad nobis id hic eius rerum
                  quisquam, aliquam, quidem sequi. Corporis quaerat nulla
                  asperiores fugiat vero.
                </h1>

                <h1 className="py-2 text-neutral3">
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
            <p className="text-sm font-normal text-neutral3">aksesoris</p>
            <p className="font-normal text-base">Rp 250.000</p>

            {/* modal button */}
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
                className="bg-neutral2 w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white"
                id="tertarik-btn"
              >
                Menunggu respon penjual
              </button>
            )}

          </div>
          {/* modal button end */}

          <div className="col-span-2 mt-5">
            <div className="md:flex hidden shadow-auto rounded-2xl p-4">
              <img className="w-12" src="/images/picprofile.png" alt="" />
              <div className="ml-4">
                <h1 className="font-medium text-sm">Nama Penjual</h1>
                <h1 className="text-sm font-normal text-neutral3">kota</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductPagebuyer;