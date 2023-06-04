import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 font-maven z-50">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-medium mb-4">Connect with us</h3>
          <div className="flex">
            <a href="#" className="text-gray-500 hover:text-white mr-4">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white mr-4">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-medium mb-4">Address</h3>
          <p className="text-gray-500">Denguajhar</p>
          <p className="text-gray-500">Paharpur, Jalpaiguri, India 735102</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-medium mb-4">Phone Numbers</h3>
          <p className="text-gray-500">Main: (+91) 55555-55555</p>
          <p className="text-gray-500">Fax: (+91) 77777-77777</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-medium mb-4">Subscribe</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-3 rounded-lg mb-2 bg-gray-800 text-gray-500"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 px-4 sm:px-6 lg:px-8 text-center">
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center">
            <li className="mr-4 mb-4 md:mb-0">
              <NavLink
                exact="true"
                to="/about"
                className="text-gray-500 hover:text-white font-medium"
              >
                About Us
              </NavLink>
            </li>
            <li className="mr-4 mb-4 md:mb-0">
              <NavLink
                exact="true"
                to="/privacy-policy"
                className="text-gray-500 hover:text-white font-medium"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li className="mr-4 mb-4 md:mb-0">
              <NavLink
                exact="true"
                to="/faq"
                className="text-gray-500 hover:text-white font-medium"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-gray-800 py-4 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500">
          &copy; 2023 NewsFlash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
