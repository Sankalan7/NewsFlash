import React, { useEffect, useState } from "react";
import PostCardContainer from "../components/PostCardContainer";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
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
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const getBlogsResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/posts/findByUserId/${userDetails.id}`
        );
        const data = await getBlogsResponse.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (userDetails.id) {
      getBlogs();
    }
  }, [userDetails]);

  return (
    <div className="h-full w-full bg-gray-800 pt-6">
      <div className="max-w-7xl mx-auto mt-6">
        <PostCardContainer i={blogs} heading="My blogs" />
      </div>
    </div>
  );
};

export default UserBlogs;
