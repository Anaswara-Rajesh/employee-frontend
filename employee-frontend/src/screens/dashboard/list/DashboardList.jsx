import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import DashboardCard from "../../../components/cards/DashboardCard";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import { getEmployeeByUserName, getEmployees, uploadProfilePicture } from "../../../api/api";
import toast from "react-hot-toast";

function DashboardList() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [employeeDetail, setEmployeeDetail] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState(null);
  const baseURL = "http://localhost:5000";

  const userRole = localStorage.getItem("role");
  const loggerUserName = localStorage.getItem("loggedUsername");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        setEmployeeCount(response.data.length);
        const uniqueDepartments = [
          ...new Set(response.data.map((employee) => employee.department)),
        ];
        setDepartmentCount(uniqueDepartments.length);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };

    const userDetails = async () => {
      try {
        const res = await getEmployeeByUserName(loggerUserName);
        setEmployeeDetail(res?.data);
        setProfilePicture(res?.data?.profilePicture);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmployees();
    if (userRole === "employee") {
      userDetails();
    }
  }, [userRole, loggerUserName]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !employeeDetail) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", employeeDetail.id);

    try {
      const result = await uploadProfilePicture(formData);
      setProfilePicture(result.data.profilePicturePath);
      toast.success("Profile picture uploaded successfully!");
      console.log("Profile picture uploaded:", result.data.profilePicturePath);
    } catch (error) {
      toast.error("Failed to upload profile picture.");
      console.error("Failed to upload profile picture:", error);
    }
  };
  console.log(profilePicture,"profilePicture");
  

  return (
    <div className="mx-auto">
      <h1 className="font-bold text-lg text-slate-900">Dashboard</h1>
      <Box paddingY={1} borderRadius={"5px"}></Box>
      <div className="flex gap-10 py-3 sm:flex-row sm:items-center sm:justify-between flex-col text-lg items-center justify-center">
        Hello {loggerUserName} Welcome to Employee Management!
      </div>
      {userRole === "admin" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <DashboardCard
            text="User Count"
            count={employeeCount}
            bgColor="bg-amber-50"
            icon={<GroupIcon />}
          />
          <DashboardCard
            text="Department Count"
            count={departmentCount}
            bgColor="bg-blue-50"
            icon={<SchoolIcon />}
          />
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-4 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Profile</h2>
          <div className="flex items-center space-x-4">
            {profilePicture ? (
              <img
                src={`${baseURL}${profilePicture}`}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 border-2 border-gray-300 flex items-center justify-center text-gray-700 text-lg font-semibold">
                No Photo
              </div>
            )}
            <div className="flex flex-col space-y-2">
              <p className="text-base font-medium text-gray-700">
                <span className="font-semibold">Name:</span>
                <span className="ml-2">
                  {employeeDetail?.firstName} {employeeDetail?.lastName}
                </span>
              </p>
              <p className="text-base text-gray-600">
                <span className="font-semibold">Department:</span>
                <span className="ml-2">{employeeDetail?.department}</span>
              </p>
              <p className="text-base text-gray-600">
                <span className="font-semibold">Email:</span>
                <span className="ml-2">{employeeDetail?.email}</span>
              </p>
              <p className="text-base text-gray-600">
                <span className="font-semibold">Mobile:</span>
                <span className="ml-2">{employeeDetail?.mobile}</span>
              </p>
              <input type="file" onChange={handleFileChange} className="mt-4" />
              <Button
                variant="contained"
                onClick={handleUpload}
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600"
              >
                Upload Profile Picture
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardList;
