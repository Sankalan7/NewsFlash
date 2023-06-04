import React from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";
import bg2 from "../assets/bg2.jpg";

const NewsCardContainer = ({ i, heading }) => {
  return i?.length > 0 ? (
    <>
      <div className="min-h-screen justify-center items-center flex">
        <img
          src={bg2}
          alt="NewsFlash"
          className="absolute inset-0 w-full h-full z-0 "
          style={{ position: "fixed" }}
        />
        <div className="z-10 justify-center items-center font-maven text-3xl py-12 p-12 text-white font-bold">
          <h1 className="font-maven text-3xl text-white fond-bold p-6">
            {heading}
          </h1>
          <div className="max-w-[100.5vw] h-full justify-center items-center box-border flex flex-wrap">
            {i.map((news1) => (
              <NewsCard news1={news1} key={uuidv4()} className="w-1/4" />
            ))}
          </div>
        </div>
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default NewsCardContainer;
