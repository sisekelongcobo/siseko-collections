import { Box, Typography, Link as MuiLink } from "@mui/material";
import React from "react";
import { useStyles } from "./Register";
import { Link as RouterLink } from "react-router-dom";

const Orders = () => {
  const classes = useStyles();

  return (
    <Box className={classes.formContainer}>
      <Typography variant="h4">Orders</Typography>
      <Typography style={{ marginTop: 100 }}>
        <MuiLink underline="none" component={RouterLink} to={"/"}>
          Go to Home.
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default Orders;
