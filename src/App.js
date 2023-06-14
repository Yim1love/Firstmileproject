
// import { ColorModeContext, useMode } from "./theme";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
// import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

// import Topbar from "./pages/global/Topbar";

// import Dashboard from "./pages/dashboard";
// import MyProSidebar from "./pages/global/sidebar/MyProSidebar.jsx";

// //pages inserrt

// import Jobplan from "./pages/Jobplan";
// import Penalty from "./pages/penalty";
// import Audit from "./pages/audit";
// import Accounting from "./pages/accounting";
// import Humanresource from "./pages/humanresource";
// import Team1 from "./pages/team1";
// import Zone from "./pages/zone";
// import Building from "./pages/building";
// import Contract from "./pages/contract";
// import Asset from "./pages/asset";
// import Inventory from "./pages/inventory";
// import User from "./pages/user";
// import Setting from "./pages/setting";

// //pages inserrt

// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Form from "./pages/form";
// import Calendar from "./pages/calendar";
// import Bar from "./pages/bar";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";

// const App = () => {
//   const [theme, colorMode] = useMode();
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <MyProSidebarProvider>
//           <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//             <div>
//               <Topbar />
//             </div>
//             <div style={{ flex: 1, display: "flex" }}>
//               <MyProSidebar/>
//               <main style={{ flex: 1, padding: "1rem" }}>
//                 <Routes>
//                   <Route path="/" element={<Dashboard />} />
//                   <Route path="/jobplaning" element={<Jobplan />} />
//                   <Route path="/penalty" element={<Penalty />} />
//                   <Route path="/audit" element={<Audit />} />
//                   <Route path="/accounting" element={<Accounting />} />
//                   <Route path="/humanresource" element={<Humanresource />} />
//                   <Route path="/team1" element={<Team1 />} />
//                   <Route path="/zone" element={<Zone />} />
//                   <Route path="/building" element={<Building />} />
//                   <Route path="/contract" element={<Contract />} />
//                   <Route path="/asset" element={<Asset />} />
//                   <Route path="/inventory" element={<Inventory />} />
//                   <Route path="/user" element={<User />} />
//                   <Route path="/setting" element={<Setting />} />

//                   {/* <Route path="/team" element={<Team />} /> */}
//                   <Route path="/contacts" element={<Contacts />} />
//                   <Route path="/invoices" element={<Invoices />} />
//                   <Route path="/form" element={<Form />} />
//                   <Route path="/bar" element={<Bar />} />
//                   <Route path="/pie" element={<Pie />} />
//                   <Route path="/line" element={<Line />} />
//                   <Route path="/faq" element={<FAQ />} />
//                   <Route path="/calendar" element={<Calendar />} />
//                   <Route path="/geography" element={<Geography />} />
//                 </Routes>
//               </main>
//             </div>
//           </div>
//         </MyProSidebarProvider>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// };

// export default App;













import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";





import Dashboard from "./pages/dashboard";

//pages inserrt
import Topbar from "./pages/global/Topbar"
import Jobplan from "./pages/Jobplan";
import Penalty from "./pages/penalty";
import Audit from "./pages/audit";
import Accounting from "./pages/accounting";
import Humanresource from "./pages/humanresource";
import Team1 from "./pages/team1";
import Zone from "./pages/zone";
import Building from "./pages/building";
import Contract from "./pages/contract";
import Asset from "./pages/asset";
import Inventory from "./pages/inventory";
import User from "./pages/user";
import Setting from "./pages/setting";
import Procurement from "./pages/procurement";

//pages inserrt

import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import Contractproject from "./pages/contractproject/contractproject";


const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          
          <MyProSidebarProvider >
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999 }}>
            <Topbar />
          </div>
            <main style={{ paddingTop: "64px"}}>
              
            
                <Routes >
                <Route path="/" element={<Dashboard />} />
                <Route path="/jobplaning" element={<Jobplan />} />
                <Route path="/penalty" element={<Penalty/>} />
                <Route path="/audit" element={<Audit/>} />
                <Route path="/procurement" element={<Procurement/>}/>
                <Route path="/accounting" element={<Accounting/>} />
                <Route path="/humanresource" element={<Humanresource/>} />
                <Route path="/team1" element={<Team1/>} />
                <Route path="/zone" element={<Zone/>} />
                <Route path="/building" element={<Building/>} />
                <Route path="/contract" element={<Contract/>} />
                <Route path="/asset" element={<Asset/>} />
                <Route path="/inventory" element={<Inventory/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/setting" element={<Setting/>} />

                {/* <Route path="/team" element={<Team />} /> */}
                
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/contractproject" element={<Contractproject/>} /> 
                
              </Routes>
              
            </main>
            </MyProSidebarProvider>
           
       
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;



