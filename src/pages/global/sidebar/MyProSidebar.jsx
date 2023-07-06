// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

// part insert Icon นะจ๊ะ
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonChalkboard, faPeopleGroup,faMapLocation,faBoxesStacked  } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildings,BsGear } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Icon } from '@iconify/react';


// part insert Icon นะจ๊ะ



import { useSidebarContext } from "./sidebarContext";


import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const handleItemClick = (title) => {
    setSelected(title);
  };

  return (
    <Box
      sx={{
        
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
          
          
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
          fontSize: "25px",
          
        },
        "& .menu-item": {
          margin: "-5px 1px !important",
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
          
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
          
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                {/* <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography> */}
                <IconButton
                 onClick={broken ? toggleSidebar : collapseSidebar}
                style={{ marginLeft: "auto" }}
                  // onClick={
                  //   broken ? () => toggleSidebar() : () => collapseSidebar()
                  // }
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* {!collapsed && (
            <Box mb="25px">
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
                  width="100px"
                  height="100px"
                  src={"../../assets/user.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Arsit Pijomboot
                </Typography>
              </Box>
            </Box>
          )} */}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              detail in sert
            </Typography>

            <Item
              title="Job & Planing"
              to="/jobplaning"
              icon={<Icon icon="fluent:text-bullet-list-square-toolbox-20-filled" />}
              selected={selected}
              setSelected={setSelected}
              onItemClick={() => handleItemClick("Job & Planing")}
            />
            <Item
              title="Penalty"
              to="/penalty"
              icon={<Icon icon="codicon:warning"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Audit"
              to="/audit"
              icon={<AiOutlineFileSearch/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Procurement"
              to="/procurement"
              icon={<AddShoppingCartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Accounting"
              to="/accounting"
              icon={<Icon icon="dashicons:money-alt" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Human resource"
              to="/humanresource"
              icon={<Icon icon="healthicons:health-worker-form" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Team"
              to="/team1"
              icon={<FontAwesomeIcon icon={faPeopleGroup } />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Zone"
              to="/zone"
              icon={<FontAwesomeIcon icon={faMapLocation } />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Building"
              to="/building"
              icon={<BsBuildings/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contract"
              to="/contract"
              icon={<Icon icon="clarity:contract-solid" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Asset"
              to="/asset"
              icon={<Icon icon="twemoji:cat-face" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Inventory"
              to="/inventory"
              icon={<FontAwesomeIcon icon={faBoxesStacked } />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="User"
              to="/user"
              icon={<FaRegUserCircle/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              to="/setting"
              icon={<BsGear/>}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Item
              title="Testcard"
              to="/testcard"
              icon={<BsGear/>}
              selected={selected}
              setSelected={setSelected}
            /> 
            <Item
              title="Testmaps"
              to="/testmaps"
              icon={<BsGear/>}
              selected={selected}
              setSelected={setSelected}
            /> 

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Test detail
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon sx={{ fontSize: "25px" }}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            /> 

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon sx={{ fontSize: "25px" }} />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
