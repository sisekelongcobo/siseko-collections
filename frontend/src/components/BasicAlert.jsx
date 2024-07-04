import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AlertComponent() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Button onClick={handleAlert}>Show Alert</Button>
      {showAlert && (
        <Alert severity="info" onClose={handleClose}>
          This is an important message!
        </Alert>
      )}
    </Stack>
  );
}
