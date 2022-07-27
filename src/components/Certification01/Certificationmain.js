import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Table, Accordion } from "react-bootstrap";
import Table1 from "./Table1";
import Unit from "./UnitA";
import DescT4 from "./DescT4";
import ImpInfoT5 from "./ImpInfoT5";
import PrevInfoT3 from "./PrevInfoT3";
import Certification_Decision from "./Certification_Decison";
import UnitB from "./UnitB";
import SubDocT1 from "./SubDocT1";
import SubDocT2 from "./SubDocT2";
import CB from "./CB";
import Footer from "./Footer";
import Certification from "./Certification";
import CROP_DETAILS from '../ApplicationForms/Farmer_List_01c/CROP_DETAILS';

export default function Certificationmain() {
  return (
    <div className="container card card-body "  >
    <center> <h2>01 Certification Form </h2></center>
  <div className="container">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{"Contact Details"}</Accordion.Header>
        <Accordion.Body>
          <Table1 />
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>{"Certification Information"}</Accordion.Header>
        <Accordion.Body>
          <Certification />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          {"Farmer List"}
        </Accordion.Header>
        <Accordion.Body>
          <CROP_DETAILS />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          {"Farming unit information: Individual farming unit"}
        </Accordion.Header>
        <Accordion.Body>
          <Unit />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          {"Farming unit information for group crop"}
        </Accordion.Header>
        <Accordion.Body>
          <UnitB />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          {"Previous Certification Information (if any)"}
        </Accordion.Header>
        <Accordion.Body>
          <PrevInfoT3 />
        </Accordion.Body>
      </Accordion.Item>

     
      <Accordion.Item eventKey="6">
        <Accordion.Header>{"Important Information"}</Accordion.Header>
        <Accordion.Body>
          <ImpInfoT5 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>{"Document Check Records"}</Accordion.Header>
        <Accordion.Body>
          <SubDocT1 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>{"Document Uploads"}</Accordion.Header>
        <Accordion.Body>
          <SubDocT2 />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>{"To be completed by CB:"}</Accordion.Header>
        <Accordion.Body>
          <CB />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header>
          {"Send original hard copy of application form to below address:"}
        </Accordion.Header>
        <Accordion.Body>
          <Footer />
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  </div>
  </div>
  )
}
