import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

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
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})

    }
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        {JSON.stringify(formdata)}

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Organization Name</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Name"
            onChange={inputEvent}
            value={formdata.Name}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Organization PAN No / GST No </label>

          <input
            className="w-50 my-2"
            type="number"
            placeholder="Name "
            name="pan"
            onChange={inputEvent}
            value={formdata.pan}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Type of organization</label>

          <Form.Group>
            <Form.Select
              name=" Typesoforg"
              onChange={inputEvent}
              value={formdata.Typesoforg}
            >
              <option value="Proprietor">Proprietor</option>
              <option value="Partnership ">Partnership </option>
              <option value="Limited">Limited</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Other:"> Other:</option>
            </Form.Select>
          
            <Form.Control  placeholder="If Other, Specify " />
          </Form.Group>
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Contact Name</label>

          <input
            className="w-50 my-2"
            type="number"
            placeholder="Name "
            name="contact"
            onChange={inputEvent}
            value={formdata.contact}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Contact Position</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Position"
            onChange={inputEvent}
            value={formdata.Position}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Office/ legal address</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Office"
            onChange={inputEvent}
            value={formdata.Office}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Country</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Country"
            onChange={inputEvent}
            value={formdata.Country}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Post code:</label>

          <input
            className="w-50 my-2"
            type="number"
            placeholder="Name "
            name="Post"
            onChange={inputEvent}
            value={formdata.Post}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">
            Physical (Farm/ICS office) Address, if different
          </label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Physical"
            onChange={inputEvent}
            value={formdata.Physical}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Telephone</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Telephone"
            onChange={inputEvent}
            value={formdata.Telephone}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Fax </label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Fax"
            onChange={inputEvent}
            value={formdata.Fax}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Mobile</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Mobile"
            onChange={inputEvent}
            value={formdata.Mobile}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Email</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Email"
            onChange={inputEvent}
            value={formdata.Email}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Website: </label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Website"
            onChange={inputEvent}
            value={formdata.Website}
            required="required"
          />
        </div>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Aadhar No. </label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Aadhar"
            onChange={inputEvent}
            value={formdata.Aadhar}
            required="required"
          />
        </div>
      </div>
      <button
        onClick={() => {
          SendToApi();
        }}
      >
        Submit
      </button>
    </section>
  );
}
