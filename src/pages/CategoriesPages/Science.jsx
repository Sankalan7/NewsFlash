import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../components/NewsCardContainer";
import NewsCardVerticalCarouselContainer from "../../components/NewsCardVerticalCarouselContainer";

const Science = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
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
      <NewsCardVerticalCarouselContainer i={news} heading="Top Science News" />
    </>
  );
};

export default Science;
