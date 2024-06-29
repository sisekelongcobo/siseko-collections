import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  textField: {
    borderRadius: "16px",
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(4),
  },
}));

const Register = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validate = () => {
    let tempErrors = {};
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.password) tempErrors.password = "Password is required.";
    else if (!passwordRegex.test(formData.password))
      tempErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a number, and a symbol.";
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          formData
        );
        console.log("Form submitted:", response.data);
        // Handle successful registration (e.g., redirect to login page)
      } catch (error) {
        console.error("Error registering user:", error.response.data);
        // Handle error (e.g., show error message)
      }
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h6" component="h1" gutterBottom>
        Register
      </Typography>
      <Paper elevation={3} className={classes.paper}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className={classes.form}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                variant="outlined"
                className={classes.textField}
                value={formData.firstName}
                onChange={handleChange}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="outlined"
                className={classes.textField}
                value={formData.lastName}
                onChange={handleChange}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                className={classes.textField}
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                className={classes.textField}
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                className={classes.textField}
                value={formData.confirmPassword}
                onChange={handleChange}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showPassword}
                    onChange={handleToggleShowPassword}
                    color="primary"
                  />
                }
                label="Show Password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.submitButton}
            sx={{ marginTop: 3 }}
          >
            Register
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Already have an account?{" "}
            <MuiLink component={RouterLink} to="/login">
              Login here
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
