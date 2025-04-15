'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MonthlyPopup = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="px-2">
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">팝업 {item}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MonthlyPopup; 