import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [urlToImage, setUrlToImage] = useState("");

  const [userDetails, setUserDetails] = useState({});
  const [post, setPost] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

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
    const fetchDetails = async () => {
      try {
        const getPost = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/posts/findByPostId/${id}`
        );
        const data = await getPost.json();
        setPost(data);
        setTitle(data.title);
        setContent(data.content);
        setUrlToImage(data.urlToImage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append form data to it
    const formData = new FormData(e.target);
    const createdOn = new Date();
    const updatedOn = createdOn;
    const userId = userDetails.id;
    const author = userDetails.userName;

    formData.append("title", title);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("createdOn", createdOn);
    formData.append("updatedOn", updatedOn);
    formData.append("userId", userId);

    // formData.append("image", image);

    // Make a POST request to the API endpoint with the form data
    try {
      console.log(formData);
      const response = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/posts/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            urlToImage,
            author,
            createdOn,
            updatedOn,
            userId,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      successUpdate();
      navigate("/forum");
    } catch (error) {
      errorUpdate();
      console.error(error);
    }
  };

  const successUpdate = () => {
    toast.success("Successfully updated", {
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
  const errorUpdate = () => {
    toast.error("Something went wrong", {
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
    <div className="min-h-screen bg-green-100 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-900">
            Update your blog
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-8">
            <div>
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Title"
              />
            </div>

            <div>
              <label htmlFor="content" className="sr-only">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="12"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Content"
              />
            </div>

            <div>
              <label htmlFor="urlToImage" className="sr-only">
                Image URL
              </label>
              <input
                type="text"
                id="urlToImage"
                name="urlToImage"
                value={urlToImage}
                onChange={(e) => setUrlToImage(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="placeholder.jpg"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
