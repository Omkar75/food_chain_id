import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  Scope: "",
  ConstitutionOfICS: "",
  ICS: "",
  DevelopIQS: "",
  InternalStandards: "",
  ConflictOfInterest: "",
  ScopeOfCertification: "",
  Trade: "",
  ImplementationICS: "",
  OperatingDocument: "",
  InternalInspections: "",
  InternalApprovals: "",
  YieldEstimate: "",
  Sanctions: "",
  ICSPersonnel: "",
  TrainingOfFarmers: "",
  BuyingProcedures: "",
  HandlingProcedures: "",
  Sampling: "",
  RecordingComplete: "",
  CommentsBySecondaryR: "",
  CertificationDecision:"",
};
const ICSR = () => {
  const [user, setUser] = useState(userObj);

  const handleInputChange = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };
  useEffect(() => {
    fetch(
      "https://foodchainid.herokuapp.com/foodchainid_form5/geticsreview5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_conn:"62d1545bb63a268f6cbe788f"
        }),
      }
    ).then((res)=>{res.json().then((data)=>{console.log(data)})})


  
    
  }, [])
  

  const SendToApi = () => {
    if (
      user.Scope=== ""||
      user.ConstitutionOfICS=== ""||
      user.ICS=== ""||
      user.DevelopIQS=== ""||
      user.InternalStandards=== ""||
      user.ConflictOfInterest=== ""||
      user.ScopeOfCertification=== ""||
      user.Trade=== ""||
      user.ImplementationICS=== ""||
      user.OperatingDocument=== ""||
      user.InternalInspections=== ""||
      user.InternalApprovals=== ""||
      user.YieldEstimate=== ""||
      user.Sanctions=== ""||
      user.ICSPersonnel=== ""||
      user.TrainingOfFarmers=== ""||
      user.BuyingProcedures=== ""||
      user.HandlingProcedures=== ""||
      user.Sampling=== ""||
      user.RecordingComplete=== ""||
      user.CommentsBySecondaryR=== ""||
      user.CertificationDecision===""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form5/addicsreview5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Scope:user.Scope,
            ConstitutionOfICS:user.ConstitutionOfICS,
            ICS:user.ICS,
            DevelopIQS:user.DevelopIQS,
            InternalStandards:user.InternalStandards,
            ConflictOfInterest:user.ConflictOfInterest,
            ScopeOfCertification:user.ScopeOfCertification,
            Trade:user.Trade,
            ImplementationICS:user.ImplementationICS,
            OperatingDocument:user.OperatingDocument,
            InternalInspections:user.InternalInspections,
            InternalApprovals:user.InternalApprovals,
            YieldEstimate:user.YieldEstimate,
            Sanctions:user.Sanctions,
            ICSPersonnel:user.ICSPersonnel,
            TrainingOfFarmers:user.TrainingOfFarmers,
            BuyingProcedures:user.BuyingProcedures,
            HandlingProcedures:user.HandlingProcedures,
            Sampling:user.Sampling,
            RecordingComplete:user.RecordingComplete,
            CommentsBySecondaryR:user.CommentsBySecondaryR,
            CertificationDecision:user.CertificationDecision,
            form_conn:"62d1545bb63a268f6cbe788f"
          }),
        }
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})
  
  
      }
    }
  return (
    <div className="rules text-md-right">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Internal Control System Review</h4>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Scope:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Scope"
                onChange={handleInputChange}
                value={user.Scope}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Constitution of ICS:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ConstitutionOfICS"
                onChange={handleInputChange}
                value={user.ConstitutionOfICS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Internal Control System:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ICS"
                onChange={handleInputChange}
                value={user.ICS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              How to Develop an IQS:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="DevelopIQS"
                onChange={handleInputChange}
                value={user.DevelopIQS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Internal Standards:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="InternalStandards"
                onChange={handleInputChange}
                value={user.InternalStandards}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Conflict of Interest:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ConflictOfInterest"
                onChange={handleInputChange}
                value={user.ConflictOfInterest}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Scope of Certification:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ScopeOfCertification"
                onChange={handleInputChange}
                value={user.ScopeOfCertification}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Trade:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Trade"
                onChange={handleInputChange}
                value={user.Trade}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Procedures for the implementation of Internal Control System:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ImplementationICS"
                onChange={handleInputChange}
                value={user.ImplementationICS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Operating Document:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="OperatingDocument"
                onChange={handleInputChange}
                value={user.OperatingDocument}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Internal Inspections:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="InternalInspections"
                onChange={handleInputChange}
                value={user.InternalInspections}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Internal Approvals:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="InternalApprovals"
                onChange={handleInputChange}
                value={user.InternalApprovals}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Yield Estimate:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="YieldEstimate"
                onChange={handleInputChange}
                value={user.YieldEstimate}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Non-compliances and Sanctions:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Sanctions"
                onChange={handleInputChange}
                value={user.Sanctions}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Training of ICS Personnel:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ICSPersonnel"
                onChange={handleInputChange}
                value={user.ICSPersonnel}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Training of Farmers:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="TrainingOfFarmers"
                onChange={handleInputChange}
                value={user.TrainingOfFarmers}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Buying Procedures:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="BuyingProcedures"
                onChange={handleInputChange}
                value={user.BuyingProcedures}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Storage & Handling Procedures:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="HandlingProcedures"
                onChange={handleInputChange}
                value={user.HandlingProcedures}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Sampling (if applicable):
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Sampling"
                onChange={handleInputChange}
                value={user.Sampling}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Is the recording of positive, negative & NA findings complete and
              justified?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="RecordingComplete"
                onChange={handleInputChange}
                value={user.RecordingComplete}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Comments by Secondary Reviewer(s):
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="CommentsBySecondaryR"
                onChange={handleInputChange}
                value={user.CommentsBySecondaryR}
                placeholder=""
              />
            </Col>
          </Form.Group>
          <h4>Proposal of Secondary Reviewer for Certification:</h4>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Proposed Certification Decision

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CertificationDecision"
                onChange={handleInputChange}
                value={user.CertificationDecision}
              ><option>Select Option</option>
                <option value="To be Withheld">To be Withheld</option>
                <option value="To be Approved">To be Approved</option>
                <option value="To be Denied">To be Denied</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>
          <br></br>

          <Button onClick={SendToApi}>Submit</Button>
          <br></br>
        </Container>
      </Form>
    </div>
  );
};

export default ICSR;