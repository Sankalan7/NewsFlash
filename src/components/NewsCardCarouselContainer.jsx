import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const NewsCardCarouselContainer = ({ i, heading }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div
        className="font-maven text-3xl pt-8 text-white fond-bold px-12"
        data-aos="fade-up"
      >
        <h1>{heading}</h1>

        <Slider {...settings}>
          {i.map((news1) => (
            <div key={uuidv4()} className="w-1/4">
              <NewsCard news1={news1} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default NewsCardCarouselContainer;
