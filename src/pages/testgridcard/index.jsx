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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

import { FiPhoneCall, FiMail } from "react-icons/fi";
import { IconName } from "react-icons/ai";

const Testcard = () => {
  const [firstNameInputValue, setFirstNameInputValue] = useState("");
  const [positionInputValue, setPositionNameInputValue] = useState("");
  const [affiliationInputValue, setAffiliationInputValue] = useState("");
  const [idlineInputValue, setIdlineInputValue] = useState("");
  const [phone1InputValue, setPhone1InputValue] = useState("");
  const [phone2InputValue, setPhone2InputValue] = useState("");
  const [email1InputValue, setEmail1InputValue] = useState("");
  const [email2InputValue, setEmail2InputValue] = useState("");
  const [newScoreInputValue, setNewScoreInputValue] = useState(1);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (
      firstNameInputValue.trim() !== "" &&
      positionInputValue.trim() !== "" &&
      affiliationInputValue.trim() !== "" &&
      idlineInputValue.trim() !== "" &&
      phone1InputValue.trim() !== "" &&
      phone2InputValue.trim() !== "" &&
      email1InputValue.trim() !== "" &&
      email2InputValue.trim() !== "" &&
      newScoreInputValue >= 1 &&
      newScoreInputValue <= 5
    ) {
      setItems((prevItems) => [
        ...prevItems,
        {
          firstName: firstNameInputValue,
          lastName: positionInputValue,
          affilication: affiliationInputValue,
          idline: idlineInputValue,
          phone1: phone1InputValue,
          phone2: phone2InputValue,
          email1: email1InputValue,
          email2: email2InputValue,
          score: newScoreInputValue,
        },
      ]);
      setFirstNameInputValue("");
      setPositionNameInputValue("");
      setAffiliationInputValue("");
      setIdlineInputValue("");
      setPhone1InputValue("");
      setPhone2InputValue("");
      setEmail1InputValue("");
      setEmail2InputValue("");
      setNewScoreInputValue(1);
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
            ชื่อ
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
            ตำแหน่ง
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ตำแหน่ง"
            value={positionInputValue}
            onChange={(e) => setPositionNameInputValue(e.target.value)}
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
            สังกัด
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ตำแหน่ง"
            value={affiliationInputValue}
            onChange={(e) => setAffiliationInputValue(e.target.value)}
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
            ID Line
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ID Line"
            value={idlineInputValue}
            onChange={(e) => setIdlineInputValue(e.target.value)}
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
            เบอร์โทรติดต่อ 1
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ID Line"
            value={phone1InputValue}
            onChange={(e) => setPhone1InputValue(e.target.value)}
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
            เบอร์โทรติดต่อ 2
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ID Line"
            value={phone2InputValue}
            onChange={(e) => setPhone2InputValue(e.target.value)}
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
            E-mail 1
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ID Line"
            value={email1InputValue}
            onChange={(e) => setEmail1InputValue(e.target.value)}
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
            E-mail 2
          </Typography>
          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder="ID Line"
            value={email2InputValue}
            onChange={(e) => setEmail2InputValue(e.target.value)}
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
            ระดับความยากในการคุย
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
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
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
            maxHeight: "500px",
            minHeight: "200px", // กำหนดขนาดสูงสุดสำหรับ Card
          }}
        >
          <CardContent sx={{ position: "relative" }}>
            {editIndex === index ? (
              <div>
                <TextField
                  id="demo-helper-text-aligned-no-helper"
                  label=""
                  placeholder="ชื่อ"
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
                  placeholder="นามสกุล"
                  value={item.lastName}
                  onChange={(e) => {
                    const updatedValues = { ...item, lastName: e.target.value };
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
                  placeholder="สังกัด"
                  value={item.affilication}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      affilication: e.target.value,
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
                  placeholder="ID line"
                  value={item.idline}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      idline: e.target.value,
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
                  placeholder="เบอร์โทรติดต่อ 1"
                  value={item.phone1}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      phone1: e.target.value,
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
                  placeholder="เบอร์โทรติดต่อ 2"
                  value={item.phone2}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      phone2: e.target.value,
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
                  placeholder="E-mail 1"
                  value={item.email1}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      email1: e.target.value,
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
                  placeholder="E-mail 2"
                  value={item.email2}
                  onChange={(e) => {
                    const updatedValues = {
                      ...item,
                      email2: e.target.value,
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
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
                <IconButton onClick={() => saveItem(index, item)}>
                  <Save />
                </IconButton>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontSize: "14px",
                    fontWeight: "700",
                    position: "absolute",
                    left: "18px",
                    right: "270px",
                    top: "10px",
                    bottom: "150px",
                  }}
                >
                  {item.firstName}
                </Typography>
                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "12px",
                    fontWeight: "700",
                    position: "absolute",
                    left: "18px",
                    right: "320px",
                    top: "33px",
                    bottom: "129px",
                  }}
                >
                  {item.lastName}
                </Typography>
                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "12px",
                    fontWeight: "700",
                    position: "absolute",
                    left: "18px",
                    right: "272px",
                    top: "56px",
                    bottom: "106px",
                  }}
                >
                  {item.affilication}
                </Typography>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "450px",
                      height: "1px",
                      backgroundColor: "#777",
                      position:"absolute",
                      top:"83px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faLine}
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "absolute",
                      top: "95px",
                      color: "#39C815",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "40px",
                      right: "272px",
                      top: "95px",
                      bottom: "67px",
                    }}
                  >
                    : {item.idline}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FiMail
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "absolute",
                      left: "260px",
                      top: "95px",
                      color: "#A75D5D",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "290px",
                      right: "29px",
                      top: "95px",
                      bottom: "67px",
                    }}
                  >
                    : {item.email1}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FiPhoneCall
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "absolute",
                      top: "125px",
                      color: "#262A56",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "40px",
                      right: "18px",
                      top: "125px",
                      bottom: "67px",
                    }}
                  >
                    : {item.phone1}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FiMail
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "absolute",
                      left: "260px",
                      top: "125px",
                      color: "#A75D5D",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "290px",
                      right: "29px",
                      top: "125px",
                      bottom: "37px",
                    }}
                  >
                    : {item.email2}
                  </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FiPhoneCall
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "absolute",
                      top: "152px",
                      color: "#262A56",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      fontWeight: "700",
                      position: "absolute",
                      left: "40px",
                      right: "272px",
                      top: "152px",
                      bottom: "10px",
                    }}
                  >
                    : {item.phone2}
                  </Typography>
                </div>

                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "12px",
                    fontWeight: "700",
                    position: "absolute",
                    left: "218px",
                    right: "180px",
                    top: "29px",
                    bottom: "126px",
                  }}
                >
                  {item.score}
                </Typography>
              </div>
            )}
            <div
              style={{
                position: "absolute",
                top: "164px",
                left: "10px",
                right: "272px",
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

export default Testcard;
