import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          label="Project"
          LinkComponent={Link}
          to="/contract"
          sx={{
            fontfamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
          }}
        />
        <Tab label="CONTRACT" 
        LinkComponent={Link}
        to="/contractproject"
        sx={{
          fontfamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0.4px",
          textTransform: "uppercase",
        }}/>
      </Tabs>
    </Box>
  );
}
