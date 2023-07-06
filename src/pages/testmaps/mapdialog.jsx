import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import MapIcon from "@mui/icons-material/Map";

import ResponsiveDialog from "./demo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MapDialog() {
  const [open, setOpen] = React.useState(false);

  const handleMapIconClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MapIcon
        sx={{ color: "gray", cursor: "pointer" }}
        onClick={handleMapIconClick}
      />

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="map-dialog-slide-description"
        sx={{
            marginTop: "50px", 
          }}
      >
        <DialogTitle>เลือกที่อยู่ในแผนที่</DialogTitle>
        <DialogContent
          sx={{
            marginTop: "0px",
          }}
        >
          <DialogContentText id="map-dialog-slide-description">
            <ResponsiveDialog />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
