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
import ICSDashboard from "./components/Dashboard/ICSDashboard";
import FieldHistory from "./components/ApplicationForms/Field_History_01d";
import PendingListICS from "./components/Dashboard/PendingListICS";


//Importing a certification form 

import Table1 from "./components/Certification01/Table1";
import Unit from "./components/Certification01/UnitA";
import DescT4 from "./components/Certification01/DescT4";
import ImpInfoT5 from "./components/Certification01/ImpInfoT5";
import PrevInfoT3 from "./components/Certification01/PrevInfoT3";
import CertificationDecision from "./components/Certification01/Certification_Decison";
import UnitB from "./components/Certification01/UnitB";
import SubDocT1 from "./components/Certification01/SubDocT1";
import SubDocT2 from "./components/Certification01/SubDocT2";
import CB from "./components/Certification01/CB";
import Footer from "./components/Certification01/Footer";
import Certification from "./components/Certification01/Certification";

//importing certification agreement form
import Header from "./components/Certification_Agreement/Header";
import Scope from "./components/Certification_Agreement/Scope";
import Anual_Certification from "./components/Certification_Agreement/Anual_Certification";
import Payment from "./components/Certification_Agreement/Payment";
import Declaration from "./components/Certification_Agreement/Declaration";
import Legal_Sign from "./components/Certification_Agreement/Legal_Sign";
import Auth_Sign from "./components/Certification_Agreement/Auth_Sign";

//importing audit form 


// import General_Information from "./components/Audit_Form/1General_Information";
// import Landscape_Diversity from "./components/Audit_Form/2Landscape_Diversity";
// import Disease_Weed_management from "./components/Audit_Form/3Disease_Weed_management";
// import StoragePackagingTransport from "./components/Audit_Form/4StoragePackagingTransport.js";
// import InternalControlSytsem from "./components/Audit_Form/5InternalControlSystem";
// import Procedure from "./components/Audit_Form/6Procedure";
// import InternalApprove from "./components/Audit_Form/7InternalApprove";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}/>
        {/* public routes 

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
       */}
       
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

        <Route path="" element={<Table1/>}/>

     
    </Routes>
  );
}

export default App;
