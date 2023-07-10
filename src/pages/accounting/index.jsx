import { Box, Typography } from "@mui/material";
import React from "react";
import Validateid from "../../components/Validateid";



function Accounting() {
  return (
    <Box>
    <Typography
      variant="h1"
      sx={{
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // กำหนดเงาให้ Typography
      }}
    >
      Accouting
    </Typography>
    <Validateid/>
    </Box>
    
  );
}

export default Accounting;
