import React from "react";
import { useState } from 'react';
import {
  Box,
  useTheme,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
//icon โหลด pdf 
import IconButton from '@mui/material/IconButton'; 
import GetAppIcon from '@mui/icons-material/GetApp';
import FolderIcon from '@mui/icons-material/Folder';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { tokens } from "../../theme";
import { mockDatacontractproject } from "../../data/mockData";

import moment from "moment";

import CenteredTabs from "../../components/Centered";
import CenteredTabscontract from "../../components/CenteredTabcontact";

const Contractproject = () => {
  const theme = useTheme();

  // เพิ่ม pop up PDF
  const ScannedContractCell = ({ value }) => {
    const [open, setOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState('');

    const handleDownloadPdf = (pdfUrl, fileName) => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = fileName;
      link.click();
    };

    const handleClose = () => {
      setOpen(false);
      setSelectedPdf('');
    };

    const pdf = value[0].pdf;

    return (
      <>
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <FolderIcon style={{ marginRight: '5px' }} />
          <Typography>{pdf.length} file</Typography>
        </div> */}
        <div style={{display: 'flex', alignItems: 'center', marginTop: '0px' }}>
          <IconButton onClick={() => setOpen(true)} color="primary">
            <FolderIcon />
          </IconButton>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Download PDF</DialogTitle>
          <DialogContent>
            {pdf.map((item, index) => (
              <div key={index}>
                <IconButton onClick={() => handleDownloadPdf(item.pdf, `pdf${index + 1}.pdf`)} color="primary"> 
                  <GetAppIcon />
                </IconButton>
                <Typography>{item.pdf}</Typography>
              </div>
            ))}
          </DialogContent>
        </Dialog>
      </>
    );
  };
  // const ScannedContractCard = ({ scannedContract }) => {
  //   const [open, setOpen] = useState(false);
  //   const [selectedPdf, setSelectedPdf] = useState('');
  
  //   const handleViewPdf = (pdfUrl) => {
  //     setSelectedPdf(pdfUrl);
  //     setOpen(true);
  //   };
  
  //   const handleClose = () => {
  //     setOpen(false);
  //     setSelectedPdf('');
  //   };
  
  //   return (
  //     <>
  //       <Card>
  //         <CardContent>
  //           <Typography gutterBottom variant="h5" component="div">
  //             Scanned Contract
  //           </Typography>
  //           {scannedContract.map((item, index) => (
  //             <Button
  //               key={index}
  //               onClick={() => handleViewPdf(item.pdf)}
  //               style={{ marginTop: '10px' }}
  //               variant="contained"
  //               color="primary"
  //             >
  //               View PDF {index + 1}
  //             </Button>
  //           ))}
  //         </CardContent>
  //       </Card>
  
  //       <Dialog open={open} onClose={handleClose}>
  //         <DialogTitle>PDF Viewer</DialogTitle>
  //         <DialogContent>
  //           <embed src={selectedPdf} width="100%" height="500px" type="application/pdf" />
  //         </DialogContent>
  //       </Dialog>
  //     </>
  //   );
  // };

  const colors = tokens(theme.palette.mode);
  // function การหาจำนนปี
  function calculateContractPeriod(startdate, expirationdate) {
    const start = moment(startdate, "DD-MM-YYYY");
    const end = moment(expirationdate, "DD-MM-YYYY");
    const years = end.diff(start, "years");
    return years;
  }

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "contractID", headerName: "Contract ID", width: 120 },
    { field: "projectname", headerName: "Project name", width: 160 },
    { field: "juristicname", headerName: "Juristic name", width: 160 },
    {
      field: "startdate",
      headerName: "Startdate",
      width: 200,
      sortComparator: (v1, v2, param1, param2) => {
        const date1 = moment(v1, "DD-MM-YYYY").toDate();
        const date2 = moment(v2, "DD-MM-YYYY").toDate();
        if (date1 < date2) {
          return -1;
        }
        if (date1 > date2) {
          return 1;
        }
        return 0;
      },
      valueGetter: (params) =>
        moment(params.value, "DD-MM-YYYY").format("DD/MM/YYYY"),
    },
    {
      field: "expirationdate",
      headerName: "Expiration Date",
      width: 200,
      sortComparator: (v1, v2, param1, param2) => {
        const date1 = moment(v1, "DD-MM-YYYY").toDate();
        const date2 = moment(v2, "DD-MM-YYYY").toDate();
        if (date1 < date2) {
          return -1;
        }
        if (date1 > date2) {
          return 1;
        }
        return 0;
      },
      valueGetter: (params) =>
        moment(params.value, "DD-MM-YYYY").format("DD/MM/YYYY"),
    },
    { field: "buildings", headerName: "Buildings", width: 160 },
    { field: "units", headerName: "Units", width: 160 },
    { field: "projectsizing", headerName: "Project sizing", width: 160 },
    {
      field: "contractperiod",
      headerName: "Contract Period (Year)",
      width: 150,
      valueGetter: (params) => {
        const startdate = params.row.startdate;
        const expirationdate = params.row.expirationdate;
        const contractperiod = calculateContractPeriod(
          startdate,
          expirationdate
        );
        return contractperiod;
      },
    },
    {
      field: "ontractRenewalDate",
      headerName: "Contract Renewal Date",
      width: 200,
      sortComparator: (v1, v2, param1, param2) => {
        const date1 = moment(v1, "DD-MM-YYYY").toDate();
        const date2 = moment(v2, "DD-MM-YYYY").toDate();
        if (date1 < date2) {
          return -1;
        }
        if (date1 > date2) {
          return 1;
        }
        return 0;
      },
      valueGetter: (params) =>
        moment(params.value, "DD-MM-YYYY").format("DD/MM/YYYY"),
    },
    {
      field: "contractPaymentCondition",
      headerName: "Contract Payment Condition",
      width: 200,
      sortComparator: (v1, v2, param1, param2) => {
        const date1 = moment(v1, "DD-MM-YYYY").toDate();
        const date2 = moment(v2, "DD-MM-YYYY").toDate();
        if (date1 < date2) {
          return -1;
        }
        if (date1 > date2) {
          return 1;
        }
        return 0;
      },
      valueGetter: (params) =>
        moment(params.value, "DD-MM-YYYY").format("DD/MM/YYYY"),
    },
    {
      field: "juristicPaymentDetails",
      headerName: "Juristic Payment Details",
      width: 270,
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
    {
      field: "juristicContact",
      headerName: "Juristic Contact",
      width: 270,
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
                          {juristicPaymentDetail.name}
                        </span>
                        <Typography variant="body2" fontSize={10}>
                          {juristicPaymentDetail.phone}
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
    {
      field: "scannedContract",
      headerName: "Scanned Contract (pdf)",
      width: 250,
      renderCell: (params) => {
        const scannedContract = params.value[0];
    
        return (
          <>
            <ScannedContractCell  value={params.value} />
            <Typography>{scannedContract.name}</Typography>
          </>
        );
      },
    },
    
    { field: "housenumber", headerName: "House number", width: 200 },
    { field: "buildingVillage", headerName: "Building/Village", width: 200 },
    { field: "soi", headerName: "Soi", width: 100 },
    { field: "street", headerName: "Street", width: 200 },
    { field: "subdistrict", headerName: "Sub-district", width: 100 },
    { field: "district", headerName: "District", width: 100 },
    { field: "province", headerName: "Province", width: 100 },
    { field: "postcode", headerName: "Postcode", width: 100 },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "aeCaretaker",
      headerName: "AE (Caretaker)",
      width: 270,
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
                          {juristicPaymentDetail.name}
                        </span>
                        <Typography variant="body2" fontSize={10}>
                          {juristicPaymentDetail.role}
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
    {
      field: "addedDate",
      headerName: "Added Date",
      width: 200,
      sortComparator: (v1, v2, param1, param2) => {
        const date1 = moment(v1, "DD-MM-YYYY").toDate();
        const date2 = moment(v2, "DD-MM-YYYY").toDate();
        if (date1 < date2) {
          return -1;
        }
        if (date1 > date2) {
          return 1;
        }
        return 0;
      },
      valueGetter: (params) =>
        moment(params.value, "DD-MM-YYYY").format("DD/MM/YYYY"),
    },
    { field: "editor", headerName: "Editor", width: 200 },
  ];



  return (
    <Box m="5px" mt={-1} position="relative" width="99%" height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      ></Box>
      <CenteredTabs />
      <CenteredTabscontract />
      <Box
        m="8px 0 0 0"
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
          rows={mockDatacontractproject}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contractproject;
