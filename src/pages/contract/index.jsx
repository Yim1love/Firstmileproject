import React from "react";
import {
  Box,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";

import { tokens } from "../../theme";
import { mockDatacontract, mockDataContacts } from "../../data/mockData";

import CenteredTabs from "../../components/Centered";
import CenteredTabs1 from "../../components/Centered1";

import Header from "../../components/Header";


const Contract = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "projtid", headerName: "Project ID", width: 100 },
    { field: "projectname", headerName: "Project Name", width: 200 },
    { field: "juristicname", headerName: "Juristic Name", width: 100 },

    { field: "projectstatus", headerName: "Project Status", width: 100 },
    { field: "buildings", headerName: "Buildings", width: 100 },
    { field: "units", headerName: "Units", width: 100 },
    { field: "projectsizing", headerName: "Project Sizing", width: 100 },
    {
      field: "juristiccontract",
      headerName: "Juristic Contract",
      width: 250,
      renderCell: (params) => {
        const juristiccontractDetail = params.value[0];
        console.log(params.value);
        return (
          <Box
            boxShadow={"0px 0px 5px -1px rgba(0, 0, 0, 0.25)"}
            borderRadius={10}
          >
            {juristiccontractDetail && (
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <CardMedia
                        component="img"
                        width="24px"
                        height="24px"
                        maxWidth="140px"
                        maxHeight="140px"
                        image={juristiccontractDetail.image}
                        sx={{
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}>
                          {juristiccontractDetail.name}
                        </span>
                        <Typography>{juristiccontractDetail.phone}</Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
      },
    },
    {
      field: "currentcontract",
      headerName: "Current contract",
      width: 350,
      renderCell: (params) => {
        const currentcontractDetail = params.value[0];
        // console.log(params.value);
        return (
          <Box
            boxShadow={"0px 0px 5px -1px rgba(0, 0, 0, 0.25)"}
            borderRadius={10}
          >
            {currentcontractDetail && (
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}>
                          {currentcontractDetail.name}
                        </span>
                        <Typography>{currentcontractDetail.date}</Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
      },
    },
    {
      field: "juristicpaymentdetail",
      headerName: "Juristic Payment Details",
      width: 350,
      renderCell: (params) => {
        const juristicPaymentDetail = params.value[0];
        // console.log(params.value);
        return (
          <Box
            boxShadow={"0px 0px 5px -1px rgba(0, 0, 0, 0.25)"}
            borderRadius={10}
          >
            {juristicPaymentDetail && (
              <Card sx={{ backgroundColor: juristicPaymentDetail.color }}>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <CardMedia
                        component="img"
                        width="24px"
                        height="24px"
                        maxWidth="140px"
                        maxHeight="140px"
                        image={juristicPaymentDetail.image}
                        sx={{
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" fontSize={14}>
                        <span style={{ fontWeight: "bold" }}>
                          {juristicPaymentDetail.number}
                        </span>
                        <Typography variant="body2" fontSize={10}>
                          {juristicPaymentDetail.name}
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
      },
    },
    { field: "housenumber", headerName: "House Number", width: 100 },
    { field: "buildingvillage", headerName: "Building village", width: 100 },
    { field: "soi", headerName: "Soi", width: 100 },
    { field: "street", headerName: "Street", width: 200 },
    { field: "subdistrict", headerName: "Sub-distraict", width: 100 },
    { field: "district", headerName: "District", width: 100 },
    { field: "province", headerName: "Province", width: 100 },
    { field: "postcode", headerName: "Postcode", width: 100 },
    { field: "latitude", headerName: "Latitude", width: 100 },
    { field: "longitude", headerName: "Longitude", width: 100 },
    {
      field: "connection",
      headerName: "Connection",
      width: 160,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <Box
            width="80px"
            height="10px"
            borderRadius="5px"
            bgcolor="#D9D9D9"
            position="relative"
            marginRight="5px"
          >
            <Box
              position="absolute"
              left={0}
              top={0}
              bottom={0}
              width={`${params.value}%`}
              borderRadius="5px"
              sx={{
                bgcolor: Math.round(params.value) === 100 ? "#00C853" : "#FFA337",
              }}
            />
            <Box
              position="absolute"
              left={`${params.value}%`}
              top={0}
              bottom={0}
              width={`${100 - params.value}%`}
              borderRadius="5px"
              bgcolor="#D9D9D9"
            />
          </Box>
          <Typography
            fontSize={12}
            sx={{
              color: Math.round(params.value) === 100 ? "#00C853" : "#FFA337",
            }}
          >
            {params.value}%
          </Typography>
        </Box>
      ),
    },

    { field: "portquantity", headerName: "Port Quantity", width: 100 },
    { field: "portconnect", headerName: "Port Connect", width: 100 },
    { field: "description", headerName: "Description", width: 100 },
    {
      field: "buidinglist",
      headerName: "Buidinglist",
      width: 800,
      renderCell: (params) => {
        const buidinglistDetail = params.value;
        console.log(params.value[0]);
        return (
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="flex-start"
          >
            {params.value.map((building, index) => (
              <Box
                key={index}
                boxShadow={"0px 0px 5px -1px rgba(0, 0, 0, 0.25)"}
                borderRadius={10}
                mb={1}
                mr={1} // Add marginRight to separate cards horizontally
              >
                <Card>
                  <CardContent>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {building.buldingname}
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        );
      },
    },
    {
      field: "currentAE",
      headerName: "Current AE",
      width: 250,
      renderCell: (params) => {
        const currentAEDetail = params.value[0];
        console.log(params.value);
        return (
          <Box
            boxShadow={"0px 0px 5px -1px rgba(0, 0, 0, 0.25)"}
            borderRadius={10}
          >
            {currentAEDetail && (
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <CardMedia
                        component="img"
                        width="24px"
                        height="24px"
                        maxWidth="140px"
                        maxHeight="140px"
                        image={currentAEDetail.image}
                        sx={{
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography>
                        <span style={{ fontWeight: "bold" }}>
                          {currentAEDetail.name}
                        </span>
                        <Typography fontSize={12}>
                          {currentAEDetail.role}
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        );
      },
    },
    { field: "addedDate", headerName: "Added Date", width: 100 },
    { field: "editor", headerName: "Editor", width: 100 },
  ];
  return (
    <Box m="5px" mt={-1} position="relative" width="99%" height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
      </Box>
      <CenteredTabs />
      <CenteredTabs1 />
      <Box
        m="8px 0 0 0"
        // p={"8px"}
        width="100%"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
                <DataGrid
          rows={mockDatacontract}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contract;
