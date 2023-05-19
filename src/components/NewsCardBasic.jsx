import React from "react";

const defaultImageUrl =
  "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

const NewsCardBasic = ({ news1 }) => {
  const handleClick = () => {
    window.open(news1.url, "_blank");
  };

  const authorString = news1.author
    ? news1.author == news1.source.name
      ? news1.author
      : `${news1.author} - ${news1.source.name}`
    : news1.source.name;

  return (
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
  );
};

export default NewsCardBasic;
