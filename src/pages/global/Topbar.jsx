import React from "react";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import {
  useTheme,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "64px", backgroundColor: "#f5f5f5" }}>
    <Box display="flex" justifyContent="flex-end" p={2}>
      {/* <Box display="flex">
        {broken && !rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          p={0.2}
          borderRadius={1}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box> */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',margin:'6px' }}>
        
          <Typography variant="h6" color={colors.grey[300]}>
            Mr. Arsit Pijomboots
          </Typography>
        </Box>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              "& .avater-image": {
                backgroundColor: colors.primary[500],
              },
            }}
          >
            <img
              className="avater-image"
              alt="profile user"
              width="40px"
              height="40px"
              src={"../../assets/IB1001.png"}
              style={{ cursor: "pointer", borderRadius: "50%" }}
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>User information</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
            </Menu>
          </Box>
        

        <Box>
          
        </Box>
        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
    </div>
  );
};

export default Topbar;
