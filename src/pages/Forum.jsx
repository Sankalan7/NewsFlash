import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PostCardContainer from "../components/PostCardContainer";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getPosts = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/posts/all/sortedBy/createdOn`
        );
        const data = await getPosts.json();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-full w-full bg-gray-800 pt-6">
      <div className="max-w-7xl mx-auto mt-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold mb-4 text-white">Forum</h1>
          <NavLink exact="true" to="/new-post">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
              Create new blog
            </button>
          </NavLink>
        </div>
        <PostCardContainer i={posts} heading="Latest on forum" />
      </div>
    </div>
  );
};

export default Forum;
