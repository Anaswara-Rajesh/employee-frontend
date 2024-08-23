import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function LoginForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const { handleSubmit, getFieldProps } = formik;

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email or Username
          </label>
          <TextField
            type="text"
            className="form-control"
            id="email"
            name="email-username"
            placeholder="Enter email or username"
            {...getFieldProps("username")}
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="mb-3 form-password-toggle">
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor="password">
              Password
            </label>
          </div>
          <TextField
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter password"
            aria-describedby="password"
            {...getFieldProps("password")}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="mb-3"></div>
        <div className="mb-3">
          {formik.isSubmitting ? (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled
              startIcon={<CircularProgress size={20} />}
            >
              Please wait ...
            </Button>
          ) : (
            <Button variant="contained" color="primary" fullWidth type="submit">
              Sign In
            </Button>
          )}
        </div>
      </>
    </form>
  );
}

export default LoginForm;
