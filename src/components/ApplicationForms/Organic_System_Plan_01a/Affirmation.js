import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  Name: "",
  Sign: "",
  Date: "",
  CertifiersDecision: "",
  Concerns: "",
  NameOfCertifier: "",
  CertifierSign: "",
  CertiferDate: "",
  Rname: "",
  Rsign: "",
  Rdate: "",
  Aname: "",
  Asign: "",
  Adate: "",
};

const Affirmation = () => {
  const [user, setUser] = useState(userObj);

  const handleInputChange = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };

  const SendToApi = () => {
    if (
      user.Name=== ""||
      user.Sign=== ""||
      user.Date===""||
      user.CertifiersDecision===""||
      user.Concerns===""||
      user.NameOfCertifier=== ""||
      user.CertifierSign=== ""||
      user.CertiferDate===""||
      user.Rname===""||
      user.Rsign===""||
      user.Rdate===""||
      user.Aname===""||
      user.Adate===""
      
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
            Name: user.Name,
            Sign: user.Sign,
            Date: user.Date,
            CertifiersDecision: user.CertifiersDecision,
            Concerns: user.Concerns,
            NameOfCertifier: user.NameOfCertifier,
            CertifierSign: user.CertifierSign,
            CertiferDate: user.CertiferDate,
            Rname: user.Rname,
            Rsign: user.Rsign,
            Rdate: user.Rdate,
            Aname: user.Aname,
            Asign: user.Asign,
            Adate: user. Adate,
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
          <div>
            I affirm that all statements made in this application and annexes
            are true and correct. I understand that acceptance of this
            questionnaire in no way implies granting of certification. I agree,
            on behalf of the members of the committee and managers to follow the
            relevant standards (NPOP etc.). I further affirm that up to date
            information is available at the office for all our members during
            the inspection.
            <br />
            <br />
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Name of Responsible person:
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  name="Name"
                  onChange={handleInputChange}
                  value={user.Name}
                  placeholder=""
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={4}>
                Signature of Responsible person:
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  name="Sign"
                  onChange={handleInputChange}
                  value={user.Sign}
                  placeholder=""
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={1}>
                Date :
              </Form.Label>
              <Col sm={2}>
                <Form.Control
                  type="date"
                  name="Date"
                  onChange={handleInputChange}
                  value={user.Date}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </div>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>To be filled by the Certifier (Initial review)</h4>
          <br />
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Certifier’s Decision:
            </Form.Label>
            <Col sm={3}>
              <Form.Check
                type="checkbox"
                name="CertifiersDecision"
                checked={user.CertifiersDecision}
                value="Approved"
                onChange={handleInputChange}
                label="Approved"
              />
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                name="CertifiersDecision"
                checked={user.CertifiersDecision}
                value="Not Approved"
                onChange={handleInputChange}
                label="Not Approved"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Any issues of concern :{" "}
            </Form.Label>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="Concerns"
                onChange={handleInputChange}
                value={user.Concerns}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={5}>
                  Name of Certifier :{" "}
                </Form.Label>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    name="NameOfCertifier"
                    onChange={handleInputChange}
                    value={user.NameOfCertifier}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Signature :{" "}
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="CertifierSign"
                    onChange={handleInputChange}
                    value={user.CertifierSign}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Date :{" "}
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="date"
                    name="CertiferDate"
                    onChange={handleInputChange}
                    value={user.CertiferDate}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <Row>
            <Col>
              <h4>Applicant / Representative </h4>
              <Form.Group className="mb-3">
                <Form.Label>Name of Certifier : </Form.Label>{" "}
                <Form.Control
                  type="text"
                  name="Rname"
                  onChange={handleInputChange}
                  value={user.Rname}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Signature : </Form.Label>
                <Form.Control
                  type="text"
                  name="Rsign"
                  onChange={handleInputChange}
                  value={user.Rsign}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date : </Form.Label>

                <Form.Control
                  type="date"
                  name="Rdate"
                  onChange={handleInputChange}
                  value={user.Rdate}
                  placeholder=""
                />
              </Form.Group>
            </Col>
            <Col>
              <h4>Auditor</h4>
              <Form.Group className="mb-3">
                <Form.Label>Name of Certifier : </Form.Label>{" "}
                <Form.Control
                  type="text"
                  name="Aname"
                  onChange={handleInputChange}
                  value={user.Aname}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Signature : </Form.Label>
                <Form.Control
                  type="text"
                  name="Asign"
                  onChange={handleInputChange}
                  value={user.Asign}
                  placeholder=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date : </Form.Label>

                <Form.Control
                  type="date"
                  name="Adate"
                  onChange={handleInputChange}
                  value={user.Adate}
                  placeholder=""
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <Button onClick={SendToApi}>Submit</Button>
        
      </Form>
    </div>
  );
};

export default Affirmation;
