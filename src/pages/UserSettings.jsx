import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaChevronLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserSettings = () => {
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
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <NavLink exact="true" to="/" className="flex items-center">
            <FaChevronLeft className="mr-2" />
            <span className="font-medium">Back to Home</span>
          </NavLink>
        </div>
        <div className="bg-white rounded-md shadow-md p-8">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex justify-center items-center">
              <FaUser className="text-white text-4xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-medium mb-8">Personal Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaUser className="text-gray-400 mr-4" />
                  <div>
                    <div className="font-medium">Name</div>
                    <div className="text-gray-700">
                      {userDetails.firstName} {userDetails.lastName}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-400 mr-4" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-700">{userDetails.email}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-gray-400 mr-4" />
                  <div>
                    <div className="font-medium">Username</div>
                    <div className="text-gray-700">{userDetails.userName}</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-8">Account Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaLock className="text-gray-400 mr-4" />
                  <div>
                    <div className="font-medium">Password</div>
                    <div className="text-gray-700">**********</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-gray-400 mr-4" />
                  <div>
                    <div className="font-medium">Role</div>
                    <div className="text-gray-700">{userDetails.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
