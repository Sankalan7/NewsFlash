import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState({});

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_stockAPI_baseURL}/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${process.env.REACT_APP_stockAPI_apiKey}`
      );
      const data = await response.json();
      setSuggestions(data.bestMatches);
      console.log(data.bestMatches);
      setShowSuggestions(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDataSearch = async (searchTerm) => {
    try {
      setShowSuggestions(false);
      const res = await fetch(
        `${process.env.REACT_APP_stockAPI_baseURL}/query?function=TIME_SERIES_INTRADAY&symbol=${searchTerm}&interval=5min&apikey=${process.env.REACT_APP_stockAPI_apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
    try {
      const res = await fetch(
        `${process.env.REACT_APP_stockAPI_baseURL}/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchTerm}&interval=5min&apikey=${process.env.REACT_APP_stockAPI_apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setDailyData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const timeSeriesData = Object?.entries(data["Time Series (5min)"] || {})
    ?.map(([timestamp, values]) => ({
      timestamp,
      close: parseFloat(values["4. close"]),
    }))
    .reverse();

  const timestamps = timeSeriesData?.map((entry) => entry.timestamp);
  const closingPrices = timeSeriesData?.map((entry) => entry.close);

  const dates = dailyData?.["Time Series (Daily)"]
    ? Object.keys(dailyData["Time Series (Daily)"]).reverse()
    : [];
  const closingPricesDaily =
    dates?.map((date) =>
      parseFloat(dailyData["Time Series (Daily)"][date]["4. close"])
    ) || [];

  const dataDaily = [
    {
      x: dates,
      y: closingPricesDaily,
      type: "bar",
      marker: {
        color: "green",
      },
    },
  ];

  const layout = {
    title: `Daily Closing Prices of ${searchTerm}`,
    xaxis: {
      title: "Date",
    },
    yaxis: {
      title: "Closing Price",
    },
  };

  return (
    <div className="flex flex-col justify-center pt-4">
      <div className="w-full flex justify-center text-center text-3xl font-yanone p-6">
        Stock trends
      </div>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="px-4 py-2 w-1/2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
        {showSuggestions && (
          <div className="absolute z-50 mt-12 w-1/2 bg-white rounded shadow">
            {suggestions?.map((suggestion) => (
              <div
                key={suggestion["1. symbol"]}
                className="px-4 py-2 hover:bg-gray-100 flex justify-between cursor-pointer"
                onClick={() => {
                  handleDataSearch(suggestion["1. symbol"]);
                }}
              >
                <p>{suggestion["1. symbol"]}</p>
                <p>{suggestion["2. name"]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full min-h-[125vh]">
        <Plot
          data={[
            {
              x: timestamps,
              y: closingPrices,
              type: "scatter",
              mode: "lines",
              marker: { color: "blue" },
            },
          ]}
          layout={{
            title: `Time Series Graph of ${searchTerm}`,
            xaxis: { title: "Time" },
            yaxis: { title: "Price" },
          }}
          style={{ width: "100%", height: "400px" }}
        />
        <Plot
          data={dataDaily}
          layout={layout}
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default Stock;
