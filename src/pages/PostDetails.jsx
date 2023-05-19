import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as filledThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as filledThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as unfilledThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as unfilledThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { v4 as uuidv4 } from "uuid";
import FocusLock from "react-focus-lock";

const defaultImageUrl =
  "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";

const PostDetails = () => {
  const navigate = useNavigate();
  const { userId, postId } = useParams();

  const updateUrl = `/update-post/${postId}`;

  const [post, setPost] = useState({});
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

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const getPost = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/posts/findByPostId/${postId}`
        );
        const data = await getPost.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails();
  }, [postId]);

  const deletePost = async () => {
    try {
      const deleteResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/posts/delete/${userId}`,
        { method: "DELETE" }
      );

      const data = deleteResponse.json();
      console.log(data);
      navigate("/forum");
      deleteSuccess();
    } catch (error) {
      console.error(error);
      deleteFailure();
    }
  };

  const deleteSuccess = () => {
    toast.success("Successfully deleted", {
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
  const deleteFailure = () => {
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

  const [initialLikes, setInitialLikes] = useState(0);
  const [initialDislikes, setInitialDislikes] = useState(0);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [likeRow, setLikeRow] = useState({});

  const fetchInitialLikes = async () => {
    try {
      const likesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/getTotalLikesByPostId/${postId}`
      );
      const data = await likesResponse.json();
      setInitialLikes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInitialDislikes = async () => {
    try {
      const dislikesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/getTotalDislikesByPostId/${postId}`
      );
      const data = await dislikesResponse.json();
      setInitialDislikes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLike = async () => {
    try {
      const likeResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/getLikesByUserIdAndPostId/${userId}/${postId}`
      );
      const data = await likeResponse.json();
      setLike(data);
      console.log("like: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDislike = async () => {
    try {
      const dislikeResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/getDislikesByUserIdAndPostId/${userId}/${postId}`
      );
      const data = await dislikeResponse.json();
      setDislike(data);
      console.log("dislike: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInitialLikes();
    fetchInitialDislikes();
    getLike();
  }, []);

  useEffect(() => {
    fetchInitialLikes();
    fetchInitialDislikes();
    fetchLike();
    fetchDislike();
  }, [like, dislike]);

  const getLike = async () => {
    try {
      const likeRowResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/getRowByUserIdAndPostId/${userId}/${postId}`
      );
      const data = await likeRowResponse.json();
      if (data) setLikeRow(data);

      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addLike = async () => {
    try {
      const likedOn = new Date().toISOString();
      const addlikeResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
            userId: userId,
            like: true,
            dislike: false,
            likedOn: likedOn,
            dislikedOn: null,
          }),
        }
      );
      const data = await addlikeResponse.json();
      console.log(data);
      getLike();
    } catch (error) {
      console.error(error);
    }
  };

  const addDislike = async () => {
    try {
      const dislikedOn = new Date().toISOString();

      const adddislikeResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
            userId: userId,
            like: false,
            dislike: true,
            likedOn: null,
            dislikedOn: dislikedOn,
          }),
        }
      );
      const data = await adddislikeResponse.json();
      console.log(data);
      getLike();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLike = async () => {
    getLike();
    try {
      console.log(likeRow);
      const deleteRowResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/likes/delete/${likeRow.id}`,
        { method: "DELETE" }
      );
      const data = await deleteRowResponse.json(); // try parsing the response
      console.log(data);
      getLike();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async () => {
    if (likeRow.like === false && likeRow.dislike === false) {
      addLike();
      getLike();
      setLike(true);
    } else if (likeRow.like) {
      await deleteLike();
      getLike();
      setLike(false);
    } else if (likeRow.dislike) {
      await deleteLike();
      addLike();
      getLike();
      setDislike(false);
      setLike(true);
    }
  };

  const handleDislike = async () => {
    if (likeRow.like === false && likeRow.dislike === false) {
      addDislike();
      getLike();
      setDislike(true);
    } else if (likeRow.like) {
      await deleteLike();
      addDislike();
      getLike();
      setLike(false);
      setDislike(true);
    } else if (likeRow.dislike) {
      await deleteLike();
      getLike();
      setDislike(false);
    }
  };

  const [commentOpen, setCommentOpen] = useState(true);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const toggleCommentOpen = () => {
    setCommentOpen(!commentOpen);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentedOn = new Date().toISOString();
      const addCommentResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/comments/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comment,
            commentedOn: commentedOn,
            parentId: null,
            userId: userId,
            postId: postId,
          }),
        }
      );
      const data = await addCommentResponse.json();
      console.log(data);
      getComments();
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentEditSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const commentedOn = new Date().toISOString();
      const addCommentResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/comments/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: commentEdit,
            commentedOn: commentedOn,
            parentId: null,
            userId: userId,
            postId: postId,
          }),
        }
      );
      const data = await addCommentResponse.json();
      console.log(data);
      getComments();
      setCommentEdit("");
      setCommentEditOpen(false);
      setEditingCommentId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    try {
      const getCommentsResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/comments/getByPostId/${postId}`
      );
      const data = await getCommentsResponse.json();
      setAllComments(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComment = async (id) => {
    try {
      const deleteCommentResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/comments/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      getComments();
    } catch (error) {
      console.error(error);
    }
  };

  const [userNames, setUserNames] = useState([]);

  const [mapUserNames, setMapUserNames] = useState(new Map());

  const getUsernames = async () => {
    try {
      const getUsernamesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/users/all-username`
      );
      const data = await getUsernamesResponse.json();

      const map = new Map();
      data.forEach((obj) => {
        map.set(obj.id, obj.userName);
      });

      setMapUserNames(map);
      // console.log(mapUserNames);
    } catch (error) {
      console.error(error);
    }
  };

  const [commentEditOpen, setCommentEditOpen] = useState(false);

  const toggleCommentEditOpen = () => {
    setCommentEditOpen(!commentEditOpen);
  };

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [commentEdit, setCommentEdit] = useState("");

  useEffect(() => {
    getComments();
    getUsernames();
  }, []);

  const getUser = async (id) => {
    try {
      const userResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/users/getById/${id}`
      );
      const data = await userResponse.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentChange = useCallback((e) => {
    setComment(e.target.value);
  }, []);

  const handleCommentEditChange = useCallback((e) => {
    setCommentEdit(e.target.value);
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-merriweather mb-2">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          By {post.author} on {new Date(post.createdOn).toLocaleString()}
        </p>
        <img
          className="h-96 w-full object-cover mb-4"
          src={post.urlToImage || defaultImageUrl}
          alt="Placeholder"
        />
        <div className="text-2xl font-yanone">{post.content}</div>
        <p className="text-sm text-gray-500 mt-4">
          Updated on {new Date(post.updatedOn).toLocaleString()}
        </p>
        {post.userId === userDetails.id && (
          <div className="flex justify-end items-center mt-4">
            <NavLink exact="true" to={updateUrl}>
              <button className="mr-4 font-bold text-blue-600 hover:text-blue-900">
                <FaEdit className="inline-block mr-1" /> Update
              </button>
            </NavLink>
            <button
              onClick={deletePost}
              className="font-bold text-red-600 hover:text-red-900"
            >
              <FaTrashAlt className="inline-block mr-1" /> Delete
            </button>
          </div>
        )}
        <div className="flex flex-row p-6 text-3xl justify-between mt-4">
          <div>
            <button onClick={handleLike} className="mr-2">
              {like ? (
                <FontAwesomeIcon icon={filledThumbsUp} />
              ) : (
                <FontAwesomeIcon icon={unfilledThumbsUp} />
              )}
            </button>
            <span>{initialLikes}</span>
          </div>
          <div>
            <button onClick={handleDislike} className="mr-2">
              {dislike ? (
                <FontAwesomeIcon icon={filledThumbsDown} />
              ) : (
                <FontAwesomeIcon icon={unfilledThumbsDown} />
              )}
            </button>
            <span>{initialDislikes}</span>
          </div>
          <div onClick={toggleCommentOpen}>
            <FontAwesomeIcon icon={faComment} />
          </div>
        </div>
        {commentOpen && (
          <div>
            <form id="comment-form" onSubmit={(e) => handleCommentSubmit(e)}>
              <label
                htmlFor="comment"
                className="text-3xl text-black mb-4 mt-4"
              >
                Leave a comment
              </label>
              <div className="flex flex-row space-x-2">
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mt-6 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                />
                <button
                  type="submit"
                  className="text-lg text-white px-2 bg-blue-500 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="text-3xl mt-8">Comments({allComments?.length})</div>
        {allComments?.length > 0 ? (
          <div className="justify-center flex">
            <div className="justify-center font-maven p-12 w-full">
              {allComments.map((comment1) => (
                <div
                  key={uuidv4()}
                  className="flex flex-col mb-5 border-b-2 border-b-gray-500"
                >
                  <div className="text-2xl text-blue-500">
                    {mapUserNames.get(comment1.userId)}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xl font-merriweather ml-4">
                      {comment1.comment}
                    </div>
                    {comment1.userId === userDetails.id && (
                      <div>
                        <button
                          onClick={() =>
                            setEditingCommentId((prevId) =>
                              prevId === comment1.id ? null : comment1.id
                            )
                          }
                        >
                          <FaEdit className="inline-block mr-1 text-blue-500" />
                        </button>

                        <button onClick={() => deleteComment(comment1.id)}>
                          <FaTrashAlt className="inline-block mr-1 text-red-500" />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 ml-4">
                    Commented on:{" "}
                    {new Date(comment1.commentedOn).toLocaleString()}
                  </div>
                  {editingCommentId === comment1.id && (
                    <form
                      onSubmit={(e) => handleCommentEditSubmit(e, comment1.id)}
                      className="mt-4"
                      id="commentedit-form"
                    >
                      <label
                        htmlFor="commentEdit"
                        className="text-xl text-black mb-4 mt-4"
                      >
                        Edit comment
                      </label>
                      <div className="flex flex-row space-x-2">
                        <input
                          type="text"
                          id="commentEdit"
                          name="commentEdit"
                          value={commentEdit}
                          onChange={(e) => setCommentEdit(e.target.value)}
                          className="mt-6 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                        />
                        <button
                          type="submit"
                          className="text-lg text-white px-2 bg-blue-500 rounded-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-[30vh] justify-center items-center flex">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-black">
                Wow, so empty! :(
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
