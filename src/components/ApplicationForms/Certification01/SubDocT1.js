import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function SubDocT1() {
  const [formdata, setformdata] = useState({
    Name: "",
    pan: "",
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
    event.preventDefault()
     let Newformdata = {
 
       ...formdata,
       [event.target.name]: event.target.value,
     };
     setformdata(Newformdata);
   };

  useEffect(() => {}, [formdata]);
  return (
    
      <div className="container card card-body ">
        {/* {JSON.stringify(formdata)} */}
            <h6> Document Check Records </h6>
            <hr />
            <Table estriped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-md-4" name="sno">
                    Sno
                  </th>
                  <th className="col-md-4" name="farm">
                    Kindly Submit the Following Documents Along with Application
                  </th>
                  <th className="col-md-4" name="area">
                    Y/N/N A
                  </th>
                  <th className="col-md-2" name="crop">
                    Remarks By Reviewer (To be filled by FCID)
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>1</td>
                  <td>
                    <tr>Individual Crop production</tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>2</td>
                  <td>
                    <tr>PAN card, Aadhar Card, Land ownership document/7-12</tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>3</td>
                  <td>
                    <tr>Organic System Plan (OSP)</tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>4</td>
                  <td>
                    <tr>Field History</tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>5</td>
                  <td>
                    <tr>Field Specification & Yield Estimate</tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>6</td>
                  <td>
                    <tr>
                      GMO Free Declaration (applicable for crops like Cotton,
                      Soybean, Maize, Brinjal etc.)
                    </tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>7</td>
                  <td>
                    <tr>
                      Field Map (showing location of the farm, field boundaries,
                      landmarks, buffer zones, crops grown)
                    </tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>9</td>
                  <td>
                    <tr>
                    GROWER GROUP / ICS

                    </tr>
                  </td>
                  <td>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label column sm={2}></Form.Label>
                      <Col sm={5}>
                        <Form.Select
                          name=" TypesofBusiness"
                          onChange={inputEvent}
                          value={formdata.TypesofBusiness}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="NA">NA</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </td>
                  <td>
                    <input
                      name="name"
                      onChange={inputEvent}
                      value={formdata.Name}
                      type="text"
                      placeholder="2016"
                    />
                  </td>
                </tr>
              </tbody>


            </Table>
          </div>
       
   
  );
}
