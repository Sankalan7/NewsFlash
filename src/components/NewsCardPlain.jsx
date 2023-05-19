import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const NewsCardPlain = ({ news1, index, activeArticle }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(news1.url, "_blank", "noreferrer");
  };

  activeArticle = localStorage.getItem("activeArticle");

  return (
    <div
      className={classNames(
        "flex flex-col h-[540px] w-[350px] border rounded-md overflow-hidden shadow-lg",
        { "bg-blue-500": activeArticle === index }
      )}
    >
      {/* <h1>{activeArticle}</h1> */}
      <img
        className="h-[40%] w-full object-cover pt-2 px-2 bg-white"
        src={news1.urlToImage}
        alt={news1.title}
      />
      <div className="flex flex-col justify-between h-[60%] p-4 bg-white">
        <div className="flex flex-row justify-between">
          <p className="text-xs text-gray-500">
            {new Date(news1.publishedAt).toLocaleString()}
          </p>
          <span className="text-xs text-gray-500">{news1.source.name}</span>
        </div>
        <h2 className="text-md font-bold mb-2 font-maven">{news1.title}</h2>
        <p className="text-md text-gray-700 mb-2 font-yanone">
          {news1.description}
        </p>
        <div className="flex flex-row justify-between">
          <button onClick={handleClick} className="text-md text-blue-500">
            LEARN MORE
          </button>
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-950 text-white text-lg mr-2">
            {index + 1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardPlain;
