import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./Component.css";

function Validateid() {
  const [id, setId] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (id.trim() !== "" && id.length === 13) {
      const formattedId = id.replace(/-/g, "");
      const result = Script_checkID(formattedId);
      setIsValid(result);
    } else {
      setIsValid(false);
    }

    if (id.trim() !== "" && id.length !== 13) {
      setIsValid(false);
    }
  }, [id]);

  const handleIdChange = (event) => {
    const inputValue = event.target.value;
    const filteredValue = inputValue.replace(/\D/g, ""); // กรองเฉพาะตัวเลข
    setId(filteredValue);
  };

  const Script_checkID = (id) => {
    if (id.substring(0, 1) === "0") return false;
    if (id.length !== 13) return false;
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(id.charAt(i)) * (13 - i);
    }
    if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) return false;
    return true;
  };

  return (
    <div className="container1">
      <div className="row">
        {/* <h1>ตรวจเลขบัตรประจำตัวประชาชน</h1> */}
        <br />
        <div className="col-12">
          {/* <label>กรอกเลขบัตร</label>{" "} */}

          <TextField
            id="demo-helper-text-aligned-no-helper"
            label=""
            placeholder=""
            value={id}
            onChange={handleIdChange}
            inputProps={{ maxLength: 13 }}
            error={id.trim() !== "" && id.length !== 13}
            helperText={
              <React.Fragment>
                <span className={isValid ? "success" : ""}>
                  {isValid ? "เลขบัตรถูกต้อง" : ""}
                </span>
                <span
                  className={`error ${
                    id.trim() !== "" && id.length !== 13 ? "" : ""
                  }`}
                  style={{
                    backgroundColor:
                      id.trim() !== "" && id.length !== 13 ? "" : "initial",
                    color: !isValid && id.trim() !== "" ? "red" : "initial",
                  }}
                >
                  {!isValid && id.trim() !== "" ? "เลขบัตรผิด" : ""}
                  {id.trim() !== "" && id.length !== 13
                    ? "กรอกตัวเลขไม่ครบ 13 หลัก"
                    : ""}
                </span>
              </React.Fragment>
            }
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
          />
        </div>
      </div>
    </div>
  );
}

export default Validateid;

{
  /* <input
            type="text"
            id="idcard"
            className="form-control"
            maxLength="13"
            value={id}
            onChange={handleIdChange}
            style={{
    position: "absolute",
    left: "8.81%",
    right: "64.77%",
    top: "14%",
    width: "240px",
    height: "30px",
    bottom: "71%",
    background: "#FFFF",
    borderRadius: "2px",
    border: "none",
    outline: "none",
    padding: "7px",
    boxSizing: "border-box",
  }}
          /> */
}
