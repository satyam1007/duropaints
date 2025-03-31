// src/components/Slider2.jsx
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { GiJerusalemCross } from "react-icons/gi";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdRecycling } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { LuPaintBucket } from "react-icons/lu";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black bg-white rounded-full p-2 shadow-lg z-10 opacity-80 cursor-pointer"
    onClick={onClick}
  >
    <span className="text-2xl">
      <GrPrevious />
    </span>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black bg-white rounded-full p-2 shadow-lg z-10 opacity-80 cursor-pointer"
    onClick={onClick}
  >
    <span className="text-2xl">
      <GrNext />
    </span>
  </button>
);

const Slider2 = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 768 ? 1 : 4, // Show 1 image on mobile, 3 images on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  });

  useEffect(() => {
    const handleResize = () => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: window.innerWidth < 768 ? 1 : 4,
      }));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px]">
      <div className="relative">
        <div className="mb-[30px] text-center">
          <span className="lg:text-3xl text-2xl font-bold font-[cursive] text-[#41a4c3]">
            What We Do
          </span>
          <h2 className="lg:text-4xl text-2xl font-bold text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#41a4c3]">
            Our Services
          </h2>
        </div>
      </div>
      <Slider {...settings}>
        {[
          {
            id: 1,
            imgSrc: "/images/paint-benefits.jpg",
            icon: <MdHealthAndSafety />,
            name: "Contractors Benefits",
          },
          {
            id: 2,
            imgSrc: "/images/paint-distribution.jpg",
            icon: <GiJerusalemCross />,
            name: "Paint Distribution/Wholesale",
          },
          {
            id: 3,
            imgSrc: "/images/paint-private-jobs.avif",
            icon: <RiGitRepositoryPrivateFill />,
            name: "Private Label Jobs",
          },
          {
            id: 4,
            imgSrc: "/images/paint-recycling.jpg",
            icon: <MdRecycling />,
            name: "Paint Recycling",
          },
          {
            id: 5,
            imgSrc: "/images/paint-store.webp",
            icon: <FaStore />,
            name: "Store Franchisee",
          },
          {
            id: 6,
            imgSrc: "/images/paint-supply.jpg",
            icon: <LuPaintBucket />,
            name: "Bulk Paint Supply",
          },
        ].map(({ id, imgSrc, icon, name }) => (
          <div
            key={id}
            className="overflow-hidden relative p-0 group"
            style={{ width: "100%", display: "inline-block" }}
          >
            {/* Image Wrapper with Hover Effect */}
            <div className="expert-img relative lg:w-80 lg:h-80 h-96 lg:px-4 px-0 overflow-hidden rounded shadow-md">
              <img
                alt={name}
                src={imgSrc}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out lg:group-hover:scale-110 group-hover:scale-0"
                style={{ color: "transparent" }}
              />
            </div>

            {/* Info Box */}
            <div className="relative text-center mt-[-40px] bg-[#f5f5f5] transform lg:translate-y-[40px] translate-y-[-40px] transition ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-[#fff] py-4">
              <div className="flex justify-center items-center gap-2 flex-col">
                <span className="text-[#41a4c3] lg:text-[50px] text-[35px]">
                  {icon}
                </span>
                <h3 className="text-[20px] col:text-[20px] font-medium font-heading-font">
                  <a className="text-[#282e3f] transition-all">{name}</a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
