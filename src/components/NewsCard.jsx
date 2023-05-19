import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Button } from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const NewsCard = ({ news1 }) => {
  const [showBackground, setShowBackground] = useState(true);
  const [hovered, setHovered] = useState(false);

  const defaultImageUrl =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

  const handleClick = (event) => {
    event.preventDefault();
    window.open(news1.url, "_blank", "noreferrer");
  };

  const titleWords = news1.title ? news1.title.split(" ") : [];
  const truncatedTitle =
    titleWords.length > 6
      ? `${titleWords.slice(0, 6).join(" ")}...`
      : news1.title;

  const descriptionWords = news1.description
    ? news1.description.split(" ")
    : [];
  const truncatedDescription =
    descriptionWords.length > 10
      ? `${descriptionWords.slice(0, 10).join(" ")}...`
      : news1.description;

  return (
    <div
      className={classnames(
        "w-[270px] h-[350px] relative m-6 bg-white rounded-lg shadow-lg overflow-hidden box-border transform ",
        { "scale-x-105 scale-y-105": hovered }
      )}
      onMouseEnter={() => {
        setShowBackground(false);
        setHovered(true);
      }}
      onMouseLeave={() => {
        setShowBackground(true);
        setHovered(false);
      }}
    >
      <img
        src={news1.urlToImage || defaultImageUrl}
        alt={news1.title}
        className={`w-full h-full object-cover shadow-lg ${
          showBackground ? "" : "opacity-30"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-between`}
      >
        <h3
          className={`text-2xl font-bold transition-all duration-700 ${
            hovered ? "text-gray-600 " : "text-white font-outline-4"
          } `}
        >
          {truncatedTitle}
        </h3>

        {!showBackground ? (
          <>
            <h2
              className={`text-xl text-gray-900 leading-tight transition-all duration-700 mb-3`}
            >
              {truncatedDescription}
            </h2>
          </>
        ) : null}
        {hovered ? (
          <>
            <div className="mb-3 h-100 flex flex-column justify-around">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className="h-70 w-70"
                  style={{ marginBottom: "1rem" }}
                  onClick={handleClick}
                >
                  Open
                </Button>
                <div className="mb-3 flex justify-around">
                  <FacebookShareButton url={news1.url}>
                    <FacebookIcon
                      className="h-10 w-10"
                      logofillcolor="white"
                      round={true}
                    ></FacebookIcon>
                  </FacebookShareButton>
                  <TwitterShareButton url={news1.url}>
                    <TwitterIcon
                      className="h-10 w-10"
                      logofillcolor="white"
                      round={true}
                    ></TwitterIcon>
                  </TwitterShareButton>
                  <WhatsappShareButton url={news1.url}>
                    <WhatsappIcon
                      className="h-10 w-10"
                      logofillcolor="white"
                      round={true}
                    ></WhatsappIcon>
                  </WhatsappShareButton>
                  <LinkedinShareButton url={news1.url}>
                    <LinkedinIcon
                      className="h-10 w-10"
                      logofillcolor="white"
                      round={true}
                    ></LinkedinIcon>
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NewsCard;
