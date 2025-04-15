'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="h-96 bg-gray-100 flex items-center justify-center">
          <p className="text-2xl text-gray-500">슬라이드 1</p>
        </div>
        <div className="h-96 bg-gray-200 flex items-center justify-center">
          <p className="text-2xl text-gray-500">슬라이드 2</p>
        </div>
        <div className="h-96 bg-gray-300 flex items-center justify-center">
          <p className="text-2xl text-gray-500">슬라이드 3</p>
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow; 