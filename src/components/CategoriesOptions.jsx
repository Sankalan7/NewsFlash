import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesOptions = () => {
  return (
    <ul
      id="categories-dropdown"
      className="font-sans z-50 absolute w-[300px] bg-gray-800 text-white left-0 right-0 mt-1 p-2 flex flex-wrap justify-center opacity-100 pointer-events-auto"
    >
      <li className="w-1/4 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/business"
          className="hover:text-gray-300"
        >
          Business
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/entertainment"
          className="hover:text-gray-300"
        >
          Entertainment
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/general"
          className="hover:text-gray-300"
        >
          General
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/health"
          className="hover:text-gray-300"
        >
          Health
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/science"
          className="hover:text-gray-300"
        >
          Science
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/sports"
          className="hover:text-gray-300"
        >
          Sports
        </NavLink>
      </li>
      <li className="w-1/3 py-2 text-center">
        <NavLink
          exact="true"
          to="/categories/technology"
          className="hover:text-gray-300"
        >
          Technology
        </NavLink>
      </li>
    </ul>
  );
};

export default CategoriesOptions;
