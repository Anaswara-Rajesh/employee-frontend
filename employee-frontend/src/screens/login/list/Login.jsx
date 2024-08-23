"use client";
import React, { useState } from "react";
import LoginForm from "../../../components/form/LoginForm";
import { useNavigate } from "react-router-dom";
import { employeeLogin } from "../../../api/api";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState({});

  async function onSubmit(request) {
    try {
      const { username, password } = request;
      if (username === "admin" && password === "admin") {
        const adminUser = {
          username: "admin",
          role: "admin",
        };
        setLoggedUser(adminUser);
        localStorage.setItem("loggedUsername", adminUser.username);
        localStorage.setItem("role", adminUser.role);
        toast.success("Login successful!");
        navigate("/dashboard");
        return;
      }
      const response = await employeeLogin(request);
      const { data } = response;
      console.log(data, "data");
  
      if (data.accessToken && data.user) {
        setLoggedUser(data.user);
        localStorage.setItem("loggedUsername", data.user.username);
        localStorage.setItem("role", data.user.role);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Failed to login. Please try again.");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Failed to login. Please try again.");
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-center mb-4">
            <a href="index.html" className="flex items-center gap-2">
              <img className="w-36" src="/employee.png" alt="Logo" />
            </a>
          </div>
          <h4 className="mb-2 text-lg">Welcome To Employee Management! 👋</h4>
          <p className="mb-4">
            Please sign-in to your account and start the adventure
          </p>
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
