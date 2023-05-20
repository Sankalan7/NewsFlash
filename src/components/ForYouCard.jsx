import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { getName } from "i18n-iso-countries";

const ForYouCard = ({ news1, index }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(news1.url, "_blank", "noreferrer");
  };

  const handleBiasClick = (event) => {
    event.preventDefault();
    window.open(
      `https://www.allsides.com/media-bias/ratings?field_featured_bias_rating_value=All&field_news_source_type_tid[1]=1&field_news_source_type_tid[2]=2&field_news_source_type_tid[3]=3&field_news_source_type_tid[4]=4&field_news_source_type_tid[5]=5&field_news_bias_nid_1[1]=1&field_news_bias_nid_1[2]=2&field_news_bias_nid_1[3]=3&title=${news1.source.name}`,
      "_blank",
      "noreferrer"
    );
  };

  const categoryName = news1.category.replace("-", " ");
  let countryName;
  const category = news1.category.toUpperCase();
  if (category === "US") {
    countryName = "UNITED STATES";
  } else if (category === "GB") {
    countryName = "UNITED KINGDOM";
  } else if (category === "IN") {
    countryName = "INDIA";
  } else if (category === "AU") {
    countryName = "AUSTRALIA";
  } else if (category === "BR") {
    countryName = "BRAZIL";
  } else if (category === "JP") {
    countryName = "JAPAN";
  } else if (category === "FR") {
    countryName = "FRANCE";
  } else if (category === "DE") {
    countryName = "GERMANY";
  } else if (category === "UA") {
    countryName = "UKRAINE";
  } else if (category === "RU") {
    countryName = "RUSSIA";
  } else if (category === "CN") {
    countryName = "CHINA";
  } else {
    countryName = getName(category);
  }

  return (
    <div
      className={classNames(
        "flex flex-col h-[540px] w-[348px] border rounded-md overflow-hidden shadow-lg"
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
          <button onClick={handleBiasClick} className="text-md text-blue-500">
            CHECK BIAS
          </button>
          <div className="flex items-center justify-center p-2 bg-blue-950 text-white text-lg mr-2">
            {countryName ? countryName : categoryName.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYouCard;
