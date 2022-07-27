import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  
  NameOrganization:"",
  FCIDProjectNo:"",
  MailingAdd:"",
  PhysicalAdd:"",
  ContactPersonDesignation:"",
  DateInitialApplication:"",
  DateOfTraceNetReg:"",
  TracenetRegNo:"",
  Standard:"",
  Status:"",
  TotalArea:"",
  CropArea:"",
  NoOfFarmers:"",
  RiskStatus:"",
  CAuditReportNo:"",
  Auditor:"",
  SecondaryR:"",
  AuditDate:"",
  DateOfReview:""
};

const  Form05 = () => {
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
      "https://foodchainid.herokuapp.com/foodchainid_form5/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_conn: "62d1545bb63a268f6cbe788f",
        }),
      }
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  const SendToApi = () => {
    if (
      user.NameOrganization=== ""||
      user.FCIDProjectNo=== ""||
      user.MailingAdd=== ""||
      user.PhysicalAdd=== ""||
      user.ContactPersonDesignation=== ""||
      user.DateInitialApplication=== ""||
      user.DateOfTraceNetReg=== ""||
      user.TracenetRegNo=== ""||
      user.Standard=== ""||
      user.Status=== ""||
      user.TotalArea=== ""||
      user.CropArea=== ""||
      user.NoOfFarmers=== ""||
      user.RiskStatus=== ""||
      user.CAuditReportNo=== ""||
      user.Auditor=== ""||
      user.SecondaryR=== ""||
      user.AuditDate=== ""||
      user.DateOfReview=== ""
      
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addsignature",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            NameOrganization:user.NameOrganization,
            FCIDProjectNo:user.FCIDProjectNo,
            MailingAdd:user.MailingAdd,
            PhysicalAdd:user.PhysicalAdd,
            ContactPersonDesignation:user.ContactPersonDesignation,
            DateInitialApplication:user.DateInitialApplication,
            DateOfTraceNetReg:user.DateOfTraceNetReg,
            TracenetRegNo:user.TracenetRegNo,
            Standard:user.Standard,
            Status:user.Status,
            TotalArea:user.TotalArea,
            CropArea:user.CropArea,
            NoOfFarmers:user.NoOfFarmers,
            RiskStatus:user.RiskStatus,
            CAuditReportNo:user.CAuditReportNo,
            Auditor:user.Auditor,
            SecondaryR:user.SecondaryR,
            AuditDate:user.AuditDate,
            DateOfReview:user.DateOfReview,
            form_conn:"62d1545bb63a268f6cbe788f"
          }),
        }
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})
  
  
      }
    }

  return (
    <div className="rules text-md-right">
      {JSON.stringify(user)}
      {/* Repeated Part */}
      {/* <Form>
        <Container style={{ border: "1px solid black" }}>
          <Col>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
            Name of the Organization/ICS/Project:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NameOrganization"
                onChange={handleInputChange}
                value={user.NameOrganization}
                placeholder=""
              />
            </Col>
          </Form.Group>
          </Col>

          
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>FCID Project No.:</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="FCIDProjectNo"
                    onChange={handleInputChange}
                    value={user.FCIDProjectNo}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Mailing Address:</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="MailingAdd"
                    onChange={handleInputChange}
                    value={user.MailingAdd}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
            Physical Address:{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="PhysicalAdd"
                onChange={handleInputChange}
                value={user.PhysicalAdd}
                placeholder=""
              />
            </Col>
          </Form.Group>
          
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Name of Contact Person and designation: </Form.Label>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    name="ContactPersonDesignation"
                    onChange={handleInputChange}
                    value={user.ContactPersonDesignation}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column> Date of Initial Application/ Annual update form:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="DateInitialApplication"
                    onChange={handleInputChange}
                    value={user.DateInitialApplication}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column> Date of registration on Trace Net: </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="DateOfTraceNetReg"
                    onChange={handleInputChange}
                    value={user.DateOfTraceNetReg}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Tracenet Registration Number:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="TracenetRegNo"
                    onChange={handleInputChange}
                    value={user.TracenetRegNo}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
              Standard applied: 
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="Standard"
                onChange={handleInputChange}
                value={user.Standard}
              ><option>Select Option</option>
                <option value="NPOP">NPOP</option>
                <option value="Other">Other</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
              Status applied :
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="Status"
                onChange={handleInputChange}
                value={user.Status}
              ><option>Select Option</option>
                <option value="In Conversion">In Conversion</option>
                <option value="Organic">Organic</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>
          <Row>
          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Total Area: </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="TotalArea"
                    onChange={handleInputChange}
                    value={user.TotalArea}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Crop Area: </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="CropArea"
                    onChange={handleInputChange}
                    value={user.CropArea}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>No. of farmers: </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="NoOfFarmers"
                    onChange={handleInputChange}
                    value={user.NoOfFarmers}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>

            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Risk Status: 
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="RiskStatus"
                onChange={handleInputChange}
                value={user.RiskStatus}
              ><option>Select Option</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Certification Audit Report No.: </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="CAuditReportNo"
                    onChange={handleInputChange}
                    value={user.CAuditReportNo}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
          </Col>

          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Name of Auditor(s): </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="Auditor"
                    onChange={handleInputChange}
                    value={user.Auditor}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
          </Col>

          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Name of Secondary reviewer(s): </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="SecondaryR"
                    onChange={handleInputChange}
                    value={user.SecondaryR}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
          </Col>

          <Row>
          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Audit Date(s): </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="AuditDate"
                    onChange={handleInputChange}
                    value={user.AuditDate}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
          </Col>

          <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Date(s) of Review: </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="DateOfReview"
                    onChange={handleInputChange}
                    value={user.DateOfReview}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
          </Col>
          </Row>
          
          <br></br>
          
                    <Button onClick={SendToApi}>Submit</Button>
                    <br></br>
                  </Container> 
                </Form> */}
              </div>
            );
          };
          
          export default Form05;