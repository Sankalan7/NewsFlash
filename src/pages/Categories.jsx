import React, { useEffect, useState } from "react";
import NewsCardCarouselContainer from "../components/NewsCardCarouselContainer";

const Categories = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [entertainementNews, setEntertainmentNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);

  const searchBusinessNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setBusinessNews(data.articles);
      console.log(businessNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchEntertainmentNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setEntertainmentNews(data.articles);
      console.log(entertainementNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchGeneralNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setGeneralNews(data.articles);
      console.log(generalNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchHealthNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setHealthNews(data.articles);
      console.log(healthNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchScienceNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setScienceNews(data.articles);
      console.log(scienceNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchSportsNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setSportsNews(data.articles);
      console.log(sportsNews);
    } catch (error) {
      console.error(error);
    }
  };
  const searchTechnologyNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
      );
      const data = await response.json();
      setTechnologyNews(data.articles);
      console.log(technologyNews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchBusinessNews();
    searchEntertainmentNews();
    searchGeneralNews();
    searchHealthNews();
    searchScienceNews();
    searchSportsNews();
    searchTechnologyNews();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-gray-800">
        <NewsCardCarouselContainer
          i={businessNews}
          heading="Top Business News"
        />
        <NewsCardCarouselContainer
          i={entertainementNews}
          heading="Top Entertainment News"
        />
        <NewsCardCarouselContainer i={generalNews} heading="Top General News" />
        <NewsCardCarouselContainer i={healthNews} heading="Top Health News" />
        <NewsCardCarouselContainer i={scienceNews} heading="Top Science News" />
        <NewsCardCarouselContainer i={sportsNews} heading="Top Sports News" />
        <NewsCardCarouselContainer
          i={technologyNews}
          heading="Top Technology News"
        />
      </div>
    </>
  );
};

export default Categories;
