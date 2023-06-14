import { Typography } from "@mui/material";
import React from "react";

function Zone() {
  return (
    <Typography
      variant="h1"
      sx={{
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // กำหนดเงาให้ Typography
      }}
    >
      Zone
    </Typography>
  );
}

export default Zone;
