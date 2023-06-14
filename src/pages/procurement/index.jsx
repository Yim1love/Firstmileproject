import {
  Typography,
  Container,
  Grid,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import React, { useState } from "react";


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import AddCircleIcon from "@mui/icons-material/AddCircle";







function Procurement() {
  const [scoretell, setScoretell] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputAdress, setInputAdress] = useState("");
  const [inputVillageNumber,setInputVillageNumber] = useState("");
  const [inputVillage,setInputVillage] = useState("");
  const[inputSoi,setInputSoi]= useState("");
  const[inputRoad,setInputRoad] = useState("");
  const[inputProvince,setInputProvince] = useState("");
  const[inputDistrict ,setInputDistrict ] = useState("");
  const[inputSubdistrict,setInputSubdistrict] = useState("");
  const[inputPostCode,setInputPostCode] = useState("");

  //ใบกำกับภาษี
  
  

  const handleScoretellChange = (event) => {
    setScoretell(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  
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
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ร้านค้า"
            sx={{
              boxSizing: "border-box",
              position: "relative",
              width: "90px",
              height: "11px",
              top: "3px",
              left: "13px",
              left: "1.43%",
              right: "97.14%",
              top: " 3.99%",
              bottom: "95.39%",
              transform: "translateY(-50%)",
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="สัญญาเช่า"
            sx={{
              boxSizing: "border-box",
              position: "relative",
              width: "100px",
              height: "11px",
              top: "3px",
              left: "13px",
              left: "0.50%",
              right: "97.14%",
              top: " 3.99%",
              bottom: "95.39%",
              transform: "translateY(-50%)",
            }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ผู้รับเหมา"
            sx={{
              boxSizing: "border-box",
              position: "relative",
              width: "100px",
              height: "11px",
              top: "3px",
              left: "13px",
              left: "0%",
              right: "97.14%",
              top: " 3.99%",
              bottom: "95.39%",
              transform: "translateY(-50%)",
            }}
          />

          <Box
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              left: "22.75%",
              right: "44.7%",
              top: "17.84%",
              bottom: "72.05%",
              background: "#FFFFFF",
              border: "1px solid #CBCBCB",
              borderRadius: "2px",
            }}
          >
            {" "}
            <input
              id="my-input"
              name="my-input"
              value={inputValue}
              onChange={handleInputChange}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </Box>
          <Box
            className="drop บริษัท"
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
              display: "flex",
              justifyContent: "space-between", // จัดตำแหน่งของข้อความและ Icon
              alignItems: "center",
              padding: "0 8px", // เพิ่มการเว้นระยะห่างด้านซ้ายและขวาของ Box
            }}
          >
            <Typography
              sx={{
                position: "relative",
                fontFamily: "Inter",
                fontSize: "17px",
                lineHeight: "17px",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              บริษัทจำกัด
            </Typography>
            <ExpandMoreIcon
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            />
          </Box>

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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.79%",
                  right: "80.77%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              >
                <input
                  id="house-number"
                  name="house-number"
                  value={inputAdress}
                  onChange={(event) => setInputAdress(event.target.value)}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                />
              </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "20.28%",
                  right: "69.28%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="VillageNumber"
              name="VillageNumber"
              value={inputVillageNumber}
              onChange={(event) => setInputVillageNumber(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "31.87%",
                  right: "46.15%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="Village"
              name="Village"
              value={inputVillage}
              onChange={(event) => setInputVillage(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "54.95%",
                  right: "23.08%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="Soi"
              name="Soi"
              value={inputSoi}
              onChange={(event) => setInputSoi(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "78.02%",
                  right: "1%",
                  top: "46.1%",
                  bottom: "44.02%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="Road"
              name="Road"
              value={inputRoad}
              onChange={(event) => setInputRoad(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.79%",
                  right: "69.23%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="Province"
              name="Province"
              value={inputProvince}
              onChange={(event) => setInputProvince(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "31.87%",
                  right: "46.15%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="District"
              name="District"
              value={inputDistrict}
              onChange={(event) => setInputDistrict(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "54.95%",
                  right: "23.08%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="Subdistrict"
              name="Subdistrict"
              value={inputSubdistrict}
              onChange={(event) => setInputSubdistrict(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "78.02%",
                  right: "1%",
                  top: "65.2%",
                  bottom: "24.59%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ><input
              id="PostCode"
              name="PostCode"
              value={inputPostCode}
              onChange={(event) => setInputPostCode(event.target.value)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
            </Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.79%",
                  right: "59.85%",
                  top: "85.28%",
                  bottom: "4.61%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.81%",
                  right: "64.77%",
                  top: "14%",
                  width: "240px",
                  height: "30px",
                  bottom: "71%",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.81%",
                  right: "80.73%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "20.32%",
                  right: "69.22%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "31.93%",
                  right: "46.05%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "55.05%",
                  right: "22.93%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "77.95%",
                  right: "1%",
                  top: "30.08%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "8.81%",
                  right: "69.17%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "31.93%",
                  right: "46.05%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "55.05%",
                  right: "22.93%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              <Box
                sx={{
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "78.06%",
                  right: "1%",
                  top: "47%",
                  bottom: "32%",
                  // width: "95px",
                  height: "35px",
                  background: "#FFFFFF",
                  border: "1px solid #CBCBCB",
                  borderRadius: "2px",
                }}
              ></Box>
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
              ></Box>
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
              ></Box>
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
              ></Box>
            </Box>
          </>
        </Container>
        <Container
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
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={1}
              mt={2}
            >
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  ชื่อ
                </Typography>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  placeholder="ชื่อ-นามสกุล"
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  ตำแหน่ง
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  สังกัด
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  ID Line
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  เบอร์โทรติดต่อ 1
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  เบอร์โทรติดต่อ 2
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  E-Mail 1
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    marginBottom: "0px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#6A6969",
                  }}
                >
                  E-mail 2
                </Typography>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    sx={{
                      marginBottom: "0px",
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#6A6969",
                      marginLeft: "43px",
                    }}
                  >
                    ระดับความยากในการคุย
                  </Typography>
                  <FormControl>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={scoretell}
                      // label="Age"
                      onChange={handleScoretellChange}
                      sx={{
                        width: "80px",
                        height: "30px",
                        marginLeft: "43px",
                        marginTop: "0px",
                      }}
                    >
                      <MenuItem value="">
                        <em>0</em>
                      </MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      width: "61px",
                      height: "30px",
                      marginTop: "10px",

                      border: "1px solid #E1E1E1",
                      borderRadius: "2px",
                      boxShadow: "0px 2px 2px #CBCBCB",
                    }}
                  >
                    <Typography>เพิ่ม</Typography>
                  </Button>

                  <Button
                    sx={{
                      width: "35px",
                      minWidth: "0px",
                      height: "30px",
                      marginTop: "10px",

                      borderRadius: "2px",
                      boxShadow: "0px 2px 2px #CBCBCB",
                      marginRight: "34px",
                      bgcolor: "#8CC0DE",
                    }}
                  >
                    <AddCircleIcon
                      sx={{
                        color: "white",
                      }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container
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
        
        </Container>
      </Grid>
      
    </Grid>
    
  );
}


export default Procurement;
