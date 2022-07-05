import React, { Component } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
            <img className="w-full" src="/images/jamtangan.png" alt="produk" />
          </div>
          <div>
            <img
              className="w-full"
              src="/images/JamtanganBiru.png"
              alt="produk"
            />
          </div>
          <div>
            <img className="w-full" src="/images/jamtangan.png" alt="produk" />
          </div>
          <div>
            <img
              className="w-full"
              src="/images/JamtanganBiru.png"
              alt="produk"
            />
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

function ProductPreview() {
  return (
    <div className="container mx-auto max-w-4xl mt-5">
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <Fade />
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
          <div className="shadow-auto rounded-lg p-5">
            <h2 className="text-base font-medium">Jam Tangan casio</h2>
            <p className="text-sm font-normal text-[#8A8A8A]">aksesoris</p>
            <p className="font-normal text-base">Rp 250.000</p>
            <Link to="/productlist">
              <button className="bg-[#7126B5] w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white">
                Terbitkan
              </button>
            </Link>
            <Link to="/editproduct">
            <button className="bg-[#FFFFFF] w-full py-3 mt-2 rounded-2xl font-medium text-sm border-2 border-[#7126B5] hover:bg-[#7126B5] hover:text-white transition ease-in-out duration-300">
              Edit
            </button>
            </Link>
          </div>
          <div className="col-span-2 mt-5">
            <div className="flex shadow-auto rounded-2xl p-4">
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

export default ProductPreview;