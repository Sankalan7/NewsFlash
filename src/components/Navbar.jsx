import React, { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faSearch,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import CategoriesOptions from "./CategoriesOptions";
import {
  FaArrowUp,
  FaGlobe,
  FaToolbox,
  FaWrench,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { IoFlame } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import axios from "axios";
import NewsCardContainer from "./NewsCardContainer";
import HeadlinesOptions from "./HeadlinesOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthContext";

const Navbar = ({
  setNews,
  setIsSearchLoading,
  setSearchValue,
  searchValue,
}) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [headlinesOpen, setHeadlinesOpen] = useState(false);

  const { data } = useContext(AuthContext);

  const navigate = useNavigate();

  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const [userDetails, setUserDetails] = useState({});

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
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      try {
        const url = `/search?q=${searchValue}`;
        navigate(url);
        setIsSearchLoading(true);
        const API_URL = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`;
        const headers = {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
        };
        const response = await axios.get(API_URL, { headers });

        setNews(response.data.articles);
        setSearchValue("");
        setIsSearchLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleInitialSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_newsAPI_apiKey}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59", // Replace with your app name and version
          },
        }
      );
      setNews(response.data.articles);
      setSearchValue("");
      setIsSearchLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query) {
      setSearchValue(query);
      handleInitialSearch(query);
    }
  }, []);

  const isLoggedIn = () => {
    const loggedInStatus = !!localStorage.getItem("token");
    // console.log(loggedInStatus);
    return loggedInStatus;
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUserName(null);
    isLoggedIn();
    notify();
    navigate("/");
  };

  const [userName, setUserName] = useState(null);

  const notify = () => {
    toast.info("You're logged out", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const loggedOutWarningForum = () => {
    toast.warn("You have to log in to access Forum", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const loggedOutWarningForYou = () => {
    toast.warn("You have to log in to access 'For You' section", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const navForum = () => {
    if (isLoggedIn()) {
      navigate("/forum");
    } else {
      loggedOutWarningForum();
    }
  };

  const navForYou = () => {
    if (isLoggedIn()) {
      navigate("/for-you");
    } else {
      loggedOutWarningForYou();
    }
  };

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenuOpen = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <nav className="fixed z-50 w-full bg-black backdrop-blur-xl text-white px-6 py-6 flex items-center">
      <NavLink to="/" className="mr-8 hover:text-gray-300 flex">
        <FontAwesomeIcon icon={faNewspaper} size="3x" className="mr-2 pt-2" />
        <span
          className="text-3xl font-bold font-handdrawn pt-3"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8a2387, #e94057, #f27121)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          NewsFlash
        </span>
      </NavLink>

      <div className="flex justify-between w-full">
        <ul className="flex space-x-6 pb-2 font-barlow">
          <li className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  onKeyDown={handleKeyDown}
                  className="text-black px-2 py-1 mr-2 rounded w-80 outline-none"
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </li>
          <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
            <button
              onClick={navForYou}
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              FOR YOU
              <span className="ml-2">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </button>
          </li>
          <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
            <NavLink
              exact="true"
              to="/latest"
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              LATEST
              <IoFlame className="ml-2" />
            </NavLink>
          </li>
          <li
            className="pt-6 border-b-2 border-transparent hover:border-gray-300"
            onMouseEnter={() => setHeadlinesOpen(!headlinesOpen)}
            onMouseLeave={() => setHeadlinesOpen(!headlinesOpen)}
          >
            <NavLink
              exact="true"
              to="/headlines"
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              TOP HEADLINES
              <FaGlobe className="ml-2" />
            </NavLink>
            {headlinesOpen && <HeadlinesOptions />}
          </li>

          <li
            className="pt-6 border-b-2 border-transparent hover:border-gray-300 relative"
            onMouseEnter={() => setCategoriesOpen(!categoriesOpen)}
            onMouseLeave={() => setCategoriesOpen(!categoriesOpen)}
          >
            <NavLink
              exact="true"
              to="/categories"
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              CATEGORIES
              <RiMenu2Fill className="ml-2" />
            </NavLink>
            {categoriesOpen && <CategoriesOptions />}
          </li>

          <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
            <NavLink
              exact="true"
              to="/tools"
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              TOOLS
              <FaWrench className="ml-2" />
            </NavLink>
          </li>
          <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
            <button
              onClick={navForum}
              className="hover:text-gray-300 text-lg font-medium flex items-center"
            >
              FORUM
              <span className="ml-2">
                <FontAwesomeIcon icon={faComment} />
              </span>
            </button>
          </li>
        </ul>

        <ul className="flex space-x-6 pb-2 font-barlow mr-4">
          {isLoggedIn() ? (
            <>
              <li className="pt-6">
                <button className="flex flex-row">
                  <span className="hover:text-gray-300 text-lg font-medium flex items-center mr-2">
                    <FaUserAlt className="mr-2" />
                    {userDetails.userName}
                  </span>
                  <span
                    onClick={toggleUserMenuOpen}
                    className="text-white hover:text-gray-300 text-lg font-medium flex items-center"
                  >
                    {userMenuOpen ? (
                      <FontAwesomeIcon icon={faSortUp} className="mr-2 mt-2" />
                    ) : (
                      <FontAwesomeIcon icon={faSortDown} className="mr-2" />
                    )}
                  </span>
                </button>
                {userMenuOpen && (
                  <div className="absolute bg-gray-600 p-2">
                    <ul className="space-y-2">
                      <NavLink exact="true" to="/user-blogs">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          My blogs
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/preferences">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          Preferences
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/user-settings">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          User Settings
                        </li>
                      </NavLink>
                      <NavLink exact="true" to="/terms-and-conditions">
                        <li className="border-b-2 border-b-gray-300 hover:bg-gray-800 p-2">
                          Terms & Conditions
                        </li>
                      </NavLink>
                    </ul>
                  </div>
                )}
              </li>
              <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                <button
                  onClick={logOut}
                  className="hover:text-gray-300 text-lg font-medium flex items-center"
                >
                  <span className="text-red-500">LOGOUT</span>
                  <FaSignOutAlt className="ml-2" />
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                <NavLink
                  exact="true"
                  to="/login"
                  className="hover:text-gray-300 text-lg font-medium flex items-center"
                >
                  <span className="text-green-500">LOGIN</span>
                  <FaSignInAlt className="ml-2" />
                </NavLink>
              </li>
              <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                <NavLink
                  exact="true"
                  to="/register"
                  className="hover:text-gray-300 text-lg font-medium flex items-center"
                >
                  <span className="text-indigo-500">REGISTER</span>
                  <FaUserPlus className="ml-2" />
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
