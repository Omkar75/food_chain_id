import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
//import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {v4} from 'uuid';

//import 'firebase/storage'
import { getStorage, uploadBytes } from "firebase/storage";


import { storage } from './firebase';

import {  ref } from "firebase/storage";


export default function General_Information() {
  const [formdata, setformdata] = useState({
    C_Application:"",
    Cm_Application :"",
    E_Application :"",
    
    C_Legal_Req:"",
    Cm_Legal_Req:"",
    E_Legal_Req:"",
    
    C_Information_Provided :"",
    Cm_Information_Provided :"",
    E_Information_Provided :"",
    
    
    C_Operator_Standard :"",
    Cm_Operator_Standard :"",
    E_Operator_Standard :"",
    
    C_Identifiy:"",
    Cm_Identifiy:"",
    E_Identifiy:"",

    C_Organic_Plan: "",
    Cm_Organic_Plan: "",
    E_Organic_Plan: "",

    C_Organic_System: "",
    Cm_Organic_System: "",
    E_Organic_System: "",

    C_Feild_History: "",
    Cm_Feild_History: "",
    E_Feild_History: "",

    C_Farm_Maps: "",
    Cm_Farm_Maps: "",
    E_Farm_Maps: "",
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
    
  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);

  };


  const [imageUpload, setImageUpload] = useState(null);
   
   const uploadImage = () => {
    if(imageUpload == null) return;
     const imageRef = ref(storage,`images/${imageUpload.name +(v4)}`);
     uploadBytes(imageRef, imageUpload).then( () => {
       alert("uploaded ");
   
   });
  };
  
   

  
  
  useEffect(() => {}, [formdata]);
  return (
    <div className="container card card-body ">
      {JSON.stringify(formdata)}
      <h6> Document Check Records </h6>
      <hr />
      <Table responsive striped bordered hover size="sm">
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
            <td>1</td>
            <td>
              <tr>
                Confirm that the Certification Application form is available and
                signed.
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
              
              />
            </td>
            <td>
            <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0]); }}  ></input>
            <td><button onClick={uploadImage}>Upload</button></td>
            
            {/* <input type="button" onClick={uploadImage} ></input> */}
           
            </td> 
          </tr>
          
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>2</td>
            <td>
              <tr>
                Confirm that the applicant have identified legal requirements
                applicable to production unit and is compliant with it.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Legal_Req"
                    onChange={inputEvent}
                    value={formdata.C_Legal_Req}
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
                name="Cm_Legal_Req"
                onChange={inputEvent}
                value={formdata.Cm_Legal_Req}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Legal_Req"
                onChange={inputEvent}
                value={formdata.E_Legal_Req}
                type="file"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>3</td>
            <td>
              <tr>
                Confirm that the information provided in the Certification
                Application form (Name, address, area etc.) are correct.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Information_Provided"
                    onChange={inputEvent}
                    value={formdata.C_Information_Provided}
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
                name="Cm_Information_Provided"
                onChange={inputEvent}
                value={formdata.Cm_Information_Provided}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Information_Provided"
                onChange={inputEvent}
                value={formdata.E_Information_Provided}
                type="file"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>4</td>
            <td>
              <tr>
                Does the operator have NPOP standard copy and is it understood
                by operator?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Operator_Standard"
                    onChange={inputEvent}
                    value={formdata.C_Operator_Standard}
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
                name="Cm_Operator_Standard"
                onChange={inputEvent}
                value={formdata.Cm_Operator_Standard}
                type="text"
              
              />
            </td>
            <td>
              <input
                name="E_Operator_Standard"
                onChange={inputEvent}
                value={formdata.E_Operator_Standard}
                type="file"
              
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>5</td>
            <td>
              <tr> Has operator identified authorized knowledgebale representative to remain present during inspection?
</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Identifiy"
                    onChange={inputEvent}
                    value={formdata.C_Identifiy}
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
                name="Cm_Identifiy"
                onChange={inputEvent}
                value={formdata.Cm_Identifiy}
                type="text"
                C_Identifiy
              />
            </td>
            <td>
              <input
                name="E_Identifiy"
                onChange={inputEvent}
                value={formdata.E_Identifiy}
                type="file"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <center>
              <strong>Crop Plan Information </strong>
            </center>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>6</td>
            <td>
              <tr>
              Is Organic system plan available & updated? 

              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Organic_Plan"
                    onChange={inputEvent}
                    value={formdata.C_Organic_Plan}
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
                name="Cm_Organic_Plan"
                onChange={inputEvent}
                value={formdata.Cm_Organic_Plan}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Organic_Plan"
                onChange={inputEvent}
                value={formdata.E_Organic_Plan}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>7</td>
            <td>
              <tr>
                Does the information in Organic system plan reflect real crop
                production methods applied?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Operator_Standard"
                    onChange={inputEvent}
                    value={formdata.C_Operator_Standard}
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
                name="Cm_Operator_Standard"
                onChange={inputEvent}
                value={formdata.Cm_Operator_Standard}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Operator_Standard"
                onChange={inputEvent}
                value={formdata.E_Operator_Standard}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>8</td>
            <td>
              <tr>
                Has operator filled the information in Field history and Field
                specification-Yield estimate? Is the information correct?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Feild_History"
                    onChange={inputEvent}
                    value={formdata.C_Feild_History}
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
                name="Cm_Feild_History"
                onChange={inputEvent}
                value={formdata.Cm_Feild_History}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Feild_History"
                onChange={inputEvent}
                value={formdata.E_Feild_History}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>9</td>
            <td>
              <tr>
                Do the farm maps present an accurate picture of field
                boundaries, adjoining land use, size, location and field number?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Farm_Maps"
                    onChange={inputEvent}
                    value={formdata.C_Farm_Maps}
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
                name="Cm_Farm_Maps"
                onChange={inputEvent}
                value={formdata.Cm_Farm_Maps}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Farm_Maps"
                onChange={inputEvent}
                value={formdata.E_Farm_Maps}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>


        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>10</td>
            <td>
              <tr>
                Has the operator developed a conversion plan to meet NPOP
                requirements?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Conversion_Plan"
                    onChange={inputEvent}
                    value={formdata.C_Conversion_Plan}
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
                name="Cm_Conversion_Plan"
                onChange={inputEvent}
                value={formdata.Cm_Conversion_Plan}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Conversion_Plan"
                onChange={inputEvent}
                value={formdata.E_Conversion_Plan}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>11</td>
            <td>
              <tr>
                Are requirements mentioned in the conversion plan implemented on
                the field?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Implementation "
                    onChange={inputEvent}
                    value={formdata.C_Implementation}
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
                name="Cm_Implementation"
                onChange={inputEvent}
                value={formdata.Cm_Implementation}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Implementation "
                onChange={inputEvent}
                value={formdata.E_Implementation}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>12</td>
            <td>
              <tr>
                What is the starting date of conversion period and how it was
                decided?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Conversion_Period"
                    onChange={inputEvent}
                    value={formdata.C_Conversion_Period}
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
                name="Cm_Conversion_Period"
                onChange={inputEvent}
                value={formdata.Cm_Conversion_Period}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Conversion_Period"
                onChange={inputEvent}
                value={formdata.E_Conversion_Period}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong> Duration of Conversion period </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>13</td>
            <td>
              <tr>
                Is production unit undergone a conversion period (2 years before
                sowming for annual & biennial crops and 3 years before harvest
                for perennial crops) as per type of production system?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Production_Unit"
                    onChange={inputEvent}
                    value={formdata.C_Production_Unit}
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
                name="Cm_Production_Unit"
                onChange={inputEvent}
                value={formdata.Cm_Production_Unit}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Production_Unit"
                onChange={inputEvent}
                value={formdata.E_Production_Unit}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>14</td>
            <td>
              <tr>
                Has the operator provided the required documents to prove that
                the standards have been meet for more than 3 years for reduction
                in conversion period?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Reduction"
                    onChange={inputEvent}
                    value={formdata.C_Reduction}
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
                name="Cm_Reduction"
                onChange={inputEvent}
                value={formdata.Cm_Reduction}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Reduction"
                onChange={inputEvent}
                value={formdata.E_Reduction}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>15</td>
            <td>
              <tr>
                How the products harvested during conversion period are sold? Is
                correct description used to label the products about its organic
                status?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Organic_Status_Label"
                    onChange={inputEvent}
                    value={formdata.C_Organic_Status_Label}
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
                name="Cm_Organic_Status_Label"
                onChange={inputEvent}
                value={formdata.Cm_Organic_Status_Label}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Organic_Status_Label"
                onChange={inputEvent}
                value={formdata.E_Organic_Status_Label}
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
