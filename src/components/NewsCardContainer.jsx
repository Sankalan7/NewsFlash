import React from "react";
import NewsCard from "./NewsCard";
import "../App.css";
import AudioLoader from "./Loaders/Audio";
import { v4 as uuidv4 } from "uuid";

const NewsCardContainer = ({ i, heading }) => {
  return i?.length > 0 ? (
    <>
      <h1 className="font-maven text-3xl text-white fond-bold p-6 bg-gradient-to-r from-blue-600 to-gray-800">
        {heading}
      </h1>
      <div className="max-w-[100.5vw] h-full justify-center items-center box-border flex flex-wrap bg-gradient-to-r from-blue-600 to-gray-800">
        {i.map((news1) => (
          <NewsCard news1={news1} key={uuidv4()} className="w-1/4" />
        ))}
      </div>
    </>
  ) : (
    <AudioLoader />
  );
};

export default NewsCardContainer;
