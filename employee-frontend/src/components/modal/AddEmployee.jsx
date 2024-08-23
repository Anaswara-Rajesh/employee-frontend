import React, { useState } from "react";

import { CustomModal } from "./CustomModal";
import { FormInput } from "../form-inputs/FormInput";
import { FormSelect } from "../form-inputs/FormSelect";

export function AddEmployee({ open, onClose, onSubmit }) {
  const [formValues, setFormValues] = useState({
    employeeCode: "",
    firstName: "",
    lastName: "",
    department: "",
    role: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formValues);
    onClose();
  };

  return (
    <CustomModal
      open={open}
      onClose={onClose}
      title="Add Employee"
      onSubmit={handleSubmit}
    >
      <FormInput
        label="Employee Code"
        name="employeeCode"
        value={formValues.employeeCode}
        onChange={handleChange}
      />
      <FormInput
        label="First Name"
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
      />
      <FormInput
        label="Last Name"
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
      />
      <FormSelect
        name="role"
        label="Role"
        value={formValues.role}
        onChange={handleChange}
      />
      <FormInput
        label="Department"
        name="department"
        value={formValues.department}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <FormInput
        label="Mobile"
        name="mobile"
        value={formValues.mobile}
        onChange={handleChange}
      />
      <FormInput
        label="Username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />
    </CustomModal>
  );
}
