import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import DashboardCard from "../../../components/cards/DashboardCard";

import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import { getEmployees } from "../../../api/api";

function DashboardList() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);

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

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="font-bold text-lg text-slate-900">Dashboard</h1>
      <Box paddingY={1} borderRadius={"5px"}></Box>
      <div className="flex gap-10 py-3 sm:flex-row sm:items-center sm:justify-between flex-col text-lg items-center justify-center">
        Welcome Admin!
      </div>
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
    </div>
  );
}

export default DashboardList;
