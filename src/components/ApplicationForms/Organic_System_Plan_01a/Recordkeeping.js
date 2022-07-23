import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  KeepRecords: "",
  MethodsOfEffectiveness: "",
  Traceability: "",
  CommentTracebility: "",
  RecordkeepingSystem: "",

  SeedPurchaseInvoices: "",
  Documentation: "",
  FieldHistory: "",
  PreviousLandUse: "",
  FieldActivityRecord: "",
  CompostProductionRecord: "",
  EquipmentCleaningRecord: "",
  HarvestingRecord: "",
  BufferCropHarvestRecord: "",
  StorageRecord: "",
  TransportationCleaningRecord: "",
  Others:"",
};

const Recordkeeping = () => {
  const [user, setUser] = useState(userObj);

  const handleInputChange = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };

  
  const SendToApi = () => {
    if (
      user.KeepRecords=== ""||
      user.MethodsOfEffectiveness=== ""||
      user.Traceability===""||
      user.CommentTracebility===""||
      user.RecordkeepingSystem===""||
      user.SeedPurchaseInvoices=== ""||
      user.Documentation=== ""||
      user.FieldHistory===""||
      user.PreviousLandUse===""||
      user.FieldActivityRecord===""||
      user.CompostProductionRecord===""||
      user.EquipmentCleaningRecord===""||
      user.HarvestingRecord===""||
      user.BufferCropHarvestRecord===""||
      user.StorageRecord===""||
      user.TransportationCleaningRecord===""||
      user.Others===""
      
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addrecordkeepingauditics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            KeepRecords: user.KeepRecords,
            MethodsOfEffectiveness: user.MethodsOfEffectiveness,
            Traceability: user.Traceability,
            CommentTracebility: user.CommentTracebility,
            RecordkeepingSystem: user.RecordkeepingSystem,
            SeedPurchaseInvoices: user.SeedPurchaseInvoices,
            Documentation: user.Documentation,
            FieldHistory: user.FieldHistory,
            PreviousLandUse: user.PreviousLandUse,
            FieldActivityRecord: user.FieldActivityRecord,
            CompostProductionRecord: user.CompostProductionRecord,
            EquipmentCleaningRecord: user.EquipmentCleaningRecord,
            HarvestingRecord: user.HarvestingRecord,
            BufferCropHarvestRecord: user.BufferCropHarvestRecord,
            StorageRecord: user.StorageRecord,
            TransportationCleaningRecord: user.TransportationCleaningRecord,
            Others: user.Others,
            form_conn:"62d1545bb63a268f6cbe788f"
          }),
        }
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})
  
  
      }
    }

  return (
    <div className="text-md-left">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Recordkeeping: </h4>
          <br />
          <div>
            The records must disclose all activities and transactions of the
            operation and to be maintained for 5 years. It should be available
            at the time of inspection to make easy for the inspector to
            understand and detailed enough to the documented activities and
            transaction for any sold crop back to the field and seed from its
            grow.
          </div>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How long will you keep records pertaining to your operation?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="KeepRecords"
                onChange={handleInputChange}
                value={user.KeepRecords}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Please describe method(s) used to check the effectiveness of your
              recordkeeping to determine that they are in compliance with the
              NPOP requirements. (Monitoring, self-audit, review
              non-compliances, spreadsheets, etc.)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="MethodsOfEffectiveness"
                onChange={handleInputChange}
                value={user.MethodsOfEffectiveness}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe method used to check the traceability of farm produce
              from seed to sale. Explain your traceability system.
            </Form.Label>
            <Col sm={3}>
              <Form.Select 
                name="Traceability"
               onChange={handleInputChange}
               value={user.Traceability}
              >
                <option value="Use of Lot number">Use of Lot number</option>
                <option value="Use of Tracenet codes">Use of Tracenet codes</option>
                <option  value="Product name" >Product name</option>
                <option value="Harvest date" >Harvest date</option>
                <option value="Others">Others, specify</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentTracebility"
                onChange={handleInputChange}
                value={user.CommentTracebility}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the recordkeeping system you use for tracing your crop
              from sale to seed, as explained above.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="RecordkeepingSystem"
                onChange={handleInputChange}
                value={user.RecordkeepingSystem}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Audit Trail / Record Keeping System:</h4>
          <br />
          <div>Indicate the types of record you maintained at your farm:</div>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Seed purchase invoices{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="SeedPurchaseInvoices"
                onChange={handleInputChange}
                value={user.SeedPurchaseInvoices}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Documentation of attempts to source organic seeds and/or planting
              stock{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Documentation"
                onChange={handleInputChange}
                value={user.Documentation}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Field History{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FieldHistory"
                onChange={handleInputChange}
                value={user.FieldHistory}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Documentation of previous land use and/or newly purchased land{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="PreviousLandUse"
                onChange={handleInputChange}
                value={user.PreviousLandUse}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Field activity record{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FieldActivityRecord"
                onChange={handleInputChange}
                value={user.FieldActivityRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Compost production record
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="CompostProductionRecord"
                onChange={handleInputChange}
                value={user.CompostProductionRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Equipment cleaning record
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="EquipmentCleaningRecord"
                onChange={handleInputChange}
                value={user.EquipmentCleaningRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Harvesting record for organic crops
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="HarvestingRecord"
                onChange={handleInputChange}
                value={user.HarvestingRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Buffer crop harvest record
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="BufferCropHarvestRecord"
                onChange={handleInputChange}
                value={user.BufferCropHarvestRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Storage record{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="StorageRecord"
                onChange={handleInputChange}
                value={user.StorageRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Transportation cleaning record{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="TransportationCleaningRecord"
                onChange={handleInputChange}
                value={user.TransportationCleaningRecord}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Other:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Others"
                onChange={handleInputChange}
                value={user.Others}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>

        <Button onClick={SendToApi}>Submit</Button>
        
      </Form>
    </div>
  );
};

export default Recordkeeping;
