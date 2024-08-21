import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NoData from "../../../components/noData/NoData";
import TableTop from "../../../components/tables/TableTop";
import PrimaryTable from "../../../components/tables/Table";
import { createEmployee, getEmployees, updateEmployee, deleteEmployee } from "../../../api/api"; 
import { AddEmployee } from "../../../components/modal/AddEmployee";
import { EditEmployee } from "../../../components/modal/EditEmployee"; 
import toast from "react-hot-toast";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [departments, setDepartments] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployeeData(response.data);

     
      const uniqueDepartments = [
        ...new Set(response.data.map((employee) => employee.department)),
      ];
      setDepartments(uniqueDepartments);
    } catch (error) {
      console.error("Error fetching employees", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (employee) => {
    setSelectedEmployee(employee); 
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedEmployee(null); 
  };

  const handleSubmitAddModal = async (formData) => {
    try {
      await createEmployee(formData);
      toast.success("Employee created successfully!");
      setIsAddModalOpen(false);
      fetchEmployees();
    } catch (error) {
      toast.error("Failed to create employee. Please try again.");
      console.error("Error creating employee:", error);
    }
  };

  const handleSubmitEditModal = async (formData) => {
    try {
      await updateEmployee(selectedEmployee.id, formData);
      toast.success("Employee updated successfully!");
      setIsEditModalOpen(false);
      fetchEmployees();
    } catch (error) {
      toast.error("Failed to update employee. Please try again.");
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (employee) => {
    try {
      await deleteEmployee(employee.id);
      toast.success("Employee deleted successfully!");
      fetchEmployees();
    } catch (error) {
      toast.error("Failed to delete employee. Please try again.");
      console.error("Error deleting employee:", error);
    }
  };

  const columns = [
    { accessorKey: "id", header: "Id", cell: ({ row }) => row.index + 1 },
    { accessorKey: "employeeCode", header: "Employee Code" },
    { accessorKey: "firstName", header: "First Name" },
    { accessorKey: "lastName", header: "Last Name" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "mobile", header: "Phone" },
    {
      accessorKey: "actions",
      header: "Action",
      cell: ({ row }) => (
        <div>
          <ModeEditIcon
            aria-label="edit"
            color="primary"
            onClick={() => handleOpenEditModal(row.original)}
          />
          <DeleteIcon
            aria-label="delete"
            sx={{ color: "darkred" }}
            onClick={() => handleDelete(row.original)}
          />
        </div>
      ),
    },
  ];

  const filteredEmployees = employeeData.filter(
    (employee) => !departmentFilter || employee.department === departmentFilter
  );

  return (
    <div className="mx-auto">
      <TableTop
        title="Employees"
        buttons={[
          {
            label: "Add Employee",
            buttonType: "PRIMARY",
            onClick: handleOpenAddModal,
          },
        ]}
      />
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
      <AddEmployee
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleSubmitAddModal}
      />
      <EditEmployee
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSubmit={handleSubmitEditModal}
        initialData={selectedEmployee}
      />
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
