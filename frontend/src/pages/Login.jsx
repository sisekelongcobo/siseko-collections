import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom"; // Assuming you use React Router
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
  paperContainer: {
    height: "400px",
    padding: theme.spacing(4),
  },
  registerHere: {
    marginTop: "100px",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.password) tempErrors.password = "Password is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          alert("Error logging in user");
          // Handle error message here (e.g., show error to user)
        } else {
          const responseData = await response.json();
          console.log("Form submitted:", responseData);
          // Handle successful login, such as setting authentication state or redirecting
        }
      } catch (error) {
        console.error("Error logging in user:", error);
        // Handle other errors (e.g., network issues, request setup errors)
      }
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h6" component="h1" gutterBottom>
        Login
      </Typography>
      <Paper className={classes.paperContainer}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className={classes.form}
        >
          <Grid container spacing={2}>
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
                type="password"
                variant="outlined"
                className={classes.textField}
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
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
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{ marginTop: 2 }}
            className={classes.registerHere}
          >
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register" underline="none">
              Register here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
