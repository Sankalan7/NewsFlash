import React, { useEffect, useState } from "react";
import FootballCard from "../../../components/FootballCard";
import Audio from "../../../components/Loaders/Audio";

const Ligue1 = () => {
  const [news, setnews] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_footballAPI_apiKey,
      "X-RapidAPI-Host": process.env.REACT_APP_footballAPI_host,
    },
  };
  useEffect(() => {
    const searchNews = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_footballAPI_baseURL}/unique-tournaments/media?unique_tournament_id=34`,
          options
        );
        const results = await response.json();
        setnews(results.data);
      } catch (error) {
        console.error(error);
      }
    };
    // console.log(news);
    searchNews();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-yanone p-6 bg-gray-800 text-white">
        Ligue 1
      </h1>
      <div className="grid grid-cols-4 gap-4 bg-blue-400 p-6">
        {news ? (
          news.map((news1) => <FootballCard score={news1} key={news1.id} />)
        ) : (
          <Audio />
        )}
      </div>
    </>
  );
};

export default Ligue1;
