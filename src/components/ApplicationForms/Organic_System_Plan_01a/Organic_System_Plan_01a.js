
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Table, Accordion } from "react-bootstrap";
import ICSInfo from "./ICSInfo";
import FarmPlanInformation from "./FarmPlanInformation"
import SeedPC from "./SeedPC";
import SoilF from "./SoilF";
import CropM from "./CropM";
import HarvestM from "./HarvestM";
import Recordkeeping from "./Recordkeeping";
import InternalControl from "./InternalControl";
import Affirmation from "./Affirmation";
function A01() {
    return (
      
      <div className="container card card-body "  >
        <center>01a Organic System Plan-Crop Production_Grower Group</center>
      <div className="container card card-body ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>ICS Information</Accordion.Header>
            <Accordion.Body>
              <ICSInfo/>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>Farm Plan Information,Description of Practices & procedures to be performed and Seeds and Seed Treatments : </Accordion.Header>
            <Accordion.Body>
              <FarmPlanInformation/>
            </Accordion.Body>
          </Accordion.Item>
  
          
  
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Seedlings for Perennial Crops and Water Management 
            </Accordion.Header>
            <Accordion.Body>
             <SeedPC/>
            </Accordion.Body>
          </Accordion.Item>
  
          
  
          <Accordion.Item eventKey="3">
            <Accordion.Header>Soil and Crop Fertility Management:</Accordion.Header>
            <Accordion.Body>
           <SoilF/>
            </Accordion.Body>
          </Accordion.Item>
  
          <Accordion.Item eventKey="4">
            <Accordion.Header>Crop Management and Pest, Disease and Weed control: </Accordion.Header>
            <Accordion.Body>
             <CropM/>
            </Accordion.Body>
          </Accordion.Item>
  
          
  
          <Accordion.Item eventKey="5">
            <Accordion.Header> Harvest and Post-Harvest Management,Post-Harvest Handling and  Description of monitoring practices & procedures to ensure effective implementation:</Accordion.Header>
            <Accordion.Body>
             <HarvestM/>
            </Accordion.Body>
          </Accordion.Item>
  
        

        <Accordion.Item eventKey="6">
            <Accordion.Header>
              {" "}
              Recordkeeping and  Audit Trail / Record Keeping System: :       
            </Accordion.Header>
            <Accordion.Body>
              <Recordkeeping/>
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              Internal Control System, Quality System ,Internal inspections, Approvals & Sanctions, Product Handling provisions and  ICS Documentation : 
            </Accordion.Header>
            <Accordion.Body>
              <InternalControl/>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              {" "}
              Affirmation
            </Accordion.Header>
            <Accordion.Body>
             <Affirmation/>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
      </div>
    );
  }
  
  export default A01;
  