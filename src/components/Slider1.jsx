import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const images = [
  "/images/duerow_img_1.png",
  "/images/duerow_img_2.png",
  "/images/duerow_img_3.png",
  "/images/duerow_img_4.png",
];

// Custom Arrows with better styling
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full z-10 hover:bg-opacity-100 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <GrPrevious size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full z-10 hover:bg-opacity-100 transition-all duration-300 cursor-pointer shadow-lg hover:scale-110"
    onClick={onClick}
    aria-label="Next slide"
  >
    <GrNext size={24} />
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
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="w-full h-[82vh] max-h-[800px] relative overflow-hidden shadow-xl">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <div
              className="w-full h-[82vh] max-h-[800px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider1;
