import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col, Button } from "react-bootstrap";

export default function Table1() {
  const [formdata, setformdata] = useState({
    Name: "",
    pan: "",
    Typesoforg: "",
    contact: "",
    Position: "",
    Office: "",
    Country: "",
    Post: "",
    Physical: "",
    Telephone: "",
    Fax: "",
    Mobile: "",
    Email: "",
    Website: "",
    Aadhar: "",
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
      formdata.Aadhar === "" ||
      formdata.Website === "" ||
      formdata.Name === "" ||
      formdata.pan === "" ||
      formdata.contact === "" ||
      formdata.Position === "" ||
      formdata.Office === "" ||
      formdata.Country === "" ||
      formdata.Email === "" ||
      formdata.Fax === "" ||
      formdata.Mobile === "" ||
      formdata.Telephone === ""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1/addContactdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formdata.Name,
            pan: formdata.pan,
            contact: formdata.contact,
            Position: formdata.Position,
            Office: formdata.Office,
            Country: formdata.Country,
            Post: formdata.Post,
            Physical: formdata.Physical,
            Telephone: formdata.Telephone,
            Fax: formdata.Fax,
            Mobile: formdata.Mobile,
            Email: formdata.Email,
            Website: formdata.Website,
            Aadhar: formdata.Aadhar,

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
    <section className="Container">
      <div className="container space-y-4">
        {JSON.stringify(formdata)}
        <Row>
        <Col className="space-y-4">
        <div className="form-group flex">
          <label htmlFor="">Organization Name</label>

          <input
            className=""
            type="text"
            name="Name"
            onChange={inputEvent}
            value={formdata.Name}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Organization PAN No / GST No </label>

          <input
            className=""
            type="text"
            name="pan"
            onChange={inputEvent}
            value={formdata.pan}
            required="required"
          />
        </div>

        <div className="form-group flex">
          <label htmlFor="">Type of organization</label>

          <Form.Group>
            <Form.Select
              name="Typesoforg"
              onChange={inputEvent}
              value={formdata.Typesoforg}
            >
              <option>Select a Option</option>
              <option value="Proprietor">Proprietor</option>
              <option value="Partnership ">Partnership </option>
              <option value="Limited">Limited</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Other:"> Other:</option>
            </Form.Select>

            <Form.Control name="Typesoforg"
              onChange={inputEvent}
              value={formdata.Typesoforg} placeholder="If Other, Specify " />
          </Form.Group>
        </div>
        </Col>
        <Col className="space-y-4">
        <div className="form-group flex">
          <label htmlFor="">Contact Name</label>

          <input
            className=""
            type="text"
            name="contact"
            onChange={inputEvent}
            value={formdata.contact}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Contact Position</label>

          <input
            className=""
            type="text"
            name="Position"
            onChange={inputEvent}
            value={formdata.Position}
            required="required"
          />
        </div>

        <div className="form-group flex">
          <label htmlFor="">Office/ legal address</label>

          <textarea
            className=""
            type="text"
            name="Office"
            onChange={inputEvent}
            value={formdata.Office}
            required="required"
          />
        </div>
        </Col>
      </Row>
      <div className="form-group flex">
          <label htmlFor="">
            Physical (Farm/ICS office) Address, if different
          </label>

          <textarea
            className=""
            type="text"
            name="Physical"
            onChange={inputEvent}
            value={formdata.Physical}
            required="required"
          />
        </div>

        <Row>
          <Col className="space-y-4">
          <div className="form-group flex">
          <label htmlFor="">Country</label>

          <input
            className=""
            type="text"
            name="Country"
            onChange={inputEvent}
            value={formdata.Country}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Post code:</label>

          <input
            className=""
            type="text"
            name="Post"
            onChange={inputEvent}
            value={formdata.Post}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Telephone</label>

          <input
            className=""
            type="text"
            name="Telephone"
            onChange={inputEvent}
            value={formdata.Telephone}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Fax </label>

          <input
            className=""
            type="text"
            name="Fax"
            onChange={inputEvent}
            value={formdata.Fax}
            required="required"
          />
        </div>
          </Col>
          <Col className="space-y-4">
          <div className="form-group flex">
          <label htmlFor="">Mobile</label>

          <input
            className=""
            type="text"
            name="Mobile"
            onChange={inputEvent}
            value={formdata.Mobile}
            required="required"
          />
        </div>

        <div className="form-group flex">
          <label htmlFor="">Email</label>

          <input
            className=""
            type="text"
            name="Email"
            onChange={inputEvent}
            value={formdata.Email}
            required="required"
          />
        </div>
        <div className="form-group flex">
          <label htmlFor="">Website: </label>

          <input
            className=""
            type="text"
            name="Website"
            onChange={inputEvent}
            value={formdata.Website}
            required="required"
          />
        </div>

        <div className="form-group flex">
          <label htmlFor="">Aadhar No. </label>

          <input
            className=""
            type="text"
            name="Aadhar"
            onChange={inputEvent}
            value={formdata.Aadhar}
            required="required"
          />
        </div>
          </Col>
        </Row>
        <div className="flex justify-end">
      <Button
        onClick={() => {
          SendToApi();
        }}
      >
        Submit
      </Button>
      </div>
      </div>
      
    </section>
  );
}
