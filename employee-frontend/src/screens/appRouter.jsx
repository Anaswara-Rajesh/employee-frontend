import { Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import React from "react";
import { employeeRouter } from "./employee/router";
import { dashboardRouter } from "./dashboard/router";

export const appRouter = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      ...dashboardRouter,
      ...employeeRouter,
    ],
  },
];
