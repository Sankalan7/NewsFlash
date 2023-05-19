import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Tools = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const searchWeather = async () => {
      try {
        const searchWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Jalpaiguri&units=metric&appid=ac0434eb5de8192aa5b74eb65f2aa023`
        );
        const data = await searchWeatherResponse.json();
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    };
    searchWeather();
  }, []);

  const [showFootball, setShowFootball] = useState(false);

  const toggleShowFootball = () => {
    setShowFootball(!showFootball);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <section className="relative flex items-center justify-center h-screen bg-gray-900">
          <img
            src="https://source.unsplash.com/random/1600x900/?weather"
            alt="Weather"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 opacity-75 text-white">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-wide">
                {weather.name}
              </h1>
              {Object.keys(weather).length > 0 && (
                <>
                  <p className="mt-8 text-3xl">
                    Temperature: {weather.main.temp}°C (
                    {weather.weather[0].description})
                  </p>
                  <p className="mt-4 text-xl">
                    Feels like: {weather.main.feels_like}°C
                  </p>
                  <p className="mt-4 text-xl">
                    Sunrise:{" "}
                    {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}{" "}
                    | Sunset:{" "}
                    {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                  </p>
                  <p className="mt-4 text-xl">
                    Humidity: {weather.main.humidity}%
                  </p>
                  <p className="mt-4 text-xl">
                    Wind speed: {weather.wind.speed} m/s
                  </p>
                  <p className="mt-4 text-xl">
                    Pressure: {weather.main.pressure} hPa
                  </p>
                  <a
                    href="#tools"
                    className="inline-block px-8 py-3 mt-8 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Go to tools
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="flex flex-col items-center justify-center h-screen bg-blue-300 p-12"
        >
          <div className="grid grid-cols-4 gap-4 h-full w-full">
            <div
              className="col-span-1 grid grid-rows-2 gap-4 h-full"
              style={{ gridTemplateRows: "60% 37.5%" }}
            >
              <NavLink
                exact="true"
                to="/tools/translation"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
              >
                <h2 className="text-lg font-bold mb-4">Translation Tool</h2>
                <p className="text-gray-500">
                  Translate text from one language to another.
                </p>
                <p className="text-gray-500 font-bold mt-4">
                  50+ supported languages
                </p>
              </NavLink>

              <NavLink
                exact="true"
                to="/tools/horoscope"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
              >
                <h2 className="text-lg font-bold mb-4">Horoscope</h2>
                <p className="text-gray-500">
                  Get daily horoscope readings based on your star sign.
                </p>
                <p className="text-gray-500 font-bold mt-4">
                  Personalized predictions
                </p>
              </NavLink>
            </div>

            <NavLink
              exact="true"
              to="/tools/movies"
              className="col-span-1 bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-lg font-bold mb-4">Movie Reviews</h2>
              <p className="text-gray-500">
                Find out what others are saying about the latest movies.
              </p>
              <p className="text-gray-500 font-bold mt-4">
                Ratings, reviews, and more
              </p>
            </NavLink>

            <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
              <NavLink
                exact="true"
                to="/tools/cricket"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
              >
                <h2 className="text-lg font-bold mb-4">Cricket</h2>
                <p className="text-gray-500">
                  Get live cricket scores, updates, and news.
                </p>
                <p className="text-gray-500 font-bold mt-4">
                  International and domestic leagues
                </p>
              </NavLink>
              <div
                onMouseEnter={toggleShowFootball}
                onMouseLeave={toggleShowFootball}
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
              >
                <h2 className="text-lg font-bold mb-4">Football</h2>
                <p className="text-gray-500">
                  Stay up-to-date on football scores, highlights, and news.
                </p>
                <p className="text-gray-500 font-bold mt-4">
                  Leagues and tournaments worldwide
                </p>
                {showFootball && (
                  <div className="absolute bg-gray-600 p-2 text-white">
                    <ul className="space-y-2">
                      <NavLink exact="true" to="/tools/epl">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          EPL
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/tools/laliga">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          LaLiga
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/tools/serie-a">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          Serie A
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/tools/bundesliga">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          Bundesliga
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/tools/ligue1">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          Ligue 1
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-1 grid grid-rows-3 gap-4 h-full">
              <NavLink
                exact="true"
                to="/tools/currency"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
              >
                <h2 className="text-lg font-bold mb-4">Currency converter</h2>
                <p className="text-gray-500">
                  Convert between USD, EUR, GBP, and more
                </p>
                <p className="text-gray-500 font-bold mt-4">
                  Real-time exchange rates
                </p>
              </NavLink>
              <NavLink
                exact="true"
                to="/tools/calculator"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center p-4"
              >
                <span className="text-lg font-bold">Calculator</span>
                <div className="flex flex-col items-center mt-4">
                  <span className="text-sm">
                    Perform basic math calculations
                  </span>
                  <span className="text-sm">
                    Add, subtract, multiply, and divide
                  </span>
                </div>
              </NavLink>
              <NavLink
                exact="true"
                to="/tools/stock"
                className="card bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center p-4"
              >
                <span className="text-lg font-bold">Stock market</span>
                <div className="flex flex-col items-center mt-4">
                  <span className="text-sm">View real-time stock prices</span>
                  <span className="text-sm">Track your favorite stocks</span>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;
