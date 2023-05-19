import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginBG from "../assets/LoginBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const { setData } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/auth/authenticate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const { token } = await response.json();
      localStorage.setItem("token", token);

      const userDetailsResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/auth/user-details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await userDetailsResponse.json();
      setData(data);
      navigate("/");
      notifySuccess();
    } catch (error) {
      console.error(error);
      notifyFailure();
    }
  };
  const notifySuccess = () => {
    toast.success("Yay! You're logged in.", {
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
  const notifyFailure = () => {
    toast.error("Something went wrong.", {
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
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <img
        src={LoginBG}
        alt="NewsFlash"
        className="absolute inset-0 w-full h-full z-0 "
        style={{ position: "fixed" }}
      />
      <div className="z-50 w-full justify-center items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-row justify-center items-center">
          <NavLink to="/">
            <FontAwesomeIcon
              icon={faNewspaper}
              size="3x"
              className="mr-2 pt-2 text-pink-500"
            />
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
        </div>

        <div className="mt-8 max-w-lg mx-auto">
          <div className="backdrop-blur-xl py-8 px-8 shadow rounded-lg border border-white">
            <div className="w-full">
              <h2 className="mb-8 text-center text-3xl font-yanone text-black">
                Log in to your account
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block font-spacemono font-bold text-lg text-gray-700 pb-2"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="text-xl min-h-[52px] appearance-none block w-full px-12 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-400 text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block font-spacemono font-bold text-lg text-gray-700 pb-2"
                >
                  Password
                </label>
                <div className="mt-1">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="text-xl min-h-[52px] appearance-none block w-full px-12 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="text-gray-400 text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="font-spacemono mb-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="font-spacemono">
              <span className="text-md mr-3 text-gray-500 font-bold">
                Don't have an account?
              </span>
              <button className="text-lg underline">
                <NavLink to="/register">Register here</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
