import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const defaultImageUrl =
  "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

const NewsCardBasic = ({ news1 }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const handleClick = () => {
    window.open(news1.url, "_blank");
  };
  const handleBiasClick = (event) => {
    event.preventDefault();
    window.open(
      `https://www.allsides.com/media-bias/ratings?field_featured_bias_rating_value=All&field_news_source_type_tid[1]=1&field_news_source_type_tid[2]=2&field_news_source_type_tid[3]=3&field_news_source_type_tid[4]=4&field_news_source_type_tid[5]=5&field_news_bias_nid_1[1]=1&field_news_bias_nid_1[2]=2&field_news_bias_nid_1[3]=3&title=${news1.source.name}`,
      "_blank",
      "noreferrer"
    );
  };

  const authorString = news1.author
    ? news1.author == news1.source.name
      ? news1.author
      : `${news1.author} - ${news1.source.name}`
    : news1.source.name;

  return (
    <div className="flex items-center p-4 cursor-pointer hover:shadow-lg bg-black">
      <div
        className="flex items-center p-4 cursor-pointer hover:shadow-lg bg-black"
        onClick={handleClick}
      >
        <div className="w-1/3 mr-4">
          <img
            src={news1.urlToImage || defaultImageUrl}
            alt={news1.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-2/3">
          <h3 className="text-3xl font-semibold mb-2">{news1.title}</h3>
          <p className="text-gray-300">{news1.description}</p>
          <p className="text-gray-400 text-sm mt-2">
            {authorString} | {new Date(news1.publishedAt).toLocaleString()}
          </p>
        </div>
      </div>
      <button onClick={handleBiasClick} className="text-md text-blue-500">
        CHECK BIAS
      </button>
    </div>
  );
};

export default NewsCardBasic;
