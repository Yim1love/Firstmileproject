// import React, { useState } from "react";

// import MapPicker from "react-google-map-picker";

// const DefaultLocation = { lat: 13.7374778, lng: 100.7994049 };
// const DefaultZoom = 10;

// export default function ResponsiveDialog() {
//   const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

//   const [location, setLocation] = useState(defaultLocation);
//   const [zoom, setZoom] = useState(DefaultZoom);

//   function handleChangeLocation(lat, lng) {
//     setLocation({ lat: lat, lng: lng });
//   }

//   function handleChangeZoom(newZoom) {
//     setZoom(newZoom);
//   }

//   function handleResetLocation() {
//     setDefaultLocation({ ...DefaultLocation });
//     setZoom(DefaultZoom);
//   }

//   return (
//     <>
//       <button onClick={handleResetLocation}>Reset Location</button>
//       <label>Latitute:</label>
//       <input type="text" value={location.lat} disabled />
//       <label>Longitute:</label>
//       <input type="text" value={location.lng} disabled />
//       <label>Zoom:</label>
//       <input type="text" value={zoom} disabled />

//       <MapPicker
//         defaultLocation={defaultLocation}
//         zoom={zoom}
//         style={{ height: "700px" }}
//         onChangeLocation={handleChangeLocation}
//         onChangeZoom={handleChangeZoom}
//         apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
//       />
//     </>
//   );
// }


import React, { useState } from "react";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 13.7374778, lng: 100.7994049 };
const DefaultZoom = 10;

export default function ResponsiveDialog() {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [searchQuery, setSearchQuery] = useState("");

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  function handleResetLocation() {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  }

  function handleSearch() {
    // ส่งคิวรี่ค้นหาไปยังเว็บ API หรือทำการประมวลผลค้นหาในแผนที่ตามคำค้นหา
    // เช่นใช้ Google Maps Geocoding API เพื่อแปลงคำค้นหาเป็นพิกัดละติจูดและลองจิจูด
    // หรือใช้คำสั่งสำหรับค้นหาในแผนที่ที่คุณใช้ (ตามเอกสาร API ของแผนที่ที่คุณใช้)

    // เมื่อได้ผลลัพธ์จากการค้นหา อัปเดตตำแหน่งและซูมในแผนที่
    const searchResultLocation = { lat: 13.7563, lng: 100.5018 };
    const searchResultZoom = 14;
    setLocation(searchResultLocation);
    setZoom(searchResultZoom);
  }

  return (
    <>
      <button onClick={handleResetLocation}>Reset Location</button>
      <label>Latitude:</label>
      <input type="text" value={location.lat} disabled />
      <label>Longitude:</label>
      <input type="text" value={location.lng} disabled />
      <label>Zoom:</label>
      <input type="text" value={zoom} disabled />

      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search location..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "700px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
      />
    </>
  );
}
