import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

export function FormSelect({ label, value, onChange, name }) {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        onChange={onChange}
        label={label}
        name={name}
      >
        <MenuItem value="employee">Employee</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </Select>
    </FormControl>
  );
}
