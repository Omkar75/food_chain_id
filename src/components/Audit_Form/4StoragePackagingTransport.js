import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function StoragePackagingTransport() {
  const [formdata, setformdata] = useState({
    C_Storage_Permission: "",
    Cm_Storage_Permission: "",
    E_Storage_Permission: "",

    C_Storage_Condition: "",
    Cm_Storage_Condition: "",
    E_Storage_Condition: "",

    C_Storage_Size: "",
    Cm_Storage_Size: "",
    E_Storage_Size: "",

    C_Storage_Material: "",
    Cm_Storage_Material: "",
    E_Storage_Material: "",

    C_Pacakage_Material: "",
    Cm_Pacakage_Material: "",
    E_Pacakage_Material: "",

    C_Pacakage_Security: "",
    Cm_Pacakage_Security: "",
    E_Pacakage_Security: "",

    C_Transportation_Measure: "",
    Cm_Transportation_Measure: "",
    E_Transportation_Measure: "",

    C_Cleaning_Material: "",
    Cm_Cleaning_Material: "",
    E_Cleaning_Material: "",

    C_Final_Labelling:"",
    Cm_Final_Labelling:"",
    E_Final_Labelling:"",
    
    C_Labelling_Activity:"",
    Cm_Labelling_Activity:"",
    E_Labelling_Activity:"",

    C_Logo_Available:"",
Cm_Logo_Available:"",
E_Logo_Available :"",

C_Nutrient: "",
Cm_Nutrient: "",
E_Nutrient: "",

C_Invoice_Copy: "",
Cm_Invoice_Copy: "",
E_Invoice_Copy: "",

C_Harvested: "",
Cm_Harvested: "",
E_Harvested: "",

C_Traceability: "",
Cm_Traceability: "",
E_Traceability: "",

C_Representative: "",
Cm_Representative: "",
E_Representative: "",

C_Records_Maintaince: "",
Cm_Records_Maintaince: "",
E_Records_Maintaince: "",

C_Complaint: "",
Cm_Complaint: "",
E_Complaint: "",

C_GMO_Risk: "",
Cm_GMO_Risk: "",
E_GMO_Risk: "",
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
            <td>45</td>
            <td>
              <tr>
                45 Is there provision to store organic products separately? If
                no, then do you ensure that organic products are protected at
                all times from non-organic products and other non-permitted
                materials?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Storage_Permission"
                    onChange={inputEvent}
                    value={formdata.C_Storage_Permission}
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
                name="Cm_Storage_Permission"
                onChange={inputEvent}
                value={formdata.Cm_Storage_Permission}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Storage_Permission"
                onChange={inputEvent}
                value={formdata.E_Storage_Permission}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>46</td>
            <td>
              <tr>
                What is the type of storage condition used? 47 How organic
                products are identified in the storage unit?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Storage_Condition"
                    onChange={inputEvent}
                    value={formdata.C_Storage_Condition}
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
                name="Cm_Storage_Condition"
                onChange={inputEvent}
                value={formdata.Cm_Storage_Condition}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Storage_Condition"
                onChange={inputEvent}
                value={formdata.E_Storage_Condition}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>48</td>
            <td>
              <tr>
                Do you have bulk store to store organic products? If yes, is it
                separate from conventional product store?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Storage_Size"
                    onChange={inputEvent}
                    value={formdata.C_Storage_Size}
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
                name="Cm_Storage_Size"
                onChange={inputEvent}
                value={formdata.Cm_Storage_Size}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Storage_Size"
                onChange={inputEvent}
                value={formdata.E_Storage_Size}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>49</td>
            <td>
              <tr>
                {" "}
                Which materials are used for cleaning of storage areas? Are
                materials used comply with Annex 2 of Appendix 1 of NPOP?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Storage_Material"
                    onChange={inputEvent}
                    value={formdata.C_Storage_Material}
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
                name="Cm_Storage_Material"
                onChange={inputEvent}
                value={formdata.Cm_Storage_Material}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Storage_Material"
                onChange={inputEvent}
                value={formdata.E_Storage_Material}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>505</td>
            <td>
              <tr>
                What type of packaging material used for organic products? Do
                you ensure that it do not contaminate food and is of
                biodegradable, recyclable, reusable and eco-friendly material?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Pacakage_Material"
                    onChange={inputEvent}
                    value={formdata.C_Pacakage_Material}
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
                name="Cm_Pacakage_Material"
                onChange={inputEvent}
                value={formdata.Cm_Pacakage_Material}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Pacakage_Material"
                onChange={inputEvent}
                value={formdata.E_Pacakage_Material}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 51</td>
            <td>
              <tr>
                Are the packages closed securely to avoid substitution of
                contents?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Pacakage_Security"
                    onChange={inputEvent}
                    value={formdata.C_Pacakage_Security}
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
                name="Cm_Pacakage_Security"
                onChange={inputEvent}
                value={formdata.Cm_Pacakage_Security}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Pacakage_Security"
                onChange={inputEvent}
                value={formdata.E_Pacakage_Security}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>52</td>
            <td>
              <tr>
                Are measures taken to avoid commingling or contamination of
                organic product during transportation?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Transportation_Measure"
                    onChange={inputEvent}
                    value={formdata.C_Transportation_Measure}
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
                name="Cm_Transportation_Measure"
                onChange={inputEvent}
                value={formdata.Transportation_Measure}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Transportation_Measure"
                onChange={inputEvent}
                value={formdata.E_Transportation_Measure}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>53</td>
            <td>
              <tr>
                Which materials are used for cleaning of transport
                containers/vehicles? Are materials used comply with Annex 2 of
                Appendix 1 of NPOP?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Cleaning_Material"
                    onChange={inputEvent}
                    value={formdata.C_Cleaning_Material}
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
                name="Cm_Cleaning_Material"
                onChange={inputEvent}
                value={formdata.Cm_Cleaning_Material}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Cleaning_Material"
                onChange={inputEvent}
                value={formdata.E_Cleaning_Material}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody><center><strong>Labelling</strong></center></tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>54 </td>
            <td>
              <tr>Is final labelling carried out on the farm?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Final_Labelling"
                    onChange={inputEvent}
                    value={formdata.C_Final_Labelling}
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
                name="Cm_Final_Labelling"
                onChange={inputEvent}
                value={formdata.Cm_Final_Labelling}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Final_Labelling"
                onChange={inputEvent}
                value={formdata.E_Final_Labelling}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>55</td>
            <td>
              <tr>
                 If yes, do labelling activity comply with below NPOP
                requirements? - The name and address of the person or company
                legally responsible for the production or processing of the
                product shall be mentioned on the label. - The label for
                conversion products shall be clearly distinguishable from the
                label for organic products by mentioning the year of conversion.
                - Organic products shall not be labelled as GE (genetic
                engineering) or GM (genetic modification) free in order to avoid
                potentially misleading claims about the end product. Any
                reference to genetic engineering on product labels shall be
                limited to the production method. - The label of a certified
                organic product must depict the name and logo of the accredited
                Certification Body, accreditation number and India Organic Logo.
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Labelling_Activity"
                    onChange={inputEvent}
                    value={formdata.C_Labelling_Activity}
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
                name="Cm_Labelling_Activity"
                onChange={inputEvent}
                value={formdata.Cm_Labelling_Activity}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Labelling_Activity"
                onChange={inputEvent}
                value={formdata.E_Labelling_Activity}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>56</td>
            <td>
              <tr>
              If India organic logo used, are form 1, 2 and 3 available?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Logo_Available"
                    onChange={inputEvent}
                    value={formdata.C_Logo_Available}
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
                name="Cm_Logo_Available"
                onChange={inputEvent}
                value={formdata.Cm_Logo_Available}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Logo_Available"
                onChange={inputEvent}
                value={formdata.E_Logo_Available}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>


        <tbody><center><strong>Recordkeeping</strong></center></tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>57 </td>
            <td>
              <tr>
                Has operator maintained a complete documentation of
                production(incl. seed use, nutrient management, pestdisease-weed
                control), sales, stock for organic crops? And non-organic crops
                in case of parallel production?{" "}
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Nutrient"
                    onChange={inputEvent}
                    value={formdata.C_Nutrient}
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
                name="Cm_Nutrient"
                onChange={inputEvent}
                value={formdata.Cm_Nutrient}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Nutrient"
                onChange={inputEvent}
                value={formdata.E_Nutrient}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>58</td>
            <td>
              <tr>
                Are copies of invoice, transport documents and transaction
                certificates available for all products sold as organic?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Invoice_Copy"
                    onChange={inputEvent}
                    value={formdata.C_Invoice_Copy}
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
                name="Cm_Invoice_Copy"
                onChange={inputEvent}
                value={formdata.Cm_Invoice_Copy}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Invoice_Copy"
                onChange={inputEvent}
                value={formdata.E_Invoice_Copy}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>59</td>
            <td>
              <tr>
                Are harvested quantities, sold quantities and quantities in
                stock correlate with each other for all products?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Harvested"
                    onChange={inputEvent}
                    value={formdata.C_Harvested}
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
                name="Cm_Harvested"
                onChange={inputEvent}
                value={formdata.Cm_Harvested}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Harvested"
                onChange={inputEvent}
                value={formdata.E_Harvested}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>60</td>
            <td>
              <tr>
                Do you use lot numbering system to ensure traceability? Do all
                sales documents have lot numbers mentioned on it?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Traceability"
                    onChange={inputEvent}
                    value={formdata.C_Traceability}
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
                name="Cm_Traceability"
                onChange={inputEvent}
                value={formdata.Cm_Traceability}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Traceability"
                onChange={inputEvent}
                value={formdata.E_Traceability}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>61</td>
            <td>
              <tr>
                Has the operator retained representative and sealed sample for
                each lot of products, for which an Transaction Certificate is
                issued?ities in stock correlate with each other for all
                products?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Representative"
                    onChange={inputEvent}
                    value={formdata.C_Representative}
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
                name="Cm_Representative"
                onChange={inputEvent}
                value={formdata.Cm_Representative}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Representative"
                onChange={inputEvent}
                value={formdata.E_Representative}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td> 62</td>
            <td>
              <tr>Are all records maintained for five years?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Records_Maintaince"
                    onChange={inputEvent}
                    value={formdata.C_Records_Maintaince}
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
                name="Cm_Records_Maintaince"
                onChange={inputEvent}
                value={formdata.Cm_Records_Maintaince}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Records_Maintaince"
                onChange={inputEvent}
                value={formdata.E_Records_Maintaince}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>63</td>
            <td>
              <tr>
                Do you have complaint procedure in place? Do you have record of
                all complaints received and corrective actions taken?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Complaint"
                    onChange={inputEvent}
                    value={formdata.C_Complaint}
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
                name="Cm_Complaint"
                onChange={inputEvent}
                value={formdata.Cm_Complaint}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Complaint"
                onChange={inputEvent}
                value={formdata.E_Complaint}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>64</td>
            <td>
              <tr>
                Is there a GMO risk involved with respect crop production system
                of the farmer? If yes, is GMO free declaration submitted?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_GMO_Risk"
                    onChange={inputEvent}
                    value={formdata.C_GMO_Risk}
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
                name="Cm_GMO_Risk"
                onChange={inputEvent}
                value={formdata.Cm_GMO_Risk}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_GMO_Risk"
                onChange={inputEvent}
                value={formdata.E_GMO_Risk}
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
