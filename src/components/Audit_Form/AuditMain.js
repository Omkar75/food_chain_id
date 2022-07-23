import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import General_Information from "./1General_Information";
import Landscape_Diversity from "./2Landscape_Diversity";
import Disease_Weed_management from "./3Disease_Weed_management";
import StoragePackagingTransport from "./4StoragePackagingTransport.js";
import InternalControlSytsem from "./5InternalControlSystem";
import Procedure from "./6Procedure";
import InternalApprove from "./7InternalApprove";


export default function AuditMain() {
  return (
    <div className="container card card-body ">
    <center>
      {" "}
      <strong>Audit and Checklist </strong>
    </center>
    <div className="container card card-body ">
       <Accordion>

        <Accordion.Item eventKey="1">
          <Accordion.Header>General Information, Crop Plan Information,  Conversion Requirement and Duration of conversion Period</Accordion.Header>
          <Accordion.Body>
            <General_Information />
          </Accordion.Body>
        </Accordion.Item>

        

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Landscape & Diversity in Crop production, Nutrient Management 
          </Accordion.Header>
          <Accordion.Body>
            <Landscape_Diversity />
          </Accordion.Body>
        </Accordion.Item>

        
        <Accordion.Item eventKey="6">
          <Accordion.Header>Pest-Disease & Weed management,Contamination Control,Soil & Water conservation</Accordion.Header>
          <Accordion.Body>
            <Disease_Weed_management />
          </Accordion.Body>
        </Accordion.Item>

       

        <Accordion.Item eventKey="10">
          <Accordion.Header>Storage-Packaging & Transport,Labelling,Recordkeeping </Accordion.Header>
          <Accordion.Body>
            <StoragePackagingTransport />
          </Accordion.Body>
        </Accordion.Item>

       

        <Accordion.Item eventKey="12">
          <Accordion.Header>Internal Control System part 1,Internal Control System part 2,Constitution of ICS,Internal Standard</Accordion.Header>
          <Accordion.Body>
            <InternalControlSytsem />
          </Accordion.Body>
        </Accordion.Item>

       

        <Accordion.Item eventKey="16">
          <Accordion.Header>
            Procedures for implementation of ICS,Operating Document
          </Accordion.Header>
          <Accordion.Body>
            <Procedure />
          </Accordion.Body>
        </Accordion.Item>

        
        <Accordion.Item eventKey="18">
          <Accordion.Header>Internal Approval Document,Yield Estimates & Training of ICS Personnel & Training of Farmers,Buying Procedures</Accordion.Header>
          <Accordion.Body>
            <InternalApprove />
          </Accordion.Body>
        </Accordion.Item> 

       
      </Accordion>


    </div>
  </div>
  )
}
