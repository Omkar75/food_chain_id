import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function Procedure() {
  const [formdata, setformdata] = useState({
    C_Entity_No: "",
    Cm_Entity_No: "",
    E_Entity_No: "",

    C_Document_No: "",
    Cm_Document_No: "",
    E_Document_No: "",

    C_Application: "",
    Cm_Application: "",
    E_Application: "",

    C_New_Farmer: "",
    Cm_New_Farmer: "",
    E_New_Farmer: "",
    C_Location:"",
    Cm_Location:"",
    E_Location:"",
    
    
    
    C_Farmer_List:"",
    Cm_Farmer_List:"",
    E_Farmer_List:"",

    C_Sanction:"",
Cm_Sanction:"",
E_Sanction:"", 
 

C_Risk:"",
Cm_Risk:"",
E_Risk:"",


C_ICS_Doc:"",
Cm_ICS_Doc:"",
E_ICS_Doc:"",

C_Visited :"",
Cm_Visited:"",
E_Visited:"",


C_Noncompliances:"",
Cm_Noncompliances:"",
E_Noncompliances:"",
  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };

  // useEffect(() => {}, [formdata]);
  return (
    <div className="container card card-body ">
      {/* {JSON.stringify(formdata)} */}
      <h6> Document Check Records </h6>
      <hr />
      <Table responsive estriped bordered hover size="sm">
        <thead>
          <tr>
            <th className="col-md-2" name="sno">
              Sno
            </th>
            <th className="col-md-4" name="farm">
              Criteria to be checked
            </th>
            <th className="col-md-4" name="area">
              Compliance <br></br>
              (mark 'X') <br></br>
              Y/N/N A
            </th>
            <th className="col-md-2" name="crop">
              Comments of the auditor
            </th>
            <th className="col-md-2" name="crop">
              Evidences
            </th>
          </tr>
        </thead>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 80 </td>
            <td>
              <tr>
                Are the members of the group registered under a single entity?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Entity_No"
                    onChange={inputEvent}
                    value={formdata.C_Entity_No}
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
                name="Cm_Entity_No"
                onChange={inputEvent}
                value={formdata.Cm_Entity_No}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Entity_No"
                onChange={inputEvent}
                value={formdata.E_Entity_No}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>81</td>
            <td>
              <tr>
                Are following documents provided to all members of the grower
                group? - Internal standards in local language - Farm data sheet
                - Farm diary - Package of practices - Training schedule
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Document_No"
                    onChange={inputEvent}
                    value={formdata.C_Document_No}
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
                name="Cm_Document_No"
                onChange={inputEvent}
                value={formdata.Cm_Document_No}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Document_No"
                onChange={inputEvent}
                value={formdata.E_Document_No}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>82</td>
            <td>
              <tr>
                Does ICS have developed a procedure to allow member farmer to
                exit the grower group? Is Exit Application Form devloped
                according to Annex 7 of NPOP Chapter 5? Is Exit Approval Form
                developed according to Annex 8 of NPOP Chapter 5?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Application"
                    onChange={inputEvent}
                    value={formdata.C_Application}
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
                name="Cm_Application"
                onChange={inputEvent}
                value={formdata.Cm_Application}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Application"
                onChange={inputEvent}
                value={formdata.E_Application}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>83</td>
            <td>
              <tr>
                Has ICS enrolled new farmer in the group from other ICS? If yes,
                has operator shared relevant information with
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_New_Farmer"
                    onChange={inputEvent}
                    value={formdata.C_New_Farmer}
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
                name="Cm_New_Farmer"
                onChange={inputEvent}
                value={formdata.Cm_New_Farmer}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_New_Farmer"
                onChange={inputEvent}
                value={formdata.E_New_Farmer}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody><center><strong>Operting Document</strong></center></tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>84</td>
            <td>
              <tr>
                84 Does the overview map showing location of each member's
                production unit (incl indicating crops cultivated in rotation
                and risk from non-organic farms) available
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Location"
                    onChange={inputEvent}
                    value={formdata.C_Location}
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
                name="Cm_Location"
                onChange={inputEvent}
                value={formdata.Cm_Location}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Location"
                onChange={inputEvent}
                value={formdata.E_Location}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>85</td>
            <td>
              <tr>
                Is Farmer’s list with code and name of the farmer, total area,
                area under crop (or number of plants), date of registration with
                the group, date of last use of forbidden products, date of
                internal inspection, name of internal inspector, result of
                internal inspection available?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Farmer_List"
                    onChange={inputEvent}
                    value={formdata.C_Farmer_List}
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
                name="Cm_Farmer_List"
                onChange={inputEvent}
                value={formdata.Cm_Farmer_List}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Farmer_List"
                onChange={inputEvent}
                value={formdata.E_Farmer_List}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>86</td>
            <td>
              <tr>
                Are any farmers sanctioned from the group? If yes, is list of
                farmers who have been issued sanctions with the reason and the
                duration of the sanction available?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Sanction"
                    onChange={inputEvent}
                    value={formdata.C_Sanction}
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
                name="Cm_Sanction"
                onChange={inputEvent}
                value={formdata.Cm_Sanction}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Sanction"
                onChange={inputEvent}
                value={formdata.E_Sanction}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>87</td>
            <td>
              <tr>
                Has risks assessed annually for grower group considering farm,
                processing, transport, trade and other critical points by ICS
                manager?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Risk"
                    onChange={inputEvent}
                    value={formdata.C_Risk}
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
                name="Cm_Risk"
                onChange={inputEvent}
                value={formdata.Cm_Risk}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Risk"
                onChange={inputEvent}
                value={formdata.E_Risk}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <center>
              <strong>Internal Inspections </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 88</td>
            <td>
              <tr>
                Has the ICS carried out at least two internal inspections and
                are documented, duly signed by internal inspector and farmer? Is
                internal inspection checklist format according to Annex 6 of
                NPOP Chapter 5?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_ICS_Doc"
                    onChange={inputEvent}
                    value={formdata.C_ICS_Doc}
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
                name="Cm_ICS_Doc"
                onChange={inputEvent}
                value={formdata.Cm_ICS_Doc}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_ICS_Doc"
                onChange={inputEvent}
                value={formdata.E_ICS_Doc}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>89</td>
            <td>
              <tr>
                Was internal inspection included visit to whole farm, storage of
                inputs, harvested products, post-harvest handling and animal
                husbandry?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Visited"
                    onChange={inputEvent}
                    value={formdata.C_Visited}
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
                name="Cm_Visited"
                onChange={inputEvent}
                value={formdata.Cm_Visited}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Visited"
                onChange={inputEvent}
                value={formdata.E_Visited}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>90</td>
            <td>
              <tr>
                 Are any severe non-compliances reported during internal
                inspection? If yes, was immediate measure taken according to
                sanction procedure?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Noncompliances"
                    onChange={inputEvent}
                    value={formdata.C_Noncompliances}
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
                name="Cm_Noncompliances"
                onChange={inputEvent}
                value={formdata.Cm_Noncompliances}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Noncompliances"
                onChange={inputEvent}
                value={formdata.E_Noncompliances}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
