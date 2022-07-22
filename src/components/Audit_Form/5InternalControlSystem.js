import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function InternalControlSytsem() {
  const [formdata, setformdata] = useState({
    C_Total_Farmer: "",
    Cm_Total_Farmer: "",
    E_Total_Farmer: "",

    C_Similar_Crop: "",
    Cm_Similar_Crop: "",
    E_Similar_Crop: "",

    C_Internal_Inspection: "",
    Cm_Internal_Inspection: "",
    E_Internal_Inspection: "",
    C_Conversion_Plan: "",
    Cm_Conversion_Plan: "",
    E_Conversion_Plan: "",

    C_Implementation: "",
    Cm_Implementation: "",
    E_Implementation: "",

    C_Conversion_Period: "",
    Cm_Conversion_Period: "",
    E_Conversion_Period: "",

    C_Production_Unit: "",
    Cm_Production_Unit: "",
    E_Production_Unit: "",

    C_Reduction: "",
    Cm_Reduction: "",
    E_Reduction: "",

    C_Organic_Status_Label: "",
    Cm_Organic_Status_Label: "",
    E_Organic_Status_Label: "",
    C_Legal_Status :"",
    Cm_Legal_Status:"",
    E_Legal_Status:"",
    
    C_Responsibility:"",
    Cm_Responsibility:"",
    E_Responsibility:"",
    
    
    
    C_ICS_Contarct:"",
    Cm_ICS_Contarct:"",
    E_ICS_Contarct:"",
    C_Internal_Standard: "",
    Cm_Internal_Standard: "",
    E_Internal_Standard: "",

    C_Organic_Standard: "",
    Cm_Organic_Standard: "",
    E_Organic_Standard: "",

    C_ICS_Conflicts: "",
    Cm_ICS_Conflicts: "",
    E_ICS_Conflicts: "",

    C_Trading: "",
    Cm_Trading: "",
    E_Trading: "",
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
            <td>65 </td>
            <td>
              <tr>
                What is the total number of farmers in the group? How many
                farmers are having more than 4 Ha area? Does it comply with NPOP
                requirements for grower group?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Total_Farmer"
                    onChange={inputEvent}
                    value={formdata.C_Total_Farmer}
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
                name="Cm_Total_Farmer"
                onChange={inputEvent}
                value={formdata.Cm_Total_Farmer}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Total_Farmer"
                onChange={inputEvent}
                value={formdata.E_Total_Farmer}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>66</td>
            <td>
              <tr>
                Do the farmers follow similar crop production system and located
                in geographical proximity?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Similar_Crop"
                    onChange={inputEvent}
                    value={formdata.C_Similar_Crop}
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
                name="Cm_Similar_Crop"
                onChange={inputEvent}
                value={formdata.Cm_Similar_Crop}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Similar_Crop"
                onChange={inputEvent}
                value={formdata.E_Similar_Crop}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 67</td>
            <td>
              <tr>
                Is internal inspection carried out for all farmers in the grower
                group?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Internal_Inspection"
                    onChange={inputEvent}
                    value={formdata.C_Internal_Inspection}
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
                name="Cm_Internal_Inspection"
                onChange={inputEvent}
                value={formdata.Cm_Internal_Inspection}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Internal_Inspection"
                onChange={inputEvent}
                value={formdata.E_Internal_Inspection}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
<tbody><center><strong>Constitution of the ICS </strong></center></tbody>

<tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>68</td>
            <td>
              <tr>
                Does the group have legal status/constitution supported by
                organizational chart?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Legal_Status"
                    onChange={inputEvent}
                    value={formdata.C_Legal_Status}
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
                name="Cm_Legal_Status"
                onChange={inputEvent}
                value={formdata.Cm_Legal_Status}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Legal_Status"
                onChange={inputEvent}
                value={formdata.E_Legal_Status}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>69</td>
            <td>
              <tr>
                Are the responsibilities delegated to individual members /
                committees for carrying out specific activities?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Responsibility"
                    onChange={inputEvent}
                    value={formdata.C_Responsibility}
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
                name="Cm_Responsibility"
                onChange={inputEvent}
                value={formdata.Cm_Responsibility}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Responsibility"
                onChange={inputEvent}
                value={formdata.E_Responsibility}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 70</td>
            <td>
              <tr>
                 If ICS is run by mandator/service provider/trader, has ICS
                made a contract and is it according to Annex 2 of NPOP Chapter
                5?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_ICS_Contarct"
                    onChange={inputEvent}
                    value={formdata.C_ICS_Contarct}
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
                name="Cm_ICS_Contarct"
                onChange={inputEvent}
                value={formdata.Cm_ICS_Contarct}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_ICS_Contarct"
                onChange={inputEvent}
                value={formdata.E_ICS_Contarct}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>


        <tbody><center><strong>Internal Control System (ICS) 
</strong></center></tbody>

<tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>71</td>
            <td>
              <tr>
              Do all documentation relevant to the operation of the ICS exist and are they adequately controlled including:
 • The ICS Manual containing policies and procedures including Farmer Registration, Internal inspection & Approval procedure, Non-compliance & sanction procedure, Buying Procedure, Storage Handling & Processing Procedure
 • Internal Standards
 • Risk Assessment
 • Work instructions.
 • Training log 
• Management Review
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Documentation_Control"
                    onChange={inputEvent}
                    value={formdata.C_Documentation_Control}
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
                name="Cm_Documentation_Control"
                onChange={inputEvent}
                value={formdata.Cm_Documentation_Control}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Documentation_Control"
                onChange={inputEvent}
                value={formdata.E_Documentation_Control}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>72</td>
            <td>
              <tr>
                Do all farmers maintain farm diary for noting activities on their farms? Is farm diary according to Annex 3 of NPOP Chapter 5?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Farm_Diary"
                    onChange={inputEvent}
                    value={formdata.C_Farm_Diary}
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
                name="Cm_Farm_Diary"
                onChange={inputEvent}
                value={formdata.Cm_Farm_Diary}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Farm_Diary"
                onChange={inputEvent}
                value={formdata.E_Farm_Diary}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong>How to develop an ICS  </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 73</td>
            <td>
              <tr>
              Has ICS developed the procedures for following?
 - Identification of farmers in the group 
- Creation of awareness about Grower Group Certification
 - Identification of qualified / experienced personnel for maintaining the Internal Control System
 - Give necessary training in production and ICS development
 - Implementation of the policies and procedures 
- Review and improvement of the ICS document for maintaining a harmonized quality management system.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Procedures"
                    onChange={inputEvent}
                    value={formdata.C_Procedures}
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
                name="Cm_Procedures"
                onChange={inputEvent}
                value={formdata.Cm_Procedures}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Procedures"
                onChange={inputEvent}
                value={formdata.E_Procedures}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>74</td>
            <td>
              <tr>
               Is ICS staff qualified, trained and aware about their responsibilities?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Staff"
                    onChange={inputEvent}
                    value={formdata.C_Staff}
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
                name="Cm_Staff"
                onChange={inputEvent}
                value={formdata.Cm_Staff}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Staff"
                onChange={inputEvent}
                value={formdata.E_Staff}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>75</td>
            <td>
              <tr>
               Are adequate number of internal inspectors appointed according to total size of the grower group?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Inspector_No"
                    onChange={inputEvent}
                    value={formdata.C_Inspector_No}
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
                name="Cm_Inspector_No"
                onChange={inputEvent}
                value={formdata.Cm_Inspector_No}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Inspector_No"
                onChange={inputEvent}
                value={formdata.E_Inspector_No}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>76</td>
            <td>
              <tr>Are the internal standards prepared in local language?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Internal_Standard"
                    onChange={inputEvent}
                    value={formdata.C_Internal_Standard}
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
                name="Cm_Internal_Standard"
                onChange={inputEvent}
                value={formdata.Cm_Internal_Standard}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Internal_Standard"
                onChange={inputEvent}
                value={formdata.E_Internal_Standard}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>77</td>
            <td>
              <tr>
                Does internal organic standard: a. define the production unit b.
                how to deal part conversion c. define conversion period d.
                maintenance of buffer zone e. define farm production norms f.
                define harvest and post harvest procedures Is the format based
                on Annex 6 of NPOP Chapter 5?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Organic_Standard"
                    onChange={inputEvent}
                    value={formdata.C_Organic_Standard}
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
                name="Cm_Organic_Standard"
                onChange={inputEvent}
                value={formdata.Cm_Organic_Standard}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Organic_Standard"
                onChange={inputEvent}
                value={formdata.E_Organic_Standard}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong>Conflict of Interest</strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 78</td>
            <td>
              <tr>
                Do all the internal control system (ICS) personnel have signed
                the conflict of interest statement? Is there any conflict of
                interest among the personals?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_ICS_Conflicts"
                    onChange={inputEvent}
                    value={formdata.C_ICS_Conflicts}
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
                name="Cm_ICS_Conflicts"
                onChange={inputEvent}
                value={formdata.Cm_ICS_Conflicts}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_ICS_Conflicts"
                onChange={inputEvent}
                value={formdata.E_ICS_Conflicts}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <center>
              <strong>Trade </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 79</td>
            <td>
              <tr>
                Does the ICS have procedures for trading? Is the trading done as
                a single entity?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Trading"
                    onChange={inputEvent}
                    value={formdata.C_Trading}
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
                name="Cm_Trading"
                onChange={inputEvent}
                value={formdata.Cm_Trading}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Trading"
                onChange={inputEvent}
                value={formdata.E_Trading}
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
