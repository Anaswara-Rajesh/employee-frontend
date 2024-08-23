import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEmployeeByUserName } from "../../api/api";

function AvatharSection() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const loggerUserName = localStorage.getItem("loggedUsername");
  const navigate = useNavigate();

  const baseURL = "http://localhost:5000";

  useEffect(() => {
    const fetchUserProfilePicture = async () => {
      try {
        const res = await getEmployeeByUserName(loggerUserName);
        if (res?.data?.profilePicture) {
          setProfilePicture(`${baseURL}${res.data.profilePicture}`);
        } else {
          setProfilePicture(null);
        }
      } catch (err) {
        console.log(err);
        setProfilePicture(null);
      }
    };

    fetchUserProfilePicture();
  }, [loggerUserName]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="relative">
      <a
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300"
          src={
            profilePicture
              ? profilePicture
              : "https://via.placeholder.com/56x56?text=No+Image"
          }
          alt="User avatar"
        />
      </a>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul className="py-2">
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AvatharSection;
