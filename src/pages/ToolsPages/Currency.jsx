import React, { useState, useEffect } from "react";

const Currency = () => {
  const [result, setResult] = useState(0);
  const [inputValue1, setInputValue1] = useState(0);
  const [selectedOption1, setSelectedOption1] = useState("USD");
  const [inputValue2, setInputValue2] = useState(0);
  const [selectedOption2, setSelectedOption2] = useState("EUR");
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    const fetchCurrencyOptions = async () => {
      const myHeaders = new Headers();
      myHeaders.append("apikey", `${process.env.REACT_APP_currencyAPI_apiKey}`);

      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          `${process.env.REACT_APP_currencyAPI_baseURL}`,
          {
            method: "GET",
            redirect: "follow",
            headers: {
              apikey: "NRA4NCrQtXdCXMtSx3x5a59iA7uAUgb7",
            },
          }
        );
        const results = await response.json();
        setCurrencyOptions(Object.keys(results.symbols));
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrencyOptions();
  }, []);

  useEffect(() => {
    const fetchCurrencyExchangeRate = async () => {
      const myHeaders = new Headers();
      myHeaders.append("apikey", "NRA4NCrQtXdCXMtSx3x5a59iA7uAUgb7");

      const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      try {
        const response = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${selectedOption2}&from=${selectedOption1}&amount=${inputValue1}`,
          requestOptions
        );
        const resu = await response.json();
        setResult(resu.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrencyExchangeRate();
  }, [inputValue1, selectedOption1, selectedOption2]);

  useEffect(() => {
    setInputValue2(result);
  }, [result]);

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-400">
      <div className="p-6 items-center bg-white rounded-md">
        <h1 className="text-3xl font-yanone pb-6 text-black">
          Currency conversion tool
        </h1>
        <div className="flex items-center">
          <input
            type="number"
            value={inputValue1}
            onChange={handleInputChange1}
            className="w-1/2 p-2 border border-gray-400 rounded"
          />
          <select
            value={selectedOption1}
            onChange={handleOptionChange1}
            className="w-1/2 p-2 border border-gray-400 rounded ml-2"
          >
            {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="number"
            value={inputValue2}
            disabled
            className="w-1/2 p-2 border border-gray-400 rounded"
          />
          <select
            value={selectedOption2}
            onChange={handleOptionChange2}
            className="w-1/2 p-2 border border-gray-400 rounded ml-2"
          >
            {currencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Currency;
