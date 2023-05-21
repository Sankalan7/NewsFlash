import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const defaultImageUrl =
  "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

const PostCard = ({ post }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [userDetails, setUserDetails] = useState({});
  const userId = localStorage.getItem("userId");
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
  const url = `/posts/${userId}/${post.id}`;
  const authorString = post.author;
  const contentWords = post.content.split(" ").slice(0, 50).join(" ");
  const content = `${contentWords}...`;

  return (
    <NavLink exact="true" to={url}>
      <div
        className="flex items-center p-4 cursor-pointer hover:shadow-lg bg-black w-full border border-white"
        data-aos="fade-up"
      >
        <div className="w-1/3 mr-4 h-[220px] overflow-hidden rounded-lg">
          <img
            src={post.urlToImage || defaultImageUrl}
            alt={post.title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="w-2/3">
          <h3 className="text-3xl font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-300 font-barlow text-lg">{content}</p>
          <p className="text-gray-400 text-sm mt-2">
            {authorString} | {new Date(post.createdOn).toLocaleString()}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default PostCard;
