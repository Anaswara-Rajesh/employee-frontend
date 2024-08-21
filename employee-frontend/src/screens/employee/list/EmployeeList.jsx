import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NoData from "../../../components/noData/NoData";
import TableTop from "../../../components/tables/TableTop";
import PrimaryTable from "../../../components/tables/Table";
import { getEmployees } from "../../../api/api";

function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployees();
        setEmployeeData(response.data);

        // Extract unique departments from the data
        const uniqueDepartments = [
          ...new Set(response.data.map((employee) => employee.department)),
        ];
        setDepartments(uniqueDepartments);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
    };

    fetchEmployees();
  }, []);

  const columns = [
    { accessorKey: "id", header: "Id", cell: ({ row }) => row.index + 1 },
    { accessorKey: "employeeCode", header: "Employee Code" },
    { accessorKey: "firstName", header: "First Name" },
    { accessorKey: "lastName", header: "Last Name" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "mobile", header: "Phone" },
  ];

  const filteredEmployees = employeeData.filter(
    (employee) => !departmentFilter || employee.department === departmentFilter
  );

  return (
    <div className="mx-auto">
      <TableTop title="Employees"></TableTop>
      <div className="flex justify-end pt-2">
        <DepartmentFilter
          departmentFilter={departmentFilter}
          setDepartmentFilter={setDepartmentFilter}
          departments={departments}
        />
      </div>
      <Box paddingY={4} borderRadius={"5px"}>
        {filteredEmployees.length > 0 ? (
          <PrimaryTable data={filteredEmployees} columns={columns} />
        ) : (
          <div>
            <NoData />
          </div>
        )}
      </Box>
    </div>
  );
}

function DepartmentFilter({
  departmentFilter,
  setDepartmentFilter,
  departments,
}) {
  return (
    <select
      value={departmentFilter}
      onChange={(e) => setDepartmentFilter(e.target.value)}
      className="bg-orange-400 border rounded p-2"
      placeholder="Filter By Department"
    >
      <option value="">Filter By Department</option>
      {departments.map((department) => (
        <option key={department} value={department}>
          {department}
        </option>
      ))}
    </select>
  );
}

export default EmployeeList;
