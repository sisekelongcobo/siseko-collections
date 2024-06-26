import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  sectionSubtitle: {
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
}));

const Contact = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., sending data to server)
    console.log("Form submitted");
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h6" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h5" className={classes.sectionSubtitle}>
        Let's talk about your queries
      </Typography>
      <Typography variant="body1" className={classes.sectionTitle}>
        Drop us a line through the form below and we will get back to you
      </Typography>
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.textField}
          sx={{ marginTop: 3 }} // Add top margin here
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
