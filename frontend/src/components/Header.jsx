import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Siseko Collections
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/account"
            color="inherit"
            underline="none"
          >
            Account
          </Link>
          <Link
            component={RouterLink}
            to="/categories"
            color="inherit"
            underline="none"
          >
            Categories
          </Link>
          <Link
            component={RouterLink}
            to="/AboutUs"
            color="inherit"
            underline="none"
          >
            About Us
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            color="inherit"
            underline="none"
          >
            Contact
          </Link>
          <Link
            component={RouterLink}
            to="/cart"
            color="inherit"
            underline="none"
          >
            Cart
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
