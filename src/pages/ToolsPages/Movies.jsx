import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import CinemaBG from "../../assets/cinemabg.jpg";

const Movies = () => {
  const api_key = "b1754fd9295d530da0ad289206db98dc";
  const base_URL = "https://api.themoviedb.org/3";

  const [trendings, setTrendings] = useState({});

  useEffect(() => {
    const getTrendings = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_moviesAPI_baseURL}/trending/all/week?api_key=${process.env.REACT_APP_moviesAPI_apiKey}`
        );
        const data = await response.json();
        setTrendings(data);
        console.log(trendings);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendings();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
        <img
          src={CinemaBG}
          alt="NewsFlash"
          className="absolute inset-0 w-full h-full z-0 "
          style={{ position: "fixed" }}
        />
        <div className="z-20">
          <h1 className="text-3xl text-red-700 bg-white inline-block rounded-3xl font-bold p-3 m-3">
            Trending movies this week
          </h1>
          <div className="grid grid-cols-4 gap-4 p-12">
            {trendings?.results?.map((trending) => (
              <MovieCard movie={trending} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
