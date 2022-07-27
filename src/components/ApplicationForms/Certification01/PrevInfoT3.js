import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Input from "react-bootstrap/InputGroup";

export default function PrevInfoT3() {
  const [formdata, setformdata] = useState({
    Name: "",
    sign: "",
    Date: "",

    certified: "",
    Standard: "",
    body: "",
    reason: "",
    registration: "",
    status: "",
    reason_d: "",
  });
  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };

  useEffect(() => {}, [formdata]);

  const SendToApi = () => {
    if (
      formdata.Name === "" ||
      // formdata.sign === "" ||
      formdata.Date === "" ||
      formdata.certified === "" ||
      formdata.Standard === "" ||
      formdata.body === "" ||
      formdata.reason === "" ||
      formdata.registration === "" ||
      formdata.status === "" ||
      formdata.reason_d === ""
    ) {
      alert("Enter All details");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1/addprevcert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formdata.Name,
            sign: "sign",
            Date: formdata.Date,

            certified: formdata.certified==="Yes"?true:false,
            Standard: formdata.Standard,
            body: formdata.body,
            reason: formdata.reason,
            registration: formdata.registration,
            status: formdata.status==="Yes"?true:false,
            reason_d: formdata.reason_d,
            userId: "62c403e18e1a710854e6e856",
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
    <section className="section">
      {JSON.stringify(formdata)}

      <div className="container card card-body ">
        <p>
          Confirmation:
          <br></br>
          This is to confirm that the information that are filled in the
          questionnaire is complete and accurate to the best of my knowledge.
        </p>
        <br></br>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Name</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Enter Farmer’s name  "
            name="Name"
            onChange={inputEvent}
            value={formdata.Name}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Signature</label>

          <input
            className="w-50 my-2"
            type="file"
            placeholder="Signature  "
            name="sign"
            onChange={inputEvent}
            value={formdata.sign}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Date</label>

          <input
            className="w-50 my-2"
            type="date"
            placeholder="Date  "
            name="Date"
            onChange={inputEvent}
            value={formdata.Date}
            required="required"
          />
        </div>
      </div>
      <div className="container card card-body">
        <h6>
          <center>Previous Certification Information (if any)</center>
        </h6>
        <Form.Group className="border-2 border-black p-1">
          <Row>
            <Form.Label column sm={3}>
              Is your organization currently certified?
            </Form.Label>
            <Col>
              <Form.Select
                aria-label="Default select example"
                value={formdata.certified}
                onChange={inputEvent}
                name="certified"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Row>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">If certified, to what Standard(s):</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="Name "
              name="Standard"
              onChange={inputEvent}
              value={formdata.Standard}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">If certified, Current certification body</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="body "
              name="body"
              onChange={inputEvent}
              value={formdata.body}
              required="required"
            />
          </div>

          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">Tracenet Registration number</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="Number "
              name="registration"
              onChange={inputEvent}
              value={formdata.registration}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">Reason for changing certification body:</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder=" "
              name="reason"
              onChange={inputEvent}
              value={formdata.reason}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">
              Has your organization ever been declined or refused certification?
            </label>
            <Form.Select
              aria-label="Default select example"
              value={formdata.status}
              onChange={inputEvent}
              name="status"
            >
              <option>select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">
              If any organization decline your certification give reason
            </label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder=" "
              name="reason_d"
              onChange={inputEvent}
              value={formdata.reason_d}
              required="required"
            />
          </div>
        </Form.Group>
        <button
              onClick={() => {
                SendToApi();
              }}
            >
              Submit
            </button>
        <label>
          (Note: Attach NOC Letter (copy of NOC from TraceNet), Scope
          Certificate from previous CB, Last report received from the previous
          certified CB)
        </label>
      </div>
    </section>
  );
}
