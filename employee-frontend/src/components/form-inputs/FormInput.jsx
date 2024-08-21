import React from "react";
import { TextField } from "@mui/material";

export function FormInput({ label, name, value, onChange }) {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
}
