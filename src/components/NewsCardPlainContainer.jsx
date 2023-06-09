import React from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import NewsCardPlain from "./NewsCardPlain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg3 from "../assets/bg3.jpg";

const NewsCardPlainContainer = ({ i, heading, activeArticle }) => {
  return i?.length > 0 ? (
    <>
      <div className="min-h-screen justify-center items-center flex">
        <img
          src={bg3}
          alt="NewsFlash"
          className="absolute inset-0 w-full h-full z-0 "
          style={{ position: "fixed" }}
        />
        <div className="z-10">
          <h1 className="font-maven text-3xl text-white fond-bold p-6 pt-8">
            {heading}
          </h1>

          <div className="px-4 pb-12 justify-center items-center grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {i.map((news1, index) => (
              <NewsCardPlain
                news1={news1}
                index={index}
                activeArticle={activeArticle}
                key={uuidv4()}
                className="w-1/4"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default NewsCardPlainContainer;
