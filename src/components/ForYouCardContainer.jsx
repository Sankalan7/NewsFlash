import React, { useState } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import NewsCardPlain from "./NewsCardPlain";
import ForYouCard from "./ForYouCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ForYouCardContainer = ({
  categoriesNews,
  categoriesDefault,
  sourcesNews,
  sourcesDefault,
  countriesNews,
  countriesDefault,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };

  return categoriesNews?.length > 0 &&
    sourcesNews?.length > 0 &&
    countriesNews?.length > 0 ? (
    <>
      {show && (
        <div className="container mx-auto w-full py-4 flex flex-col justify-center bg-blue-950">
          <div className="px-6 text-3xl text-white font-yanone flex flex-row justify-between">
            <div>
              <span>This page is based on your</span>
              <NavLink exact={true} to="/preferences">
                <span className="text-blue-500 underline ml-2">
                  preferences
                </span>
              </NavLink>
            </div>
            <button onClick={toggleShow}>
              <span>
                Close
                <FontAwesomeIcon
                  icon={faTimes}
                  border
                  className="ml-4 text-xl"
                />
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-row bg-gray-800">
        <h1 className="font-maven text-3xl text-white font-bold p-12 pr-4">
          News by Categories
        </h1>
        {categoriesDefault && (
          <NavLink exact="true" to="/preferences">
            <button
              title="Set categories you like to see in preferences"
              className="font-maven text-xl text-[#FFD700] bg-gray-800 p-12 pl-4 mt-1"
            >
              DEFAULT
            </button>
          </NavLink>
        )}
      </div>
      <div className="bg-gradient-to-r from-[#402565] to-[#30BE96] py-6">
        <div className="items-center px-16 pb-12">
          <Slider {...settings}>
            {categoriesNews.map((news1, index) => (
              <ForYouCard
                news1={news1}
                index={index}
                key={uuidv4()}
                className="w-1/4"
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-row bg-gray-800">
        <h1 className="font-maven text-3xl text-white font-bold p-12 pr-4">
          News by Sources
        </h1>
        {sourcesDefault && (
          <NavLink exact="true" to="/preferences">
            <button
              title="Set sources you like to see in preferences"
              className="font-maven text-xl text-[#FFD700] bg-gray-800 p-12 pl-4 mt-1"
            >
              DEFAULT
            </button>
          </NavLink>
        )}
      </div>
      <div className="bg-gradient-to-r from-[#402565] to-[#30BE96] py-6">
        <div className="items-center px-16 pb-12">
          <Slider {...settings}>
            {sourcesNews.map((news1, index) => (
              <ForYouCard
                news1={news1}
                index={index}
                key={uuidv4()}
                className="w-1/4"
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-row bg-gray-800">
        <h1 className="font-maven text-3xl text-white font-bold p-12 pr-4">
          News by Countries
        </h1>
        {countriesDefault && (
          <NavLink exact="true" to="/preferences">
            <button
              title="Set countries you like to see in preferences"
              className="font-maven text-xl text-[#FFD700] bg-gray-800 p-12 pl-4 mt-1"
            >
              DEFAULT
            </button>
          </NavLink>
        )}
      </div>
      <div className="bg-gradient-to-r from-[#402565] to-[#30BE96] py-6">
        <div className="items-center px-16 pb-12">
          <Slider {...settings}>
            {countriesNews.map((news1, index) => (
              <ForYouCard
                news1={news1}
                index={index}
                key={uuidv4()}
                className="w-1/4"
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default ForYouCardContainer;
