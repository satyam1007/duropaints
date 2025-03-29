// src/components/Slider2.jsx
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
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
          <span className="lg:text-[30px] text-[20px] font-bold font-[cursive] text-[#41a4c3]">
            What We Do
          </span>
          <h2 className="lg:text-[40px] text-[30px] font-bold text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#41a4c3]">
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
            para: "",
          },
          {
            id: 2,
            imgSrc: "/images/paint-distribution.jpg",
            icon: <GiJerusalemCross />,
            name: "Paint Distribution/Wholesale",
            para: "",
          },
          {
            id: 3,
            imgSrc: "/images/paint-private-jobs.avif",
            icon: <RiGitRepositoryPrivateFill />,
            name: "Private Label Jobs",
            para: "",
          },
          {
            id: 4,
            imgSrc: "/images/paint-recycling.jpg",
            icon: <MdRecycling />,
            name: "Paint Recycling",
            para: "",
          },
          {
            id: 5,
            imgSrc: "/images/paint-store.webp",
            icon: <FaStore />,
            name: "Store Franchisee",
            para: "",
          },
          {
            id: 6,
            imgSrc: "/images/paint-supply.jpg",
            icon: <LuPaintBucket />,
            name: "Bulk Paint Supply",
            para: "",
          },
        ].map(({ id, imgSrc, icon, name, para }) => (
          <div
            key={id}
            className="overflow-hidden relative p-0 group"
            style={{ width: "100%", display: "inline-block" }}
          >
            {/* Image Wrapper with Hover Effect */}
            <div className="expert-img relative lg:w-80 h-80 lg:px-4 px-0 overflow-hidden rounded shadow-md">
              <img
                alt={name}
                src={imgSrc}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ color: "transparent" }}
              />
            </div>

            {/* Info Box */}
            <div className="relative text-center mt-[-40px] bg-[#f5f5f5] transform translate-y-[40px] transition ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-[#fff] py-4">
              <div className="flex justify-center items-center gap-2 flex-col">
                <span className="text-[#41a4c3] lg:text-[50px] text-[35px]">
                  {icon}
                </span>
                <h3 className="text-[20px] col:text-[20px] font-medium font-heading-font">
                  <a
                    className="text-[#282e3f] hover:text-[#ada282] transition-all"
                    href="/attorneys-single/Darcy-Alec"
                  >
                    {name}
                  </a>
                </h3>
                <p className="text-gray-600 text-[16px] lg:text-[18px] text-center leading-relaxed">
                  {para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider2;
