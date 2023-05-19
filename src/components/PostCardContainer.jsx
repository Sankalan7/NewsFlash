import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCardBasic from "./NewsCardBasic";
import PostCard from "./PostCard";

const PostCardContainer = ({ i, heading }) => {
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

  return (
    <>
      {i?.length > 0 ? (
        <div className="min-h-screen justify-center flex">
          <div className="justify-center items-center font-maven text-3xl py-12 p-12 text-white font-bold w-full">
            <h1 className="text-white font-yanone mb-12 text-7xl">{heading}</h1>

            {/* <Slider {...settings}> */}
            {i.map((post) => (
              <div key={uuidv4()}>
                <PostCard post={post} />
              </div>
            ))}
            {/* </Slider> */}
          </div>
        </div>
      ) : (
        <div className="min-h-screen justify-center items-center flex">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Wow, so empty! :(
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCardContainer;
