"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const Dailog = () => {
  const [open, setOpen] = useState(true);

  const handleClickopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} onLoad={handleClickopen}>
      <DialogTitle>
        <Typography textAlign={"center"}>confirmation</Typography>
      </DialogTitle>
      <Divider></Divider>
      <DialogContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div>
          <Typography>are you sure you want to continue?</Typography>
          <Typography>are you sure you want to continue?</Typography>
        </div>
        <Typography>are you sure you want to continue?</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={handleClickopen}>
          yes
        </Button>
        <Button variant="contained" onClick={handleClose}>
          no
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dailog;
