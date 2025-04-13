import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Slider1.css";

const images = [
  "https://dublinpaint.com/images/slides/1.jpg",
  "https://dublinpaint.com/images/slides/4.jpg",
  "https://dublinpaint.com/images/slides/6.jpg",
  "https://dublinpaint.com/images/slides/3.jpg",
];

// Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-opacity-80 transition cursor-pointer"
    onClick={onClick}
  >
    <GrPrevious size={20} className="sm:size-6" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-opacity-80 transition cursor-pointer"
    onClick={onClick}
  >
    <GrNext size={20} className="sm:size-6" />
  </button>
);

const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
  };

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen relative overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
