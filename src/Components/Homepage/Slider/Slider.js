import React, { Component } from "react";
import Slider from "react-slick";
import "./slide.css";

export default class PauseOnHover extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "180px",
      autoplay: true,
      pauseOnHover: true,
      autoPlaySpeed: 4000,
      cssEase: "linear",
      initialState: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0.32,
            slidesToScroll: 1,
            centerPadding: "200px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 0.31,
            slidesToScroll: 1,
            centerPadding: "140px"
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 0.31,
            slidesToScroll: 1,
            centerPadding: "140px"
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
        </Slider>
      </div>
    );
  }
}


