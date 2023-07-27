import axios from "axios";
import styles from "./index.module.css";
import {
  Typography,
  Container,
  Grid,
  Box,
  Checkbox,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Testcard from "../testgridcard/index";
import Testcard2 from "../testgridcard/index2";
import MapDialog from "../testmaps/mapdialog";
import { FaCheck } from "react-icons/fa";
import Validateid from "../../components/Validateid";

function Procurement() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedRoll, setSelectedRoll] = useState("");
  const [certificateFileData, setCertificateFileData] = useState(null);
  const [pp20FileData, setPp20FileData] = useState(null);
  const [personalIdFileData, setPersonalIdFileData] = useState(null);

  const [scoretell, setScoretell] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputAdress, setInputAdress] = useState("");
  const [inputVillageNumber, setInputVillageNumber] = useState("");
  const [inputVillage, setInputVillage] = useState("");
  const [inputSoi, setInputSoi] = useState("");
  const [inputRoad, setInputRoad] = useState("");
  const [inputProvince, setInputProvince] = useState("");
  const [inputDistrict, setInputDistrict] = useState("");
  const [inputSubdistrict, setInputSubdistrict] = useState("");
  const [inputPostCode, setInputPostCode] = useState("");
  const [inputPosition1, setInputPosition1] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  //ใบกำกับภาษี
  const [putIdcard, setPutIdcard] = useState("");
  const [putAddress, setPutAddress] = useState("");
  const [putVillageNumber, setPutVillageNumber] = useState("");
  const [putVillage, setPutVillage] = useState("");
  const [putSoi, setPutSoi] = useState("");
  const [putRoad, setPutRoad] = useState("");
  const [putProvince, setPutProvince] = useState("");
  const [putDistrict, setPutDistrict] = useState("");
  const [putSubdistrict, setPutSubdistrict] = useState("");
  const [putPostCode, setPutPostCode] = useState("");

  //นำเข้า testcard1
  const [contactData, setContactData] = useState([]);
  const handleAddContact = (newContact) => {
    setContactData((prevData) => [...prevData, newContact]);
  };
  //นำเข้า testcard2
  const [testcontactData, setTestContactData] = useState([]);
  const handleAddTest = (newContact) => {
    setTestContactData((prevData) => [...prevData, newContact]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDeleteData = () => {
    // ตัวอย่างการลบข้อมูล
    // คุณสามารถเขียนโค้ดในส่วนนี้เพื่อลบข้อมูลตามที่คุณต้องการ
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log("File data:", reader.result);
      switch (fileType) {
        case "certificateList":
          setCertificateFileData(reader.result);
          break;
        case "pp20List":
          setPp20FileData(reader.result);
          break;
        case "personalIdList":
          setPersonalIdFileData(reader.result);
          break;
        default:
          break;
      }
    };
  };

  // import axios file
  const apiUrl = "http://94.74.113.242/vendor-command-service/api/v1/vendor";
  const handlePostData = () => {
    // console.log("contactFileData: ", contactData);
    // console.log("pp20FileData: ", pp20FileData);
    // console.log("personalIdFileData: ", personalIdFileData);
    if (inputValue.trim() === "") {
      alert("กรุณากรอกชื่อร้านค้า");

      return;
    }
    // เรียก API เพื่อตรวจสอบค่าซ้ำในฐานข้อมูล

    const vendorData = {
      vendorType: selectedRoll,
      type: selectedType,
      name: inputValue,
      currentAddress: {
        houseNumber: inputAdress,
        moo: inputVillageNumber,
        buildings: inputVillage,
        soi: inputSoi,
        street: inputRoad,
        subDistrict: inputSubdistrict,
        district: inputDistrict,
        province: inputProvince,
        location: {
          latitude: "1000.2222",
          longitude: "1000.2111",
        },
        postcode: inputPostCode,
      },
      taxId: "1529900724287",
      taxIdAddress: {
        houseNumber: putAddress,
        moo: putVillageNumber,
        buildings: putVillage,
        soi: putSoi,
        street: putRoad,
        subDistrict: putSubdistrict,
        district: putDistrict,
        province: putProvince,
        location: {
          latitude: "1000.2222",
          longitude: "1000.2222",
        },
        postcode: putPostCode,
      },
      contact: contactData,
      certificateList: [
        {
          title: certificateFileData.name,
          data: certificateFileData.base64,
        },
      ],
      pp20List: [
        {
          title: pp20FileData.name,
          data: pp20FileData.base64, // ข้อมูล Base64 จากไฟล์ที่อัปโหลด
        },
      ],
      personalIdList: [
        {
          title: personalIdFileData.name,
          // title: personalIdFileData && personalIdFileData.name,
          data: personalIdFileData.base64,
        },
      ],
      bankAccountList: testcontactData,

      by: {
        userId: "f0005",
        username: "อาสิทธิ์ พิจอมบุตร",
        modifyAt: "string",
      },
    };
    console.log("vendorData ", vendorData);
    return;
    axios
      .post(apiUrl, vendorData)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  //ในการติดต่อ

  return (
    <Grid container justifyContent="center">
      <Grid sx={{ margin: 0 }}>
        <Container
          className="card รายละเอียด ร้านค้าที่อยู่"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "1095px",
            height: "328px",
            margin: "0px 20px 0px 100px",
            background: "#FFFFFF",
            border: "1px solid #D9D9D9",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Checkbox
                id="ร้านค้า"
                name="vendorType"
                value="ร้านค้า"
                checked={selectedType === "ร้านค้า"}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <label htmlFor="ร้านค้า">ร้านค้า</label>
            </div>
            <div>
              <Checkbox
                id="สัญญาเช่า"
                name="vendorType"
                value="สัญญาเช่า"
                checked={selectedType === "สัญญาเช่า"}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <label htmlFor="สัญญาเช่า">สัญญาเช่า</label>
            </div>
            <div>
              <Checkbox
                id="ผู้รับเหมา"
                name="vendorType"
                value="ผู้รับเหมา"
                checked={selectedType === "ผู้รับเหมา"}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <label htmlFor="ผู้รับเหมา">ผู้รับเหมา</label>
            </div>
          </div>

          <Box>
            <Typography
              sx={{
                boxSizing: "border-box",
                position: "absolute",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "9px",
                lineHeight: "17px",
                color: "#333333",
                "&::after": {
                  content: "'*'",
                  position: "relative",
                  top: "-0.2em",
                  marginRight: "0.2em",
                  color: "red",
                },
                top: "12.84%",
                right: "75.4%",
              }}
            >
              ชื่อ
            </Typography>
            <TextField
              id="demo-helper-text-aligned-no-helper"
              label=""
              placeholder=""
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              sx={{
                boxSizing: "border-box",
                position: "absolute",
                left: "22.75%",
                right: "44.7%",
                top: "17.84%",
                bottom: "72.05%",
                background: "#FFFFFF",

                borderRadius: "2px",

                borderRadius: "2px",
                "& .MuiInputBase-input": {
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  padding: "7px",
                  boxSizing: "border-box",
                },
              }}
            />
          </Box>

          <Select
            name="vendorType"
            id="vendorType"
            value={selectedRoll}
            onChange={(e) => setSelectedRoll(e.target.value)}
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              left: "8.68%",
              right: "78.13%",
              top: "17.78%",
              bottom: "72.01%",
              background: "#FFFFFF",
              border: "1px solid #CBCBCB",
              borderRadius: "2px",
              padding: "0 8px",
            }}
            displayEmpty
          >
            <MenuItem value="" disabled>
              VenderType
            </MenuItem>
            <MenuItem value="บุคคลธรรมดา">บุคคลธรรมดา</MenuItem>
            <MenuItem value="บริษัทจำกัด">บริษัทจำกัด</MenuItem>
            <MenuItem value="บริษัทจำกัด (มหาชน)">บริษัทจำกัด (มหาชน)</MenuItem>
            <MenuItem value="หจก.">หจก.</MenuItem>
            <MenuItem value="หจก. สามัญนิติบุคคล">หจก. สามัญนิติบุคคล</MenuItem>
          </Select>

          <Typography
            sx={{
              position: "relative",
              left: "3%",
              right: "96.48%",
              top: "34.57%",
              bottom: "61.14%",
              fontFamily: "Inter, sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#4D4D4D",
            }}
          >
            ที่อยู่
          </Typography>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "86.15%",
                  top: "40.83%",
                  bottom: "54.89%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                บ้านเลขที่
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputAdress}
                onChange={(event) => setInputAdress(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "80.77%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "20.22%",
                  right: "77.36%",
                  top: "40.83%",
                  bottom: "54.23%",
                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                หมู่ที่
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputVillageNumber}
                onChange={(event) => setInputVillageNumber(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "20.28%",
                  right: "69.28%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "32.02%",
                  right: "60.28%",
                  top: "40.83%",
                  bottom: "54.23%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                หมู่บ้าน/อาคาร
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputVillage}
                onChange={(event) => setInputVillage(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "31.87%",
                  right: "46.15%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "55.16%",
                  right: "42.53%",
                  top: "40.83%",
                  bottom: "54.23%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ซอย
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputSoi}
                onChange={(event) => setInputSoi(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "54.95%",
                  right: "23.08%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "78.13%",
                  right: "18.91%",
                  top: "40.83%",
                  bottom: "54.23%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ถนน
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputRoad}
                onChange={(event) => setInputRoad(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "78.02%",
                  right: "1%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "86.37%",
                  top: "59.6%",
                  bottom: "36.12%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                จังหวัด
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputProvince}
                onChange={(event) => setInputProvince(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "69.23%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "32.09%",
                  right: "62.09%",
                  top: "59.6%",
                  bottom: "36.12%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                อำเภอ/เขต
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputDistrict}
                onChange={(event) => setInputDistrict(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "31.87%",
                  right: "46.15%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "55.05%",
                  right: "38.68%",
                  top: "59.6%",
                  bottom: "36.12%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ตำบล/แขวง
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputSubdistrict}
                onChange={(event) => setInputSubdistrict(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "54.95%",
                  right: "23.08%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "78.13%",
                  right: "15.41%",
                  top: "59.6%",
                  bottom: "36.12%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                รหัสไปรษณีย์
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputPostCode}
                onChange={(event) => setInputPostCode(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "78.02%",
                  right: "1%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "86.59%",
                  top: "80.01%",
                  bottom: "15.05%",

                  fontSize: "12px",
                  lineheight: "15px",
                  marginBottom: "6px",
                  color: "#6A6969",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ตำแหน่ง
              </Typography>

              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={inputPosition1}
                onChange={(event) => setInputPosition1(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.79%",
                  right: "59.85%",
                  top: "85.28%",
                  bottom: "4.61%",
                  background: "#FFFFFF",
                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <React.Fragment>
                      <MapDialog />
                    </React.Fragment>
                  ),
                }}
              />
            </Box>
          </>

          {/* <Typography
            variant="h1"
            sx={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            procurement
          </Typography> */}
        </Container>
        <Container
          className="card รายละเอียดกำกับภาษี"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "1095px",
            height: "420px",
            margin: "0px 20px 0px 100px",

            marginTop: "330px",
            background: "#FFFFFF",
            border: "1px solid #D9D9D9",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              left: "3%",
              right: "86.35%",
              top: "2%",
              bottom: "93.01%",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#4D4D4D",
            }}
          >
            รายละเอียดใบกำกับภาษี
          </Typography>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "70.16%",
                  top: "9.25%",
                  bottom: "82.26%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                เลขประจำตัวผู้เสียภาษี/เลขบัตรประชาชน
              </Typography>
              <Validateid />
              {/* <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putIdcard}
                onChange={(event) => setPutIdcard(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "64.77%",
                  top: "14%",
                  width: "240px",
                  height: "30px",
                  bottom: "71%",
                  background: "#FFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              /> */}
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "86.13%",
                  top: "25.55%",
                  bottom: "49.46%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                บ้านเลขที่
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putAddress}
                onChange={(event) => setPutAddress(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "80.73%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "20.26%",
                  right: "77.32%",
                  top: "25.55%",
                  bottom: "49.46%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",
                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                หมู่ที่
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putVillageNumber}
                onChange={(event) => setPutVillageNumber(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "20.32%",
                  right: "69.22%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "32.08%",
                  right: "60.21%",
                  top: "25.55%",
                  bottom: "49.46%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                หมู่บ้าน/อาคาร
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putVillage}
                onChange={(event) => setPutVillage(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "31.93%",
                  right: "46.05%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "55.27%",
                  right: "42.42%",
                  top: "25.55%",
                  bottom: "49.46%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                ซอย
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putSoi}
                onChange={(event) => setPutSoi(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "55.05%",
                  right: "22.93%",
                  top: "30.08%",
                  bottom: "32%",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "78.05%",
                  right: "18.97%",
                  top: "25.55%",
                  bottom: "49.46%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                ถนน
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putRoad}
                onChange={(event) => setPutRoad(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "77.95%",
                  right: "1%",
                  top: "30.08%",
                  bottom: "32%",

                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "86.13%",
                  top: "42.05%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                จังหวัด
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putProvince}
                onChange={(event) => setPutProvince(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "69.17%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "32.15%",
                  right: "61.58%",
                  top: "42.05%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                อำเภอ/เขต
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putDistrict}
                onChange={(event) => setPutDistrict(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "31.93%",
                  right: "46.05%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "55.16%",
                  right: "38.24%",
                  top: "42.05%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                ตำบล/แขวง
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putSubdistrict}
                onChange={(event) => setPutSubdistrict(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "55.05%",
                  right: "22.93%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "78.39%",
                  right: "15.14%",
                  top: "42.05%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                รหัสไปรษณีย์
              </Typography>
              <TextField
                id="demo-helper-text-aligned-no-helper"
                label=""
                placeholder=""
                value={putPostCode}
                onChange={(event) => setPutPostCode(event.target.value)}
                sx={{
                  position: "absolute",
                  left: "78.06%",
                  right: "1%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",

                  borderRadius: "2px",
                  "& .MuiInputBase-input": {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "7px",
                    boxSizing: "border-box",
                  },
                }}
              />
            </Box>
          </>
          <Typography
            sx={{
              position: "relative",
              left: "3%",
              right: "86.35%",
              top: "56%",
              bottom: "93.01%",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "17px",
              color: "#4D4D4D",
            }}
          >
            เอกสารประกอบอื่นๆ
          </Typography>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "8.81%",
                  right: "86.13%",
                  top: "67%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                ภพ.20.
              </Typography>
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.81%",
                  right: "69.17%",
                  top: "71%",
                  bottom: "32%",
                  width: "200px",
                  height: "70px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "pp20List")}
                />
                {pp20FileData && <p>ไฟล์ที่เลือก: {pp20FileData.name}</p>}
              </Box>
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "39.77%",
                  right: "49.82%",
                  top: "67%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                Pesanal ID List
              </Typography>
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "40%",
                  right: "70%",
                  top: "71%",
                  bottom: "32%",
                  width: "200px",
                  height: "70px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "personalIdList")}
                />
                {personalIdFileData && (
                  <p>ไฟล์ที่เลือก: {personalIdFileData.name}</p>
                )}
              </Box>
            </Box>
          </>
          <>
            <Box>
              <Typography
                sx={{
                  position: "absolute",
                  left: "70%",
                  right: "10%",
                  top: "67%",
                  bottom: "17.2%",
                  fontFamily: "'Inter'",
                  fontStyle: "normal",

                  fontSize: "12px",
                  marginBottom: "6px",
                  color: "#6A6969",
                }}
              >
                Certificate List
              </Typography>
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "70%",
                  right: "10%",
                  top: "71%",
                  bottom: "32%",
                  width: "200px",
                  height: "70px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, "certificateList")}
                />
                {certificateFileData && (
                  <p>ไฟล์ที่เลือก: {certificateFileData.name}</p>
                )}
              </Box>
            </Box>
          </>
        </Container>
        <Container
          className="add การติดต่อ"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "545px",
            height: "769px",
            margin: "0px 0px 0px 100px",
            marginTop: "753px",
            marginbottom: "78px",
            background: "#FFFFFF",
            borderRadius: "5px",

            border: "1px solid #D9D9D9",
          }}
        >
          <Testcard onAddContact={handleAddContact} />
        </Container>

        <Container
          className="บัญชี add"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            width: "545px",
            height: "769px",
            margin: "0px 0px 0px 649px",
            marginTop: "753px",
            marginbottom: "78px",
            background: "#FFFFFF",
            borderRadius: "5px",
            border: "1px solid #D9D9D9",
          }}
        >
          <Typography>การจ่ายเงิน</Typography>
          <Testcard2 addtestcard2={handleAddTest} />
        </Container>
        <Container
          sx={{
            display: "flex",

            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "1550px",
            minHeight: "100vh",
            marginBottom:"50px",
            marginTop:"10px",
          }}
        >
          <Button
            variant="contained"
            onClick={handleDeleteData}
            sx={{
              width: "96px",
              height: "30px",
              flexShrink: 0,
              backgroundColor: "#FF0000",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
            startIcon={<DeleteIcon sx={{ fontSize: 20 }} />}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={handlePostData}
            sx={{
              marginLeft:"1050px",
              width: "96px",
              height: "30px",
              flexShrink: 0,
              backgroundColor: "#39C815",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
            }}
            startIcon={<AddIcon sx={{ fontSize: 20 }} />}
          >
            Add
          </Button>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Procurement;

// vendorType: "บุคคลธรรมดา",
// type: "ร้านค้า",
// name: "ร้านยิมออนไลน4",
// currentAddress: {
//   houseNumber: "inputAdress",
//   moo: "inputVillageNumber",
//   buildings: "inputVillage",
//   soi: "inputSoi",
//   street: "inputRoad",
//   subDistrict: "inputSubdistrict",
//   district: "inputDistrict",
//   province: "inputProvince",
//   location: {
//     latitude: "",
//     longitude: "",
//   },
//   postcode: "inputPostCode",
// },
// taxId: "",
// taxIdAddress: {
//   houseNumber: "putAddress",
//   moo: "putVillageNumber",
//   buildings: "putVillage",
//   soi: "putSoi",
//   street: "putRoad",
//   subDistrict: "putSubdistrict",
//   district: "putDistrict",
//   province: "putProvince",
//   location: {
//     latitude: "",
//     longitude: "",
//   },
//   postcode: "putPostCode",
// },
// contact: contactData,
// certificateList: [
//   {
//     title: "",
//     data: "",
//   },
// ],
// pp20List: [
//   {
//     title: "",
//     data: "",
//   },
// ],
// personalIdList: [
//   {
//     title: "",
//     data: "",
//   },
// ],
// bankAccountList: testcontactData,
// bankAccountList: [
//   {
//     bankName: "string",
//     bankId: "string",
//     branchName: "string",
//     accountName: "string",
//   },
// ],
