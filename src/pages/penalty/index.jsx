import { Typography } from "@mui/material";
import React from "react";

function Penalty() {
  return (
    <Typography
      variant="h1"
      sx={{
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // กำหนดเงาให้ Typography
      }}
    >
      Penalty
    </Typography>
  );
}

export default Penalty;
