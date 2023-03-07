import React from 'react'
import Slider from 'react-slick';
import "../slickcss/slick.css"
import "../slickcss/slick-theme.css"
import "./carousel.scss"
export default function Carousel() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="carousel_wrapper">
      <Slider {...settings}>
        <div className="carousel_content">
          <h3>1</h3>
        </div>
        <div className="carousel_content">
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
}
