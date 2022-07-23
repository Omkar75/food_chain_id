import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import Header from "./Header";
import Scope from "./Scope";
import Anual_Certification from "./Anual_Certification";
import Payment from "./Payment";
import Declaration from "./Declaration";
import Legal_Sign from "./Legal_Sign";
import Auth_Sign from "./Auth_Sign";

export default function CertificationAgreementMain() {
  return (
    <section className="section">
      <div className="container card card-body  ">
        <strong><center>CERTIFICATION AGREEMENT</center></strong>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>CERTIFICATION AGREEMENT</Accordion.Header>
            <Accordion.Body>
              <Header />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Scope of work and Annual audit</Accordion.Header>
            <Accordion.Body>
              <Scope />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Annual Audit and Certification Fee</Accordion.Header>
            <Accordion.Body>
              <Anual_Certification />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Payment terms and Agreement validity</Accordion.Header>
            <Accordion.Body>
              <Payment />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Declaration by the CLIENT</Accordion.Header>
            <Accordion.Body>
              <Declaration />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Signature of authorized signatory of FCID</Accordion.Header>
            <Accordion.Body>
              <Auth_Sign />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Signature of legal representative of the client
</Accordion.Header>
            <Accordion.Body>
              <Legal_Sign />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </div>
    </section>
  )
}
