import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  General: "",
  OrganicSystemPlan: "",
  BufferZone: "",
  CropRotation: "",
  TypeOfProduction: "",
  SSPPStocks: "",
  SoilWaterManagement: "",
  NutrientManagement: "",
  PDWControl: "",
  Harvesting: "",
  PHActivities: "",
  ToolsEquipment: "",
  Storage: "",
  Transportation: "",
  Commingling: "",
  Recordkeeping: "",
  AuditTrail: "",
};
const TechnicalR = () => {
  const [user, setUser] = useState(userObj);

  const handleInputChange = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser({
      ...user,
      [ev.target.name]: ev.target.value,
    });
  };
  useEffect(() => {
    fetch(
      "https://foodchainid.herokuapp.com/foodchainid_form5/gettechnicalreview5",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form_conn: "62d1545bb63a268f6cbe788f",
        }),
      }
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);

  const SendToApi = () => {
    if (
      user.General === "" ||
      user.OrganicSystemPlan === "" ||
      user.BufferZone === "" ||
      user.CropRotation === "" ||
      user.TypeOfProduction === "" ||
      user.SSPPStocks === "" ||
      user.SoilWaterManagement === "" ||
      user.NutrientManagement === "" ||
      user.PDWControl === "" ||
      user.Harvesting === "" ||
      user.PHActivities === "" ||
      user.ToolsEquipment === "" ||
      user.Storage === "" ||
      user.Transportation === "" ||
      user.Commingling === "" ||
      user.Recordkeeping === "" ||
      user.AuditTrail === ""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form5/addtechnicalreview5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            General: user.General,
            OrganicSystemPlan: user.OrganicSystemPlan,
            BufferZone: user.BufferZone,
            CropRotation: user.CropRotation,
            TypeOfProduction: user.TypeOfProduction,
            SSPPStocks: user.SSPPStocks,
            SoilWaterManagement: user.SoilWaterManagement,
            NutrientManagement: user.NutrientManagement,
            PDWControl: user.PDWControl,
            Harvesting: user.Harvesting,
            PHActivities: user.PHActivities,
            ToolsEquipment: user.ToolsEquipment,
            Storage: user.Storage,
            Transportation: user.Transportation,
            Commingling: user.Commingling,
            Recordkeeping: user.Recordkeeping,
            AuditTrail: user.AuditTrail,
            form_conn: "62d1545bb63a268f6cbe788f",
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
    <div className="rules text-md-right">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Technical Review</h4>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              General (Certification Application form, Agreement, Tracenet
              Registration etc):
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="General"
                onChange={handleInputChange}
                value={user.General}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Organic System Plan Compliance:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="OrganicSystemPlan"
                onChange={handleInputChange}
                value={user.OrganicSystemPlan}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Map, Adjoining land use and Buffer zone:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="BufferZone"
                onChange={handleInputChange}
                value={user.BufferZone}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Crop rotation practices:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="CropRotation"
                onChange={handleInputChange}
                value={user.CropRotation}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Type of Production (Dedicated/Split/Parallel):
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="TypeOfProduction"
                onChange={handleInputChange}
                value={user.TypeOfProduction}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Seeds, Seedlings, Perennial & Planting stocks:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="SSPPStocks"
                onChange={handleInputChange}
                value={user.SSPPStocks}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Soil & Water Management:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="SoilWaterManagement"
                onChange={handleInputChange}
                value={user.SoilWaterManagement}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Nutrient Management:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NutrientManagement"
                onChange={handleInputChange}
                value={user.NutrientManagement}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Pest, Disease & Weed Control:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="PDWControl"
                onChange={handleInputChange}
                value={user.PDWControl}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Harvesting:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Harvesting"
                onChange={handleInputChange}
                value={user.Harvesting}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Post-Harvest Activities:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="PHActivities"
                onChange={handleInputChange}
                value={user.PHActivities}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Tools, Equipment & Machineries:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ToolsEquipment"
                onChange={handleInputChange}
                value={user.ToolsEquipment}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Storage:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Storage"
                onChange={handleInputChange}
                value={user.Storage}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Transportation:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Transportation"
                onChange={handleInputChange}
                value={user.Transportation}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Commingling and Contamination Control:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Commingling"
                onChange={handleInputChange}
                value={user.Commingling}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Recordkeeping:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Recordkeeping"
                onChange={handleInputChange}
                value={user.Recordkeeping}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Audit trail/Traceability/Lot numbering System:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="AuditTrail"
                onChange={handleInputChange}
                value={user.AuditTrail}
                placeholder=""
              />
            </Col>
          </Form.Group>
          <br></br>

          <Button onClick={SendToApi}>Submit</Button>
          <br></br>
        </Container>
      </Form>
    </div>
  );
};

export default TechnicalR;
