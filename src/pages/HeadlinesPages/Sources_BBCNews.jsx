import React, { useState, useEffect } from "react";
import NewsCardContainer from "../../components/NewsCardContainer";
import NewsCardVerticalCarouselContainer from "../../components/NewsCardVerticalCarouselContainer";

const Sources_BBCNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
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
      <NewsCardVerticalCarouselContainer
        i={news}
        heading="Top News from BBC News"
      />
    </>
  );
};

export default Sources_BBCNews;
