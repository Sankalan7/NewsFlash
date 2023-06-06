import React, { useEffect, useState } from "react";

const Translation = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [languages, setLanguages] = useState({});
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("bn");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const selectSourceChange = (event) => {
    setSourceLanguage(event.target.value);
    console.log(event.target.value);
  };

  const selectTargetChange = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleTranslate = async () => {
    const url = process.env.REACT_APP_translationAPI_baseURL;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": process.env.REACT_APP_translationAPI_apiKey,
        "X-RapidAPI-Host": process.env.REACT_APP_translationAPI_host,
      },
      body: new URLSearchParams({
        q: text,
        target: targetLanguage,
        source: sourceLanguage,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      const url =
        "https://google-translate1.p.rapidapi.com/language/translate/v2/languages";
      const options = {
        method: "GET",
        headers: {
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key":
            "543fd8b79cmsh4cbb981fecd88b8p10e7a7jsn1fd444155ef9",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setLanguages(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLanguages();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <div className="p-6 bg-white rounded-md">
        <div className="w-full max-w-sm flex flex-row">
          <div className="w-full p-4">
            <div className="relative mb-4">
              <label
                htmlFor="sourceLanguage"
                className="text-gray-700 font-bold mb-2"
              >
                Source Language:
              </label>
              <select
                id="sourceLanguage"
                value={sourceLanguage}
                onChange={selectSourceChange}
                className="w-full appearance-none px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              >
                {languages?.data?.languages?.map((language) => (
                  <option key={language.language} value={language.language}>
                    {language.language}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative mb-4">
              <label htmlFor="text" className="text-gray-700 font-bold mb-2">
                Text:
              </label>
              <input
                type="text"
                id="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text to translate"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="w-full p-4">
            <div className="relative mb-4">
              <label
                htmlFor="targetLanguage"
                className="text-gray-700 font-bold mb-2"
              >
                Target Language:
              </label>
              <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={selectTargetChange}
                className="w-full appearance-none px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
              >
                {languages?.data?.languages?.map((language) => (
                  <option key={language.language} value={language.language}>
                    {language.language}
                  </option>
                ))}
              </select>
            </div>
            {translatedText && (
              <div className="w-full flex justify-between mt-4">
                <div className="w-full pr-2">
                  <label
                    htmlFor="translatedText"
                    className="text-gray-700 font-bold mb-2"
                  >
                    Translated Text:
                  </label>
                  <div
                    id="translatedText"
                    className="w-full px-4 py-2 rounded-md border border-gray-300"
                  >
                    {translatedText}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleTranslate}
            className="px-4 py-2 mt-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Translation;
