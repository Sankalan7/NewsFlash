import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../components/NewsCardContainer";
import axios from "axios";
import NewsCardVerticalCarouselContainer from "../../components/NewsCardVerticalCarouselContainer";

const Entertainment = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_newsAPI_baseURL}/top-headlines?country=in&category=entertainment&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
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
      <NewsCardVerticalCarouselContainer
        i={news}
        heading="Top Entertainment News"
      />
    </>
  );
};

export default Entertainment;
