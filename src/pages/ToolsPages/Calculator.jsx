import React, { useState } from "react";
// import "../css/Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearResult = () => {
    setResult("");
  };

  return (
    <>
      <div className="p-12 flex flex-col justify-center items-center bg-blue-400 min-h-screen">
        <h1 className="text-3xl font-yanone text-white pb-8">Calculator</h1>
        <div className="calculator bg-gray-100 p-4 rounded shadow-md">
          <div className="result min-h-[60px] bg-white border border-gray-300 rounded p-2 text-right text-3xl mb-4">
            {result}
          </div>
          <div className="buttons">
            <div className="grid grid-cols-4 gap-4">
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("7")}
              >
                7
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("8")}
              >
                8
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("9")}
              >
                9
              </button>
              <button
                className="col-span-1 bg-yellow-500 rounded p-2 text-2xl text-center text-white"
                onClick={() => handleButtonClick("+")}
              >
                +
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("4")}
              >
                4
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("5")}
              >
                5
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("6")}
              >
                6
              </button>
              <button
                className="col-span-1 bg-yellow-500 rounded p-2 text-2xl text-center text-white"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("1")}
              >
                1
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("2")}
              >
                2
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("3")}
              >
                3
              </button>
              <button
                className="col-span-1 bg-yellow-500 rounded p-2 text-2xl text-center text-white"
                onClick={() => handleButtonClick("*")}
              >
                *
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick("0")}
              >
                0
              </button>
              <button
                className="col-span-1 bg-gray-200 rounded p-2 text-2xl text-center"
                onClick={() => handleButtonClick(".")}
              >
                .
              </button>
              <button
                className="col-span-1 bg-green-500 rounded p-2 text-2xl text-center text-white"
                onClick={calculateResult}
              >
                =
              </button>
              <button
                className="col-span-1 bg-yellow-500 rounded p-2 text-2xl text-center text-white"
                onClick={() => handleButtonClick("/")}
              >
                /
              </button>
              <button
                className="col-span-1 bg-red-500 rounded p-2 text-2xl text-center text-white"
                onClick={clearResult}
              >
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
