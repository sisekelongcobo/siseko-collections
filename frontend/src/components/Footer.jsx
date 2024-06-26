import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          &copy; 2024 Siseko Collections. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link
            component={RouterLink}
            to="/terms"
            color="inherit"
            underline="hover"
          >
            Terms & Conditions
          </Link>
          {" | "}
          <Link
            component={RouterLink}
            to="/privacy"
            color="inherit"
            underline="hover"
          >
            Privacy Policy
          </Link>
          {" | "}
          <Link
            component={RouterLink}
            to="/support"
            color="inherit"
            underline="hover"
          >
            Customer Support
          </Link>
          {" | "}
          <Link
            component={RouterLink}
            to="/contact"
            color="inherit"
            underline="none"
          >
            Contact Us
          </Link>
          {" | "}
          <Link
            component={RouterLink}
            to="/AboutUs"
            color="inherit"
            underline="none"
          >
            About Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
