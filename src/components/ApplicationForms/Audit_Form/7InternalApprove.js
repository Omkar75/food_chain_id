import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function InternalApprove() {
  const [formdata, setformdata] = useState({
    C_Approval_Decision: "",
    Cm_Approval_Decision: "",
    E_Approval_Decision: "",

    C_Checklist: "",
    Cm_Checklist: "",
    E_Checklist: "",

    C_Sanctions_Process: "",
    Cm_Sanctions_Process: "",
    E_Sanctions_Process: "",

    C_Sanctions_Format: "",
    Cm_Sanctions_Format: "",

    E_Sanctions_Format: "",

    C_Sanctions_Imposed: "",
    Cm_Sanctions_Imposed: "",
    E_Sanctions_Imposed: "",
    C_Yield:"",
    Cm_Yield:"",
    E_Yield:"",
    C_Training:"",
    Cm_Training:"",
    E_Training:"",
    C_RegularT:"",
    Cm_RegularT:"",
    E_RegularT:"",
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
            <td>91</td>
            <td>
              <tr>
                Are approval decisions taken according to internal approval
                procedure?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Approval_Decision"
                    onChange={inputEvent}
                    value={formdata.C_Approval_Decision}
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
                name="Cm_Approval_Decision"
                onChange={inputEvent}
                value={formdata.Cm_Approval_Decision}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Approval_Decision"
                onChange={inputEvent}
                value={formdata.E_Approval_Decision}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>92 </td>
            <td>
              <tr>
                Are farm inspection checklists screened by the Internal approval
                staff with the special focus on the critical control points? Are
                results of internal inspection confirmed by approval committee?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Checklist"
                    onChange={inputEvent}
                    value={formdata.C_Checklist}
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
                name="Cm_Checklist"
                onChange={inputEvent}
                value={formdata.Cm_Checklist}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Checklist"
                onChange={inputEvent}
                value={formdata.E_Checklist}
                type="text"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong>Non-compliances and Sanctions </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>93</td>
            <td>
              <tr>
                {" "}
                Has ICS defined a procedure of sanctions in case of
                non-compliances?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Sanctions_Process"
                    onChange={inputEvent}
                    value={formdata.C_Sanctions_Process}
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
                name="Cm_Sanctions_Process"
                onChange={inputEvent}
                value={formdata.Cm_Sanctions_Process}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Sanctions_Process"
                onChange={inputEvent}
                value={formdata.E_Sanctions_Process}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>94</td>
            <td>
              <tr>
                Do you allow animals to graze in the organic farm? If yes, do
                you ensure that stocking densities of animals do not lead to
                land degradation and/ or pollution of ground and/ or surface
                water?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Sanctions_Format"
                    onChange={inputEvent}
                    value={formdata.C_Sanctions_Format}
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
                name="Cm_Sanctions_Format"
                onChange={inputEvent}
                value={formdata.Cm_Sanctions_Format}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Sanctions_Format"
                onChange={inputEvent}
                value={formdata.E_Sanctions_Format}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>95</td>
            <td>
              <tr>
                Are sanctions imposed according to severity of noncompliances?
                In case of severe non-compliances, is communication done with
                the certification body?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Sanctions_Imposed"
                    onChange={inputEvent}
                    value={formdata.C_Sanctions_Imposed}
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
                name="Cm_Sanctions_Imposed"
                onChange={inputEvent}
                value={formdata.Cm_Sanctions_Imposed}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Sanctions_Imposed"
                onChange={inputEvent}
                value={formdata.E_Sanctions_Imposed}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>


        <tbody><center><strong>Yield Estimates & Training of ICS Personnel 
 & 
Training of Farmers
</strong></center></tbody>

<tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>96</td>
            <td>
              <tr>
                {" "}
                Does the yield estimation of each crop of each farmer done
                individually?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Yield"
                    onChange={inputEvent}
                    value={formdata.C_Yield}
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
                name="Cm_Yield"
                onChange={inputEvent}
                value={formdata.Cm_Yield}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Yield"
                onChange={inputEvent}
                value={formdata.E_Yield}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <center>
              <strong>Training of ICS Personnel </strong>
            </center>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 97</td>
            <td>
              <tr>
                Have all ICS personnel received annual training from
                competant person? Are training details documented?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Training"
                    onChange={inputEvent}
                    value={formdata.C_Training}
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
                name="Cm_Training"
                onChange={inputEvent}
                value={formdata.Cm_Training}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Training"
                onChange={inputEvent}
                value={formdata.E_Training}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong>Training of Farmers</strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 98 </td>
            <td>
              <tr>
              Have all farmers received regular trainings from ICS? Are these trainings documented?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_RegularT"
                    onChange={inputEvent}
                    value={formdata.C_RegularT}
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
                name="Cm_RegularT"
                onChange={inputEvent}
                value={formdata.Cm_RegularT}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_RegularT"
                onChange={inputEvent}
                value={formdata.E_RegularT}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody><center><strong> Buying Procedures</strong></center></tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>99</td>
            <td>
              <tr>
                Is buying procedure developed by ICS? Are following points
                checked during bying? a) status of the farmer in the group; b)
                Selling amount, harvested amount and estimated amount are
                correlated; c) Purchase register is complete or accurate; d)
                Duly signed receipt by the purchase officer stating the product
                quantity; e) Organic or in-conversion status of the product; f)
                Label on the bags detailing about the status.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Buy"
                    onChange={inputEvent}
                    value={formdata.C_Buy}
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
                name="Cm_Buy"
                onChange={inputEvent}
                value={formdata.Cm_Buy}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Buy"
                onChange={inputEvent}
                value={formdata.E_Buy}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>100</td>
            <td>
              <tr>
                 Is storage and handling procedure developed by ICS? Are
                below requirements followed during storage & handling? -
                Identification of the product at all stages of product flow
                during transition. - Segregation of organic products from
                in-conversion products. - Fumigation of containers, irradiation
                / ionization, etc. are prohibited. - The location in the
                warehouse during storage must be labeled as ‘organic’ or ‘in
                conversion’.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Process_Handle"
                    onChange={inputEvent}
                    value={formdata.C_Process_Handle}
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
                name="Cm_Process_Handle"
                onChange={inputEvent}
                value={formdata.Cm_Process_Handle}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Process_Handle"
                onChange={inputEvent}
                value={formdata.E_Process_Handle}
                type="text"
              />
            </td>
          </tr>
        </tbody>

      </Table>
    </div>
  );
}
