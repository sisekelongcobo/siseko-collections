import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const isLoggedIn = React.useContext(AuthContext);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to="/"
            variant="h6"
            underline="none"
            color="inherit"
          >
            Siseko Collections
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {!isLoggedIn && (
            <Link
              component={RouterLink}
              to="/login"
              color="inherit"
              underline="none"
            >
              Login
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              component={RouterLink}
              to="/register"
              color="inherit"
              underline="none"
            >
              Register
            </Link>
          )}
          <Link
            component={RouterLink}
            to="/Orders"
            color="inherit"
            underline="none"
          >
            Orders
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
