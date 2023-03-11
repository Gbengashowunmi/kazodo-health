import React from 'react'
import Slider from 'react-slick';
import "../slick/slick.css"
import "../slick/slick-theme.css"
import "./carousel.scss"
export default function Carousel() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        fade: true,
      };
  return (
      <Slider {...settings}>
        <div className="carousel_item">
          <img
            src="/images/kazodo-products/Clearance.jpg_Hkk2GuGy2.jpg"
            alt="carousel"
          />
        </div>
        <div className="carousel_item">
          <img
            src="/images/kazodo-products/Beauty.jpg_B1Rsz_G1n.jpg"
            alt="carousel"
          />
        </div>
        <div className="carousel_item">
          <img
            src="/images/kazodo-products/Beauty.jpg_B1Rsz_G1n.jpg"
            alt="carousel"
          />
        </div>
        <div className="carousel_item">
          <img
            src="/images/kazodo-products/Beauty.jpg_B1Rsz_G1n.jpg"
            alt="carousel"
          />
        </div>
        <div className="carousel_item">
          <img
            src="/images/kazodo-products/Beauty.jpg_B1Rsz_G1n.jpg"
            alt="carousel"
          />
        </div>
      </Slider>
      
  );
}
