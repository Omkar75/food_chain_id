
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Table, Accordion } from "react-bootstrap";
import Form05 from "./Form05";
import Checkpoints_05 from "./Checkpoints_05";
import TechnicalR from "./TechnicalR";
import Proposal from "./Proposal";
import ICSR from "./ICSR";

function Technical_Review_5() {
    return (
      
      <div className="container card card-body "  >
        <center>05 Technical Review</center>
      <div className="container card card-body ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Project/ICS/Organization Information</Accordion.Header>
            <Accordion.Body>
              <Form05/>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Checkpoints</Accordion.Header>
            <Accordion.Body>
              <Checkpoints_05/>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Technical Review</Accordion.Header>
            <Accordion.Body>
              <TechnicalR/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Internal Control System Review And Proposal of Secondary Reviewer for Certification</Accordion.Header>
            <Accordion.Body>
              <ICSR/>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header> Name & Signature of Secondary Reviewer </Accordion.Header>
            <Accordion.Body>
              <Proposal/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      </div>
    );
  }
  
  export default Technical_Review_5;