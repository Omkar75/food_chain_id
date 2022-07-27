import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ICSRegister from "./components/Register/ICSRegister";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Unauthorized from "./components/Unauthorized";
import ApplicationForm from "./components/ApplicationForms/ApplicationForm";
import Missing from "./components/Missing";
import RequiredAuth from "./components/RequiredAuth";
import NavbarComp from "./components/NavbarComp";
import Certification_Decision from "./components/ApplicationForms/Certification_Decision_06";
import ApprovedICS from "./components/ApplicationForms/ApprovedICS";
import FieldSpecsnYieldEstimate from "./components/ApplicationForms/FieldSpecsnYieldEstimate";
import Farmer_List_01c from "./components/ApplicationForms/Farmer_List_01c/Farmer_List_01c";
import Organic_System_Plan_01a from "./components/ApplicationForms/Organic_System_Plan_01a/Organic_System_Plan_01a";
import ICSDashboard from "./components/Dashboard/ICSDashboard";
import FieldHistory from "./components/ApplicationForms/Field_History_01d";
import PendingListICS from "./components/Dashboard/PendingListICS";


//Importing a certification form 

import Certificationmain from "./components/Certification01/Certificationmain";



//importing certification agreement form
import CertificationAgreementMain from "./components/Certification_Agreement/CertificationAgreementMain";

//importing audit form 

import AuditMain from "./components/Audit_Form/AuditMain";
import Technical_Review_5 from "./components/ApplicationForms/Technical_Review_5/Technical_Review_5";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="icsregister" element={<ICSRegister />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="navbar" element={<NavbarComp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="icsdashboard" element={<ICSDashboard />} />
      <Route path="certificationdecision" element={<Certification_Decision />} />
      
      <Route path="approvedlist" element={<ApprovedICS/>}/>
      <Route path="pendinglist" element={<PendingListICS/>}/>
      <Route path="applicationform" element={<ApplicationForm />} />
      <Route path='FieldSpecsnYieldEstimate'element={<FieldSpecsnYieldEstimate/>} />
      <Route path="farmerlist" element={<Farmer_List_01c/>}/>
      <Route path="fieldhistory" element={<FieldHistory/>}/>

      <Route path="OrganicSystemPlan01a" element={<Organic_System_Plan_01a/>}/>
      <Route path="TechnicalReview5" element={<Technical_Review_5/>}/>

      {/* FoodchainID dashboard */}
      {/* <Route element={<RequiredAuth allowedRoles={["foodchainid"]}/>}>
        <Route path="dashboard" element={<Dashboard />} /> 
        <Route path="applicationform" element={<ApplicationForm />} />
        <Route path='FieldSpecsnYieldEstimate'element={<FieldSpecsnYieldEstimate/>} />
        <Route path="farmerlist" element={<Farmer_List_01c/>}/>
        <Route path="fieldhistory" element={<FieldHistory/>}/>
        <Route path="certificationdecision" element={<Certification_Decision />} />
      </Route> */}
      // catch all
      <Route path="*" element={<Missing />} />

      <Route path="certification01" element={<Certificationmain />} />
      <Route path="Agreement01" element={<CertificationAgreementMain/>}  /> 
      <Route path="AuditChecklist03" element={<AuditMain/>}  /> 
    </Route>
  </Routes>
  );
}

export default App;
