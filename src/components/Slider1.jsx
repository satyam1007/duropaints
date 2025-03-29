import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Slider1.css";

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute border-2 border-[#41a4c3] top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 shadow-lg z-10 opacity-50 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-2xl">
        <GrPrevious />
      </span>
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute border-2 border-[#41a4c3] top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 shadow-lg z-10 opacity-50 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-2xl">
        <GrNext />
      </span>
    </button>
  );
};

function Slider1() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className="home-slider">
      <div className="swiper-wrapper h-full w-full block">
        <div className="slide-inner bg-no-repeat bg-cover bg-center slide-bg-image bg-[url('https://www.dartdesign.in/images/portfolio/berger-paints.webp')] h-[400px] lg:h-[800px] col:h-[450px]">
          <div className="slide relative h-full bg-cover z-10 after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:opacity-70 after:z-10">
            <div className="wraper max-w-[1200px] mx-auto">
              <div className="slide-caption w-[700px] mt-[90px] lg:mt-[210px] lg:ml-[30px] ml-[10px] col:mt-[100px] absolute top-0 z-20">
                <p className="bg-[#0d1b2a] opacity-75 p-2 rounded text-[#F5F5F5] lg:text-[20px] text-[12px] text-wrap lg:w-full md:w-full w-[320px] font-bold col:text-[18px]">
                  Transforming Spaces with Premium Paints & Expert Solutions
                </p>
                <h2 className="bg-[#0d1b2a] opacity-75 p-2 rounded text-[#F5F5F5] lg:text-[45px] md:text-[30px] text-[18px] lg:leading-[75px] leading-[24px] col:text-[25px] col:leading-[35px] font-normal lg:my-[33px] my-[16px] lg:w-full md:w-full w-[320px]">
                  <span>Give Your Home & Office</span> <br />
                  <span>a Vibrant New Look!</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a
                      className="bg-[#41a4c3] relative cursor-pointer rounded text-[15px] font-semibold text-white px-[18px] py-[8px] lg:px-[38px] lg:py-[12px] lg:text-[16px] lg:inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#31839d] col:mb-[5px] col:mt-[15px] before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px] before:top-[50%] before:bg-white before:transform before:translate-y-[-50%] before:transition-all hover:before:left-[-95px] lg:before:block before:hidden"
                      href="/contact"
                    >
                      Get a Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-wrapper h-full w-full block">
        <div className="slide-inner bg-no-repeat bg-cover bg-center slide-bg-image bg-[url('https://www.dartdesign.in/images/portfolio/bergerpaints7.webp')] h-[400px] lg:h-[800px] col:h-[450px]">
          <div className="slide relative h-full bg-cover z-10 after:absolute after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:opacity-70 after:z-10">
            <div className="wraper max-w-[1200px] mx-auto">
              <div className="slide-caption w-[700px] mt-[90px] lg:mt-[210px] lg:ml-[30px] ml-[10px] col:mt-[100px] absolute top-0 z-20">
                <p className="bg-[#0d1b2a] opacity-75 p-2 rounded text-[#F5F5F5] lg:text-[20px] text-[12px] text-wrap lg:w-full md:w-full w-[320px] font-bold col:text-[18px]">
                  Transforming Spaces with Premium Paints & Expert Solutions
                </p>
                <h2 className="bg-[#0d1b2a] opacity-75 p-2 rounded text-[#F5F5F5] lg:text-[45px] md:text-[30px] text-[18px] lg:leading-[75px] leading-[24px] col:text-[25px] col:leading-[35px] font-normal lg:my-[33px] my-[16px] lg:w-full md:w-full w-[320px]">
                  <span>Give Your Home & Office</span> <br />
                  <span>a Vibrant New Look!</span>
                </h2>
                <div className="btns">
                  <div className="btn-style">
                    <a
                      className="bg-[#41a4c3] relative cursor-pointer rounded text-[15px] font-semibold text-white px-[18px] py-[8px] lg:px-[38px] lg:py-[12px] lg:text-[16px] lg:inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#31839d] col:mb-[5px] col:mt-[15px] before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px] before:top-[50%] before:bg-white before:transform before:translate-y-[-50%] before:transition-all hover:before:left-[-95px] lg:before:block before:hidden"
                      href="/contact"
                    >
                      Get a Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Slider1;
