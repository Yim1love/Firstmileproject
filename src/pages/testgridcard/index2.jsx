import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import { Edit, Delete, Save } from "@mui/icons-material";
import kasikornLogo from "../testgridcard/picture/kasikorn.png";

const Testcard2 = ({ addtestcard2 }) => {
  const [firstNameInputValue, setFirstNameInputValue] = useState("");
  const [newScoreInputValue, setNewScoreInputValue] = useState(1);
  const [numbankInputValue, setNumbankInputValue] = useState("");
  const [namebankInputValue, setNamebankInputValue] = useState("");

  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (
      firstNameInputValue.trim() !== "" &&
      numbankInputValue.trim() !== "" &&
      namebankInputValue.trim() !== "" &&
      newScoreInputValue >= 1 &&
      newScoreInputValue <= 5
    ) {
      setItems((prevItems) => [
        ...prevItems,
        {
          firstName: firstNameInputValue,
          score: newScoreInputValue,
          numbank: numbankInputValue,
          namebank: namebankInputValue,
        },
      ]);
      setFirstNameInputValue("");
      setNewScoreInputValue(1);
      setNumbankInputValue("");
      setNamebankInputValue("");

      const Testcard2Contact = {
        firstName: firstNameInputValue,
        score: newScoreInputValue,
        numbank: numbankInputValue,
        namebank: namebankInputValue,
      };
      console.log(Testcard2Contact);
      addtestcard2(Testcard2Contact);
    }
  };

  const editItem = (index) => {
    setEditIndex(index);
  };

  const saveItem = (index, newValues) => {
    const updatedItems = [...items];
    updatedItems[index] = newValues;
    setItems(updatedItems);
    setEditIndex(null);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center" sx={{ flexWrap: "wrap" }}>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              marginBottom: "0px",
              fontSize: "12px",
              lineHeight: "15px",
              color: "#6A6969",
            }}
          >
            ชื่อธนาคาร
          </Typography>
          <Select
            value={newScoreInputValue}
            onChange={(e) => setNewScoreInputValue(parseInt(e.target.value))}
            sx={{
              "& .MuiSelect-select": {
                height: "3px",
                minWidth: "180px",
              },
            }}
          >
            <MenuItem value={1}>ธนาคารกสิกร</MenuItem>
            <MenuItem value={2}>ธนาคารกรุงไทย</MenuItem>
            <MenuItem value={3}>ธนาคารกรุงศรี</MenuItem>
            <MenuItem value={4}>ธนาคารบัวหลวง</MenuItem>
            <MenuItem value={5}>ธนาคารธนชาติ</MenuItem>
            <MenuItem value={6}>ธนาคารUOB</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              marginBottom: "0px",
              fontSize: "12px",
              lineHeight: "15px",
              color: "#6A6969",
            }}
          >
            สาขา
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ชื่อ"
            value={firstNameInputValue}
            onChange={(e) => setFirstNameInputValue(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                height: "3px",
                minWidth: "180px",
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              marginBottom: "0px",
              fontSize: "12px",
              lineHeight: "15px",
              color: "#6A6969",
            }}
          >
            เลขบัญชี
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder=""
            value={numbankInputValue}
            onChange={(e) => setNumbankInputValue(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                height: "3px",
                minWidth: "180px",
              },
            }}
          />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              marginBottom: "0px",
              fontSize: "12px",
              lineHeight: "15px",
              color: "#6A6969",
            }}
          >
            ชื่อบัญชี
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ชื่อบัญชี"
            value={namebankInputValue}
            onChange={(e) => setNamebankInputValue(e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                height: "3px",
                minWidth: "180px",
              },
            }}
          />
        </Grid>

        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <Button variant="contained" onClick={addItem}>
            Add
          </Button>
        </Grid>
      </Grid>

      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minWidth: "200px", // กำหนดขนาดขั้นต่ำสำหรับ Card
            maxWidth: "500px",
            maxHeight: "200px",
            minHeight: "100px", // กำหนดขนาดสูงสุดสำหรับ Card
          }}
        >
          <CardContent sx={{ position: "relative" }}>
            {editIndex === index ? (
              <div>
                <Select
                  value={item.score}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].score = e.target.value;
                    setItems(updatedItems);
                  }}
                  sx={{
                    "& .MuiSelect-select": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                >
                  <MenuItem value={1}>ธนาคารกสิกร</MenuItem>
                  <MenuItem value={2}>ธนาคารกรุงไทย</MenuItem>
                  <MenuItem value={3}>ธนาคารกรุงศรี</MenuItem>
                  <MenuItem value={4}>ธนาคารบัวหลวง</MenuItem>
                  <MenuItem value={5}>ธนาคารธนชาติ</MenuItem>
                  <MenuItem value={6}>ธนาคารUOB</MenuItem>
                </Select>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  placeholder="สาขา"
                  value={item.firstName}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      firstName: e.target.value,
                    };
                    setItems((prevItems) => {
                      const updatedItems = [...prevItems];
                      updatedItems[index] = updatedValues;
                      return updatedItems;
                    });
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  placeholder="เลขบัญชี"
                  value={item.numbank}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      numbank: e.target.value,
                    };
                    setItems((prevItems) => {
                      const updatedItems = [...prevItems];
                      updatedItems[index] = updatedValues;
                      return updatedItems;
                    });
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  placeholder="ชื่อบัญชี"
                  value={item.namebank}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      namebank: e.target.value,
                    };
                    setItems((prevItems) => {
                      const updatedItems = [...prevItems];
                      updatedItems[index] = updatedValues;
                      return updatedItems;
                    });
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "3px",
                      minWidth: "180px",
                    },
                  }}
                />

                <IconButton onClick={() => saveItem(index, item)}>
                  <Save />
                </IconButton>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={
                      item.score === 1
                        ? "../../assets/bank/kasikorn.png"
                        : item.score === 2
                        ? "../../assets/bank/krungthai.png"
                        : item.score === 3
                        ? "../../assets/bank/krungsri.png"
                        : item.score === 4
                        ? "../../assets/bank/krubgtap.png"
                        : item.score === 5
                        ? "../../assets/bank/TTB.png"
                        : item.score === 6
                        ? "../../assets/bank/UOB.png"
                        : ""
                    }
                    alt=""
                    style={{
                      width: "62px",
                      height: "57px",
                      flexShrink: 0,
                      marginLeft: "5px",
                      marginTop: "5px",
                      marginRight: "8px",
                      borderRight:
                        item.score === 1
                          ? "2px solid #39C815"
                          : item.score === 2
                          ? "2px solid #02A6E6"
                          : item.score === 3
                          ? "2px solid #FFDA00"
                          : item.score === 4
                          ? "2px solid #013394"
                          : item.score === 5
                          ? "2px solid #F58C20"
                          : item.score === 6
                          ? "2px solid #7CA1D1"
                          : "none",
                      borderBottom:
                        item.score === 1
                          ? "2px solid #39C815"
                          : item.score === 2
                          ? "2px solid #02A6E6"
                          : item.score === 3
                          ? "2px solid #FFDA00"
                          : item.score === 4
                          ? "2px solid #FFf"
                          : item.score === 5
                          ? "2px solid #F58C20"
                          : item.score === 6
                          ? "2px solid #F8042D"
                          : "none",
                      background: "#FFF",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontSize: "14px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "107px",
                      right: "196px",
                      top: "8px",
                      bottom: "55px",
                    }}
                  >
                    {item.score === 1 && "ธนาคารกสิกร"}
                    {item.score === 2 && "ธนาคารกรุงไทย"}
                    {item.score === 3 && "ธนาคารกรุงศรี"}
                    {item.score === 4 && "ธนาคารบัวหลวง"}
                    {item.score === 5 && "ธนาคารธนชาติ"}
                    {item.score === 6 && "ธนาคารUOB"}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "400",
                      position: "absolute",
                      left: "107px",
                      right: "234px",
                      top: "25px",
                      bottom: "38px",
                    }}
                  >
                    {item.firstName}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "380px",
                      height: "1px",
                      backgroundColor: "#777",
                      position: "absolute",
                      top: "44px",
                      left: "107px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "107px",
                      right: "234px",
                      top: "49px",
                      bottom: "10px",
                    }}
                  >
                    {item.numbank}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "14px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "250px",
                      right: "13px",
                      top: "49px",
                      bottom: "10px",
                    }}
                  >
                    {item.namebank}
                  </Typography>
                </div>
              </div>
            )}
            <div
              style={{
                position: "absolute",
                top: "60px",
                left: "100px",
                right: "206px",
                bottom: "10px",
              }}
            >
              <IconButton onClick={() => editItem(index)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => deleteItem(index)}>
                <Delete />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Testcard2;

{
  /* <Typography>
{item.score === 1 && (
  <div>
    <img
      src={kasikornLogo}
      alt="กสิกร"
      style={{ width: "62px", height: "52px" }}
    />
    
  </div>
)} */
}
