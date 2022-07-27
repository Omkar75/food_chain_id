import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  FName: "",
  FDate: "",
  FSignature: "",

  SName: "",
  SDate: "",
  SSignature: "",
};
const Proposal = () => {
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
      "https://foodchainid.herokuapp.com/foodchainid_form5/getsecondreview5",
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
      user.FName === "" ||
      user.FDate === "" ||
      user.FSignature === "" ||
      user.SName === "" ||
      user.SDate === "" ||
      user.SSignature === ""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form5/addsecondreview5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            signatures:[
              {
              name:user.FName,
              date:user.FDate,
              sign:user.FSignature
              },
              {
                name:user.SName,
                date:user.SDate,
                sign:user.SSignature
              }],
              


            form_conn: "62d1545bb63a268f6cbe788f",
          }),
        }
      ).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    }
  };

  return (
    <div className="rules text-md-right">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Name & Signature of Secondary Reviewer</h4>
          <Col>
            <Form.Label column>1st Reviewer: </Form.Label>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Name: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="FName"
                  onChange={handleInputChange}
                  value={user.FName}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Date: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="FDate"
                  onChange={handleInputChange}
                  value={user.FDate}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Signature: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="FSignature"
                  onChange={handleInputChange}
                  value={user.FSignature}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>
          <br />
          <br />
          <Col>
            <Form.Label column>2nd Reviewer: </Form.Label>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Name: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="SName"
                  onChange={handleInputChange}
                  value={user.SName}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Date: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="SDate"
                  onChange={handleInputChange}
                  value={user.SDate}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column>Signature: </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  name="SSignature"
                  onChange={handleInputChange}
                  value={user.SSignature}
                  placeholder=""
                />
              </Col>
            </Form.Group>
          </Col>

          <br></br>

          <Button onClick={SendToApi}>Submit</Button>
          <br></br>
        </Container>
      </Form>
    </div>
  );
};

export default Proposal;
