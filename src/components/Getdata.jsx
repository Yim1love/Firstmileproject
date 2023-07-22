import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Getdata() {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://94.74.113.242/vendor-query-service/api/v1/vendors/"
      );
      const dataToRow = response.data;
      updatedTableData(dataToRow);
    } catch (error) {
      console.error(error);
    }
  };

  const updatedTableData = (dataToRow) => {
    setTableData(
      dataToRow.map((row, index) => ({
        ...row,
        id: index + 1,
        color: "green",
      }))
    );

    const columns = [
      { field: "vendorType", headerName: "Vendor Type", minWidth: 100 },
      { field: "type", headerName: "Type", minWidth: 100 },
      { field: "name", headerName: "Name", minWidth: 100 },
      // { field: "currentAddress.id", headerName: "Current Address ID", minWidth: 100 },
      {
        field: "currentAddress.houseNumber",
        headerName: "House Number",
        minWidth: 100,
      },
      { field: "currentAddress.moo", headerName: "Moo", minWidth: 100 },
      {
        field: "currentAddress.buildings",
        headerName: "Buildings",
        minWidth: 100,
      },
      { field: "currentAddress.soi", headerName: "Soi", minWidth: 100 },
      { field: "currentAddress.street", headerName: "Street", minWidth: 100 },
      {
        field: "currentAddress.subDistrict",
        headerName: "Sub District",
        minWidth: 100,
      },
      {
        field: "currentAddress.district",
        headerName: "District",
        minWidth: 100,
      },
      {
        field: "currentAddress.province",
        headerName: "Province",
        minWidth: 100,
      },
      
      {
        field: "currentAddress.location.latitude",
        headerName: "Latitude",
        minWidth: 100,
      },
      {
        field: "currentAddress.location.longitude",
        headerName: "Longitude",
        minWidth: 100,
      },
      {
        field: "currentAddress.postcode",
        headerName: "Postcode",
        minWidth: 100,
      },
      { field: "taxId", headerName: "Tax ID", minWidth: 100 },
      // { field: "taxIdAddress.id", headerName: "Tax ID Address ID", minWidth: 100 },
      {
        field: "taxIdAddress.houseNumber",
        headerName: "House Number",
        minWidth: 100,
      },
      { field: "taxIdAddress.moo", headerName: "Moo", minWidth: 100 },
      {
        field: "taxIdAddress.buildings",
        headerName: "Buildings",
        minWidth: 100,
      },
      { field: "taxIdAddress.soi", headerName: "Soi", minWidth: 100 },
      { field: "taxIdAddress.street", headerName: "Street", minWidth: 100 },
      {
        field: "taxIdAddress.subDistrict",
        headerName: "Sub District",
        minWidth: 100,
      },
      { field: "taxIdAddress.district", headerName: "District", minWidth: 100 },
      { field: "taxIdAddress.province", headerName: "Province", minWidth: 100 },
      // { field: "taxIdAddress.location.id", headerName: "Location ID", minWidth: 100 },
      {
        field: "taxIdAddress.location.latitude",
        headerName: "Latitude",
        minWidth: 100,
      },
      {
        field: "taxIdAddress.location.longitude",
        headerName: "Longitude",
        minWidth: 100,
      },
      { field: "taxIdAddress.postcode", headerName: "Postcode", minWidth: 100 },
      // { field: "contact[0].id", headerName: "Contact ID", minWidth: 100 },
      {
        field: "contact[0].firstname",
        headerName: "First Name",
        minWidth: 100,
      },
      { field: "contact[0].lastname", headerName: "Last Name", minWidth: 100 },
      { field: "contact[0].position", headerName: "Position", minWidth: 100 },
      { field: "contact[0].agency", headerName: "Agency", minWidth: 100 },
      { field: "contact[0].lindId", headerName: "Lind ID", minWidth: 100 },
      {
        field: "contact[0].telephone1",
        headerName: "Telephone 1",
        minWidth: 100,
      },
      {
        field: "contact[0].telephone2",
        headerName: "Telephone 2",
        minWidth: 100,
      },
      { field: "contact[0].email1", headerName: "Email 1", minWidth: 100 },
      { field: "contact[0].email2", headerName: "Email 2", minWidth: 100 },
      { field: "contact[0].score", headerName: "Score", minWidth: 100 },
      // { field: "certificateList[0].id", headerName: "Certificate ID", minWidth: 100 },
      { field: "certificateList[0].title", headerName: "Certificate", minWidth: 100 },
      // { field: "certificateList[0].dataBase64", headerName: "DataBase 64", minWidth: 100 },
      // { field: "pp20List[0].id", headerName: "PP20 ID", minWidth: 100 },
      { field: "pp20List[0].title", headerName: "กพ.20", minWidth: 100 },
      // { field: "pp20List[0].dataBase64", headerName: "DataBase 64", minWidth: 100 },
      // { field: "personalIdList[0].id", headerName: "Personal ID", minWidth: 100 },
      { field: "personalIdList[0].title", headerName: "บัตรประชาชน", minWidth: 100 },
      // { field: "personalIdList[0].dataBase64", headerName: "DataBase 64", minWidth: 100 },
      // { field: "bankAccountList[0].id", headerName: "Bank Account ID", minWidth: 100 },
      {
        field: "bankAccountList[0].bankName",
        headerName: "Bank Name",
        minWidth: 100,
      },
      {
        field: "bankAccountList[0].bankId",
        headerName: "Bank ID",
        minWidth: 100,
      },
      {
        field: "bankAccountList[0].branchName",
        headerName: "Branch Name",
        minWidth: 100,
      },
      {
        field: "bankAccountList[0].accountName",
        headerName: "Account Name",
        minWidth: 150,
      },
      // { field: "by.id", headerName: "By ID", minWidth: 100 },
      { field: "by.userId", headerName: "User ID", minWidth: 100 },
      { field: "by.username", headerName: "Username", minWidth: 100 },
     
      { field: "vendorActive", headerName: "Vendor Active", minWidth: 100 },
    ];
    setColumns(columns);
  };

  // const getFieldContent = (row, field) => {
  //   const nestedFields = field.split(".");
  //   let content = row;
  //   for (let i = 0; i < nestedFields.length; i++) {
  //     const nestedField = nestedFields[i];
  //     if (content && content.hasOwnProperty(nestedField)) {
  //       content = content[nestedField];
  //       // ตรวจสอบถ้าเป็นอาร์เรย์และมีค่าตัวแรกให้ใช้ดัชนี [0]
  //       if (Array.isArray(content) && content.length > 0) {
  //         content = content[0];
  //       }
  //     } else {
  //       content = "";
  //       break;
  //     }
  //   }
  //   return content;
  // };

  return (
    <div>
      <h1>Vendor list</h1>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.vendorType}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.currentAddress.houseNumber}</TableCell>
                  <TableCell>{row.currentAddress.moo}</TableCell>
                  <TableCell>{row.currentAddress.buildings}</TableCell>
                  <TableCell>{row.currentAddress.soi}</TableCell>
                  <TableCell>{row.currentAddress.street}</TableCell>
                  <TableCell>{row.currentAddress.subDistrict}</TableCell>
                  <TableCell>{row.currentAddress.district}</TableCell>
                  <TableCell>{row.currentAddress.province}</TableCell>
                  <TableCell>{row.currentAddress.location.latitude}</TableCell>
                  <TableCell>{row.currentAddress.location.longitude}</TableCell>
                  <TableCell>{row.currentAddress.postcode}</TableCell>
                  <TableCell>{row.taxId}</TableCell>
                  <TableCell>{row.taxIdAddress.houseNumber}</TableCell>
                  <TableCell>{row.taxIdAddress.moo}</TableCell>
                  <TableCell>{row.taxIdAddress.buildings}</TableCell>
                  <TableCell>{row.taxIdAddress.soi}</TableCell>
                  <TableCell>{row.taxIdAddress.street}</TableCell>
                  <TableCell>{row.taxIdAddress.subDistrict}</TableCell>
                  <TableCell>{row.taxIdAddress.district}</TableCell>
                  <TableCell>{row.taxIdAddress.province}</TableCell>
                  <TableCell>{row.taxIdAddress.location.latitude}</TableCell>
                  <TableCell>{row.taxIdAddress.location.longitude}</TableCell>
                  <TableCell>{row.taxIdAddress.postcode}</TableCell>
                  <TableCell>{row.contact[0].firstname}</TableCell>
                  <TableCell>{row.contact[0].lastname}</TableCell>
                  <TableCell>{row.contact[0].position}</TableCell>
                  <TableCell>{row.contact[0].agency}</TableCell>
                  <TableCell>{row.contact[0].lindId}</TableCell>
                  <TableCell>{row.contact[0].telephone1}</TableCell>
                  <TableCell>{row.contact[0].telephone2}</TableCell>
                  <TableCell>{row.contact[0].email1}</TableCell>
                  <TableCell>{row.contact[0].email2}</TableCell>
                  <TableCell>{row.contact[0].score}</TableCell>
                  <TableCell>{row.certificateList[0].title}</TableCell>
                  <TableCell>{row.pp20List[0].title}</TableCell>
                  <TableCell>{row.personalIdList[0].title}</TableCell>
                  <TableCell>{row.bankAccountList[0].bankName}</TableCell>
                  <TableCell>{row.bankAccountList[0].bankId}</TableCell>
                  <TableCell>{row.bankAccountList[0].branchName}</TableCell>
                  <TableCell>{row.bankAccountList[0].accountName}</TableCell>
                  <TableCell>{row.by.userId}</TableCell>
                  <TableCell>{row.by.username}</TableCell>
                  <TableCell>{row.by.vendorActive}</TableCell>






                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Getdata;

{
  /* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>vendorType</TableCell>
              <TableCell>type</TableCell>
              <TableCell>Size (km²)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell>{vendor.name}</TableCell>
                <TableCell>{vendor.currentAddress.houseNumber}</TableCell>
                <TableCell>{vendor.type}</TableCell>
                <TableCell>{vendor.street}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper> */
}
