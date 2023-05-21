import React from "react";
import { NavLink } from "react-router-dom";

const HeadlinesOptions = () => {
  return (
    <ul
      id="headlines-dropdown"
      className="border border-white rounded-lg font-sans z-50 space-x-2 absolute w-[800px] bg-gray-800 text-white left-[677px] right-0 mt-1 p-2 flex flex-wrap justify-center opacity-100 pointer-events-auto"
    >
      <div className="w-full pt-2 pb-6 pl-6">COUNTRIES</div>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ae"
          className="hover:text-gray-300"
        >
          United Arab Emirates
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ar"
          className="hover:text-gray-300"
        >
          Argentina
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-at"
          className="hover:text-gray-300"
        >
          Austria
        </NavLink>
      </li>

      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-au"
          className="hover:text-gray-300"
        >
          Australia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-be"
          className="hover:text-gray-300"
        >
          Belgium
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-bg"
          className="hover:text-gray-300"
        >
          Bulgaria
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-br"
          className="hover:text-gray-300"
        >
          Brazil
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ca"
          className="hover:text-gray-300"
        >
          Canada
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ch"
          className="hover:text-gray-300"
        >
          Switzerland
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-cn"
          className="hover:text-gray-300"
        >
          China
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-co"
          className="hover:text-gray-300"
        >
          Colombia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-cu"
          className="hover:text-gray-300"
        >
          Cuba
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-cz"
          className="hover:text-gray-300"
        >
          Czech Republic
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-de"
          className="hover:text-gray-300"
        >
          Germany
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-eg"
          className="hover:text-gray-300"
        >
          Egypt
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-fr"
          className="hover:text-gray-300"
        >
          France
        </NavLink>
      </li>

      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-gb"
          className="hover:text-gray-300"
        >
          United Kingdom
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-gr"
          className="hover:text-gray-300"
        >
          Greece
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-hk"
          className="hover:text-gray-300"
        >
          Hong Kong
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-hu"
          className="hover:text-gray-300"
        >
          Hungary
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-id"
          className="hover:text-gray-300"
        >
          Indonesia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ie"
          className="hover:text-gray-300"
        >
          Ireland
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-il"
          className="hover:text-gray-300"
        >
          Israel
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-in"
          className="hover:text-gray-300"
        >
          India
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-it"
          className="hover:text-gray-300"
        >
          Italy
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-jp"
          className="hover:text-gray-300"
        >
          Japan
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-kr"
          className="hover:text-gray-300"
        >
          South Korea
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-lt"
          className="hover:text-gray-300"
        >
          Lithuania
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-lv"
          className="hover:text-gray-300"
        >
          Latvia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ma"
          className="hover:text-gray-300"
        >
          Morocco
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-mx"
          className="hover:text-gray-300"
        >
          Morocco
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-my"
          className="hover:text-gray-300"
        >
          Malaysia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ng"
          className="hover:text-gray-300"
        >
          Nigeria
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-nl"
          className="hover:text-gray-300"
        >
          Netherlands
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-no"
          className="hover:text-gray-300"
        >
          Norway
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-nz"
          className="hover:text-gray-300"
        >
          New Zealand
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ph"
          className="hover:text-gray-300"
        >
          Philippines
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-pl"
          className="hover:text-gray-300"
        >
          Poland
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-pt"
          className="hover:text-gray-300"
        >
          Portugal
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ro"
          className="hover:text-gray-300"
        >
          Romania
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-rs"
          className="hover:text-gray-300"
        >
          Serbia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ru"
          className="hover:text-gray-300"
        >
          Russia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-sa"
          className="hover:text-gray-300"
        >
          Saudi Arabia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-se"
          className="hover:text-gray-300"
        >
          Sweden
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-sg"
          className="hover:text-gray-300"
        >
          Singapore
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-si"
          className="hover:text-gray-300"
        >
          Slovenia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-sk"
          className="hover:text-gray-300"
        >
          Slovakia
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-th"
          className="hover:text-gray-300"
        >
          Thailand
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-tr"
          className="hover:text-gray-300"
        >
          Turkey
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-tw"
          className="hover:text-gray-300"
        >
          Taiwan
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ua"
          className="hover:text-gray-300"
        >
          Ukraine
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-us"
          className="hover:text-gray-300"
        >
          United States
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-ve"
          className="hover:text-gray-300"
        >
          Venezuela
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/country-za"
          className="hover:text-gray-300"
        >
          South Africa
        </NavLink>
      </li>
      <div className="w-full pt-10 pb-6 pl-6">SOURCES</div>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-abc-news"
          className="hover:text-gray-300"
        >
          ABC News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-bbc-news"
          className="hover:text-gray-300"
        >
          BBC News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-bleacher-report"
          className="hover:text-gray-300"
        >
          Bleacher Report
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-bloomberg"
          className="hover:text-gray-300"
        >
          Bloomberg
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-business-insider"
          className="hover:text-gray-300"
        >
          Business Insider
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-buzzfeed"
          className="hover:text-gray-300"
        >
          Buzzfeed
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-cbs-news"
          className="hover:text-gray-300"
        >
          CBS News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-cnn"
          className="hover:text-gray-300"
        >
          CNN
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-cric-info"
          className="hover:text-gray-300"
        >
          CricInfo
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-crypto-coins-news"
          className="hover:text-gray-300"
        >
          Crypto Coins News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-el-mundo"
          className="hover:text-gray-300"
        >
          El Mundo
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-entertainment-weekly"
          className="hover:text-gray-300"
        >
          Entertainment Weekly
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-espn"
          className="hover:text-gray-300"
        >
          ESPN
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-four-four-two"
          className="hover:text-gray-300"
        >
          FourFourTwo
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-fox-news"
          className="hover:text-gray-300"
        >
          Fox News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-fox-sports"
          className="hover:text-gray-300"
        >
          Fox Sports
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-google-news"
          className="hover:text-gray-300"
        >
          Google News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-lequipe"
          className="hover:text-gray-300"
        >
          L'equipe
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-marca"
          className="hover:text-gray-300"
        >
          Marca
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-mtv-news"
          className="hover:text-gray-300"
        >
          MTV News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-national-geographic"
          className="hover:text-gray-300"
        >
          National Geographic
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-nbc-news"
          className="hover:text-gray-300"
        >
          NBC News
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-news24"
          className="hover:text-gray-300"
        >
          News24
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-new-scientist"
          className="hover:text-gray-300"
        >
          New Scientist
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-reddit-r-all"
          className="hover:text-gray-300"
        >
          Reddit /r/all
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-reuters"
          className="hover:text-gray-300"
        >
          Reuters
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-talksport"
          className="hover:text-gray-300"
        >
          TalkSport
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-techcrunch"
          className="hover:text-gray-300"
        >
          TechCrunch
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-the-hindu"
          className="hover:text-gray-300"
        >
          The Hindu
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-the-lad-bible"
          className="hover:text-gray-300"
        >
          The Lad Bible
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-the-times-of-india"
          className="hover:text-gray-300"
        >
          The Times of India
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-the-verge"
          className="hover:text-gray-300"
        >
          The Verge
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-the-wall-street-journal"
          className="hover:text-gray-300"
        >
          The Wall Street Journal
        </NavLink>
      </li>
      <li className="w-1/8 py-2 text-center">
        <NavLink
          exact="true"
          to="/headlines/sources-wired"
          className="hover:text-gray-300"
        >
          Wired
        </NavLink>
      </li>
    </ul>
  );
};

export default HeadlinesOptions;
