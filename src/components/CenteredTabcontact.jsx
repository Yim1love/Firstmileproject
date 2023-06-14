import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import ToggleButtons from "./Togglebottom";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto"; // Import font Roboto



// icons insert
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import DateRangeIcon from '@mui/icons-material/DateRange';



const FlexContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function CenteredTabscontract() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FlexContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
        sx={{ width: "1364px", height: "50px" }}
      >
        <Tab
          icon={<DensitySmallIcon />}
          sx={{
            width: "175px",
            height: "50px",
            minWidth: "0px",
            minHeight: "0px",
            padding: "6px",
            gap: "0px",
          }}
          label={
            <Typography
              variant="body2"
              component="span"
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                letterSpacing: "0.4px",
              }}
            >
              Overview
            </Typography>
          }
        />
        <Tab
          icon={<DateRangeIcon/>}
          sx={{
            width: "175px",
            height: "50px",
            minWidth: "0px",
            minHeight: "0px",
            padding: "6px",
            gap: "0px",
          }}
          label={
            <Typography
              variant="body2"
              component="span"
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                letterSpacing: "0.4px",
              }}
            >
              Renewal Date
            </Typography>
          }
        />
      </Tabs>
      <ToggleButtons />
    </FlexContainer>
  );
}
