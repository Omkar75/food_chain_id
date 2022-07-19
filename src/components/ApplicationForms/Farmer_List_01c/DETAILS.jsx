import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
const detailsheader = [];
const DETAILS = () => {
  const { auth } = useContext(AuthContext);
  const [details, setdetails] = useState({
    name: "",
    Tracent_reg_no: "",
    FCID_proj_no: "",
    Inspection_month_and_year: "",
  });
  const handleChange = (event) => {
    let Newformdata = {
      ...details,
      [event.target.name]: event.target.value,
    };
    setdetails(Newformdata);
  };
  const handleSubmit = () => {
    //api call
  }
  return (
    <div>
      <Container className="space-y-4">
        <Row>
          <Col>Name of the Grower Group</Col>
          <Col>
            <input value={details.name} type="text" onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col>Tracenet Registration Number</Col>
          <Col>
            <input value={details.Tracent_reg_no} type="text" onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col>FCID Project No.</Col>
          <Col>
            <input value={details.FCID_proj_no} type="text" onChange={handleChange} />
          </Col>
        </Row>
        <Row>
          <Col>Inspection month and year</Col>
          <Col>
            <input value={details.Inspection_month_and_year} type="text" onChange={handleChange} />
          </Col>
        </Row>
        <Row>
        <div className="flex justify-end">
        {(auth!=="Operator")?<Button >Approve</Button>:<Button onClick={handleSubmit}>Submit for Approval</Button>}
        
      </div>
        </Row>
      </Container>
    </div>
  );
};

export default DETAILS;
