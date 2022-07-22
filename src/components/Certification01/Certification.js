import React, { useState,  useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function Certification() {
  const [formdata,setformdata] = useState({
    Certification: "",
    Standard: "",
    Time: "",
  });

  const inputEvent = (event, datasheet) => {
   event.preventDefault()
    let Newformdata = {

      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };


  useEffect(() => {}, [formdata]);


  const SendToApi = () => {
    if(formdata.Certification===""|| formdata.Standard===""||formdata.Time===""){
      alert("Enter all details")
    }
    else{ 
    fetch("https://foodchainid.herokuapp.com/foodchainid_form1/addcertinfo",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({ 
              Certification: formdata.Certification,
              Standard:formdata.Standard,
              Time: formdata.Time,
              userId: "62c403e18e1a710854e6e856",

            })
        }
    ).then((res)=>{res.json().then((data)=>{console.log(data)})})

  }



}
  
  return (
    <div className="container card card-body ">
      {JSON.stringify(formdata)}
          <center>
            {" "}
            <h6>Certification Information</h6>
          </center>
          <div>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Certification
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name="Certification"
                  onChange={inputEvent}
                  value={formdata.Certification}
                >
                  <option value="Addition ">Addition </option>
                  <option value="Change">Change</option>
                  <option value="Withdrawal">Withdrawal</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Standard
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name="Standard"
                  onChange={inputEvent}
                  value={formdata.Standard}
                >
                  <option>select</option>
                  <option value="NPOP ">NPOP</option>
                  <option value="Other">Other</option>
                </Form.Select>
                <Form.Control placeholder="If Other, Specify " />{" "}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                How long your farm under organic management
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name="Time"
                  onChange={inputEvent}
                  value={formdata.Time}
                >
                  <option value="Beginning ">Beginning </option>
                  <option value="one_Year">Since Last One Year</option>
                  <option value="More_Then_One">More Than One Year</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <button
        onClick={() => {
          SendToApi();
        }}
      >
        Submit
      </button>
          </div>
        </div>
    
  );
}
