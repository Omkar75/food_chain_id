import React, { useState,  useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function SubDocT2() {
  const [formdata, setformdata] = useState({
    ICS_copy: "",
    NPOP_Map: "",
    OSP: "",
    Field_History: "",
    Feild_Specification: "",
    GMO_Declaration: "",
    Farmer_List: "",
    NOC_Doc: "",
  });

 

  const inputEvent = (event, i) => {
    console.log(i);
    if (i >= 0) {
      console.log("hello");
      let temparr = [...formdata.NumberOfMembers];
      console.log(temparr);
      temparr[i][event.target.name] = event.target.value;
      let Newformdata = {
        ...formdata,
        NumberOfMembers: [...temparr],
      };
      setformdata(Newformdata);
    } else {
      let Newformdata = {
        ...formdata,
        [event.target.name]: event.target.value,
      };
      setformdata(Newformdata);
    }
  };

  useEffect(() => {}, [formdata]);
  return (
    <div className="container card card-body ">
      {JSON.stringify(formdata)}
          <h6> Document Check Records </h6>
          <hr />
          <Table estriped bordered hover size="sm">
            <div>
              <thead>
                <tr>
                  <th className="col-md-2" name="sno">
                    Sno
                  </th>
                  <th className="col-md-4" name="farm">
                    Kindly Submit the Following Documents Along with Application
                  </th>
                  <th className="col-md-4" name="area">
                    Upload document
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>1.</td>
                  <td>
                    Registration Document of ICS Copy of Pan Card of
                    Mandator/ICS/Group, Aadhar Card of ICS Manager, CV of ICS
                    Manager
                  </td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" ICS_copy "
                      onChange={inputEvent}
                      value={formdata.ICS_copy}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>2 .</td>
                  <td>Overview Map (As per 5.10.1 of NPOP)</td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" NPOP_Map
                      "
                      onChange={inputEvent}
                      value={formdata.NPOP_Map}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>3 .</td>
                  <td>Organic System Plan (OSP)</td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" OSP"
                      onChange={inputEvent}
                      value={formdata.OSP}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>4 .</td>
                  <td>Field History</td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" Field_History "
                      onChange={inputEvent}
                      value={formdata.Field_History}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>5 .</td>
                  <td>Field Specification & Yield Estimate</td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" Feild_Specification
                      "
                      onChange={inputEvent}
                      value={formdata.Feild_Specification}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>6 .</td>
                  <td>
                    GMO Free Declaration (applicable for crops like Cotton,
                    Soybean, Maize, Brinjal etc.)
                  </td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" GMO_Declaration

                      "
                      onChange={inputEvent}
                      value={formdata.GMO_Declaration}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>7 .</td>
                  <td>Updated Farmer List including internal audit</td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" Farmer_List

                      "
                      onChange={inputEvent}
                      value={formdata.Farmer_List}
                    />
                  </Form.Group>
                </tr>
              </tbody>
              <tbody>
                <tr ng-repeat="name in getdrugnameNewArray">
                  <td>8 .</td>
                  <td>
                    NOC related documents, If Applicable (NOC, Valid
                    certificate, Previous report etc)
                  </td>

                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      type="file"
                      name=" NOC_Doc
                      "
                      onChange={inputEvent}
                      value={formdata.NOC_Doc}
                    />
                  </Form.Group>
                </tr>
              </tbody>
            </div>
          </Table>
        </div>
     
  );
}
