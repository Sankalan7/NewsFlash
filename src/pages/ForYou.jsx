import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ForYouCardContainer from "../components/ForYouCardContainer";
import { NavLink } from "react-router-dom";

const ForYou = () => {
  const [userDetails, setUserDetails] = useState({});

  const [categoriesPreferences, setCategoriesPreferences] = useState({});
  const [sourcesPreferences, setSourcesPreferences] = useState({});
  const [countriesPreferences, setCountriesPreferences] = useState({});

  const [categoriesNews, setCategoriesNews] = useState([]);
  const [sourcesNews, setSourcesNews] = useState([]);
  const [countriesNews, setCountriesNews] = useState([]);

  const [categoriesDefault, setCategoriesDefault] = useState(true);
  const [sourcesDefault, setSourcesDefault] = useState(true);
  const [countriesDefault, setCountriesDefault] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userDetailsResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/auth/user-details`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await userDetailsResponse.json();
        setUserDetails(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userDetails.id) {
      const getCategoriesPreferences = async () => {
        try {
          const getCategoriesPreferencesResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getCategoriesByUserId/${userDetails.id}`
          );
          const data = await getCategoriesPreferencesResponse.json();
          if (data != null) {
            setCategoriesPreferences(data);
            setCategoriesDefault(false);
          } else {
            setCategoriesPreferences({ preference: ["general"] });
            setCategoriesDefault(true);
          }
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

      getCategoriesPreferences();
    }
  }, [userDetails]);

  useEffect(() => {
    const getCategoriesNews = async () => {
      if (categoriesPreferences && categoriesPreferences.preference) {
        const categories = categoriesPreferences.preference;
        const responses = await Promise.all(
          categories.map((category) =>
            fetch(
              `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
            )
              .then((response) => response.json())
              .then((data) => ({ ...data, category }))
          )
        );
        const articles = responses.flatMap((response) =>
          response.articles.map((article) => ({
            ...article,
            category: response.category,
          }))
        );
        const randomizedArticles = articles.sort(() => Math.random() - 0.5);
        setCategoriesNews(randomizedArticles);
        console.log(randomizedArticles);
      }
    };
    getCategoriesNews();
  }, [categoriesPreferences]);

  useEffect(() => {
    if (userDetails.id) {
      const getSourcesPreferences = async () => {
        try {
          const getSourcesPreferencesResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getSourcesByUserId/${userDetails.id}`
          );
          const data = await getSourcesPreferencesResponse.json();
          if (data != null) {
            setSourcesPreferences(data);
            setSourcesDefault(false);
          } else {
            setSourcesPreferences({
              preference: ["buzzfeed", "bbc-news", "cnn", "espn", "wired"],
            });
            setSourcesDefault(true);
          }
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      getSourcesPreferences();
    }
  }, [userDetails]);

  useEffect(() => {
    const getSourcesNews = async () => {
      if (sourcesPreferences && sourcesPreferences.preference) {
        const sources = sourcesPreferences.preference;
        const responses = await Promise.all(
          sources.map((sources) =>
            fetch(
              `https://newsapi.org/v2/top-headlines?sources=${sources}&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
            )
              .then((response) => response.json())
              .then((data) => ({ ...data, sources }))
          )
        );
        const articles = responses.flatMap((response) =>
          response.articles.map((article) => ({
            ...article,
            category: response.sources,
          }))
        );
        const randomizedArticles = articles.sort(() => Math.random() - 0.5);
        setSourcesNews(randomizedArticles);
        console.log(randomizedArticles);
      }
    };
    getSourcesNews();
  }, [sourcesPreferences]);

  useEffect(() => {
    if (userDetails.id) {
      const getCountriesPreferences = async () => {
        try {
          const getCountriesPreferencesResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getCountriesByUserId/${userDetails.id}`
          );
          const data = await getCountriesPreferencesResponse.json();
          if (data != null) {
            setCountriesPreferences(data);
            setCountriesDefault(false);
          } else {
            setCountriesPreferences({
              preference: ["in", "cn", "us", "gb", "ru", "ua"],
            });
            setCountriesDefault(true);
          }
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      getCountriesPreferences();
    }
  }, [userDetails]);

  useEffect(() => {
    const getCountriesNews = async () => {
      if (countriesPreferences && countriesPreferences.preference) {
        const countries = countriesPreferences.preference;
        const responses = await Promise.all(
          countries.map((countries) =>
            fetch(
              `https://newsapi.org/v2/top-headlines?country=${countries}&pageSize=100&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`
            )
              .then((response) => response.json())
              .then((data) => ({ ...data, countries }))
          )
        );
        const articles = responses.flatMap((response) =>
          response.articles.map((article) => ({
            ...article,
            category: response.countries,
          }))
        );
        const randomizedArticles = articles.sort(() => Math.random() - 0.5);
        setCountriesNews(randomizedArticles);
        console.log(randomizedArticles);
      }
    };
    getCountriesNews();
  }, [countriesPreferences]);

  const getCategoriesPreferences = async () => {
    try {
      const getCategoriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getCategoriesByUserId/${userDetails.id}`
      );
      const data = await getCategoriesPreferencesResponse.json();
      if (data != null) setCategoriesPreferences(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSourcesPreferences = async () => {
    try {
      const getSourcesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getSourcesByUserId/${userDetails.id}`
      );
      const data = await getSourcesPreferencesResponse.json();
      if (data != null) setSourcesPreferences(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCountriesPreferences = async () => {
    try {
      const getCountriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getCountriesByUserId/${userDetails.id}`
      );
      const data = await getCountriesPreferencesResponse.json();
      if (data != null) setCountriesPreferences(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <ForYouCardContainer
          categoriesNews={categoriesNews}
          categoriesDefault={categoriesDefault}
          sourcesNews={sourcesNews}
          sourcesDefault={sourcesDefault}
          countriesNews={countriesNews}
          countriesDefault={countriesDefault}
        />
      </div>
    </>
  );
};

export default ForYou;
