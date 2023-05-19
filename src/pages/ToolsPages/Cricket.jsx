import React, { useState, useEffect } from "react";
// import AudioLoader from "./Loaders/Audio";
import Audio from "../../components/Loaders/Audio";
import CricketCard from "../../components/CricketCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cricket = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [cricket, setCricket] = useState(null);

  useEffect(() => {
    const getCricket = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_cricketAPI_baseURL}/currentMatches?apikey=${process.env.REACT_APP_cricketAPI_apiKey}&offset=0`
        );
        const results = await response.json();
        setCricket(results.data);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    getCricket();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center bg-blue-400 px-64">
        <Slider {...settings}>
          {cricket ? (
            cricket.map((match) => (
              <div className="rounded overflow-hidden shadow-lg bg-gray-50 m-2">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{match.name}</div>
                  <div className="flex flex-row justify-between">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12"
                        src={match.teamInfo[0].img}
                        alt={match.teamInfo[0].name}
                      />
                    </div>
                    <div className="scores ml-4">
                      {match.score.length === 1 && (
                        <div className="flex flex-wrap mr-1 ml-2">
                          <div className="text-gray-900 w-full">Yet To Bat</div>
                        </div>
                      )}

                      {match.score.length > 1 && (
                        <div className="flex flex-wrap mr-1 ml-1">
                          {match.score.slice(0, 2).map((match, index) => (
                            <div
                              key={index}
                              className={`text-gray-900 w-1/2 px-2 ${
                                match.length === 2 ? "w-full" : ""
                              }`}
                            >
                              {match.r}/{match.w}({match.o})
                            </div>
                          ))}
                        </div>
                      )}

                      {match.score.length > 2 && (
                        <div className="flex flex-wrap mt-2 mr-1 ml-1">
                          {match.score.slice(2).map((match, index) => (
                            <div
                              key={index}
                              className="text-gray-900 w-full px-2"
                            >
                              {match.r}/{match.w}({match.o})
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      <img
                        className="h-12 w-12"
                        src={match.teamInfo[1].img}
                        alt={match.teamInfo[1].name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-2">
                    <div className="text-gray-900 flex">
                      {match.teamInfo[0].name}
                    </div>
                    <div className="text-gray-900 flex">
                      {match.teamInfo[1].name}
                    </div>
                  </div>
                  <div className="mt-2 text-center text-gray-900">
                    {match.status}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Audio />
          )}
        </Slider>
      </div>
    </>
  );
};

export default Cricket;
