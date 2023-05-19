import React, { useEffect, useState } from "react";

const Horoscope = () => {
  const [signs, setSigns] = useState([]);
  const [today, setToday] = useState({});
  const [tomorrow, setTomorrow] = useState({});
  useEffect(() => {
    const getSigns = async () => {
      try {
        const getSignsResponse = await fetch(
          `${process.env.REACT_APP_horoscopeAPI_baseURL}/sunsigns`
        );
        const data = await getSignsResponse.json();
        setSigns(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSigns();
  }, []);

  const getToday = async ({ sign }) => {
    try {
      const getTodayResponse = await fetch(
        `${process.env.REACT_APP_horoscopeAPI_baseURL}/horoscope/${sign}/today`
      );
      const data = await getTodayResponse.json();
      setToday(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTomorrow = async ({ sign }) => {
    try {
      const getTomorrowResponse = await fetch(
        `${process.env.REACT_APP_horoscopeAPI_baseURL}/horoscope/${sign}/tomorrow`
      );
      const data = await getTomorrowResponse.json();
      setTomorrow(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [todayShow, setTodayShow] = useState(false);
  const [tomorrowShow, setTomorrowShow] = useState(false);
  const [currentSign, setCurrentSign] = useState(null);

  const handleHoverLeave = () => {
    setCurrentSign(null);
    setTodayShow(false);
    setTomorrowShow(false);
  };

  const handleTodayClick = async ({ sign }) => {
    setCurrentSign(sign);
    await getToday({ sign });
    setTodayShow(true);
  };

  const handleTomorrowClick = async ({ sign }) => {
    setCurrentSign(sign);
    await getTomorrow({ sign });
    setTomorrowShow(true);
  };

  const handleOutsideClick = () => {
    setCurrentSign(null);
    setTodayShow(false);
    setTomorrowShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-screen-xl p-8">
          <div className="grid grid-cols-4 grid-rows-3 gap-8">
            {signs.map((sign) => (
              <div
                key={sign}
                className="sign-tile bg-white p-6 rounded-md flex flex-col justify-center items-center text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-semibold text-2xl mb-2">
                  {sign.toUpperCase()}
                </h3>
                <div className="flex justify-between space-x-6">
                  <span
                    className="bg-blue-500 text-white rounded-lg p-2"
                    onClick={() => handleTodayClick({ sign })}
                  >
                    TODAY
                  </span>
                  <span
                    className="bg-blue-500 text-white rounded-lg p-2"
                    onClick={() => handleTomorrowClick({ sign })}
                  >
                    TOMORROW
                  </span>
                </div>
                {currentSign === sign && todayShow && (
                  <div className="absolute bg-gray-700 text-white font-barlow p-6 w-1/4">
                    {today.horoscope}
                  </div>
                )}
                {currentSign === sign && tomorrowShow && (
                  <div className="absolute bg-gray-700 text-white font-barlow p-6 w-1/4">
                    {tomorrow.horoscope}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Horoscope;
