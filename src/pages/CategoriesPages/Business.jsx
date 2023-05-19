import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../components/NewsCardContainer";
import axios from "axios";
import NewsCardCarouselContainer from "../../components/NewsCardCarouselContainer";
import NewsCardVerticalCarouselContainer from "../../components/NewsCardVerticalCarouselContainer";
import NewsCardPlainContainer from "../../components/NewsCardPlainContainer";

const Business = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_newsAPI_baseURL}/top-headlines?country=in&category=business&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
        );
        const data = await response.json();
        setNews(data.articles);
        console.log(news);
      } catch (error) {
        console.error(error);
      }
    };
    searchNews();
  }, []);
  return (
    <>
      <NewsCardVerticalCarouselContainer i={news} heading="Top Business News" />
    </>
  );
};

export default Business;
