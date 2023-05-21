import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCardBasic from "./NewsCardBasic";
import Aos from "aos";
import "aos/dist/aos.css";

const NewsCardVerticalCarouselContainer = ({ i, heading }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return i?.length > 0 ? (
    <>
      <div className="min-h-screen justify-center items-center flex">
        <div
          className="justify-center items-center font-maven text-3xl py-12 p-12 text-white fond-bold bg-gradient-to-r from-green-400 via-yellow-500 to-red-500
"
        >
          <h1 className="text-white font-yanone mb-12 text-7xl">{heading}</h1>

          <Slider {...settings}>
            {i.map((news1) => (
              <div key={uuidv4()} className="w-1/4">
                <NewsCardBasic news1={news1} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default NewsCardVerticalCarouselContainer;
