import React, { useState, useEffect } from "react";
import NewsCardCarouselContainer from "../components/NewsCardCarouselContainer";
import NewsCardVerticalCarouselContainer from "../components/NewsCardVerticalCarouselContainer";

const Latest = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
        );
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    searchNews();
  }, []);
  return (
    <>
      <NewsCardVerticalCarouselContainer i={news} heading="Latest News" />
    </>
  );
};

export default Latest;
