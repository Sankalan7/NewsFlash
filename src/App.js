import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsCardContainer from "./components/NewsCardContainer";
import AudioLoader from "./components/Loaders/Audio";
import AllRoutes from "./components/AllRoutes";
import classNames from "classnames";
import { AuthContext } from "./AuthContext";
import { ToastContainer } from "react-toastify";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCardVerticalCarouselContainer from "./components/NewsCardVerticalCarouselContainer";

const App = () => {
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  // Check if the current pathname is '/login' or '/register'
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  const [data, setData] = useState({});

  // Alan AI section

  const [sourcenews, setSourceNews] = useState([]);
  const [source, setSource] = useState("");

  const [searchNews, setSearchNews] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const [categoryNews, setCategoryNews] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const [latestNews, setLatestNews] = useState([]);
  const [latestName, setLatestName] = useState("");

  const [activeArticle, setActiveArticle] = useState(-1);

  const navigate = useNavigate();

  const alanKey =
    "31c51f800ddadcfcaa2bee4d6d4fb7742e956eca572e1d8b807a3e2338fdd0dc/stage";

  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: ({
        command,
        savedArticles,
        sourceName,
        searchTerm,
        categoryName,
        latestName,
      }) => {
        if (command === "newHeadlines") {
          console.log("called");
          setSourceNews(savedArticles);
          setSource(sourceName);
          // setActiveArticle(-1);
          console.log(sourcenews);
          navigate("/voice-search/source", {
            state: {
              articles: savedArticles,
              heading: "Latest news from " + sourceName,
              activeArticle: activeArticle,
            },
          });
        }
        if (command === "newSearch") {
          setSearchNews(savedArticles);
          setSearchItem(searchTerm);
          // setActiveArticle(-1);
          console.log(savedArticles);
          navigate("/voice-search/item", {
            state: {
              articles: savedArticles,
              heading: "Latest news on " + searchTerm,
              activeArticle: activeArticle,
            },
          });
        }
        if (command === "newCategory") {
          setCategoryNews(savedArticles);
          setCategoryName(categoryName);
          // setActiveArticle(-1);
          console.log(savedArticles);
          navigate("/voice-search/category", {
            state: {
              articles: savedArticles,
              heading: "Latest news on " + categoryName,
              activeArticle: activeArticle,
            },
          });
        }
        if (command === "newLatest") {
          setLatestNews(savedArticles);
          setLatestName(latestName);
          console.log(savedArticles);
          // setActiveArticle(-1);
          navigate("/voice-search/latest", {
            state: {
              articles: savedArticles,
              heading: "Here are the latest news",
              activeArticle: activeArticle,
            },
          });
        }
        if (command === "highlight") {
          // console.log("highlight called");
          setActiveArticle(activeArticle + 1);
          localStorage.setItem("activeArticle", activeArticle);
          // console.log("localhost value : " + activeArticle);
        }
      },
    });

    return () => {
      alanBtnInstance.deactivate();
    };
  }, []);

  // useEffect(() => {
  //   console.log("useEffect value : " + activeArticle);
  // }, [activeArticle]);

  return (
    <>
      <AuthContext.Provider value={{ data, setData }}>
        {!isAuthRoute && (
          <Navbar
            setNews={setNews}
            setIsSearchLoading={setIsSearchLoading}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
        )}
        <div
          className={classNames("min-h-screen w-full", {
            " pt-[108px]": !isAuthRoute,
          })}
        >
          {query ? (
            isSearchLoading ? (
              <AudioLoader />
            ) : news?.length > 0 ? (
              <>
                <NewsCardContainer
                  i={news}
                  heading={"You searched for : " + query}
                />
              </>
            ) : (
              <AudioLoader />
            )
          ) : (
            <>
              <AllRoutes />
            </>
          )}
        </div>
        {!isAuthRoute && (
          <div className="w-full">
            <Footer />
          </div>
        )}
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AuthContext.Provider>
    </>
  );
};

export default App;
