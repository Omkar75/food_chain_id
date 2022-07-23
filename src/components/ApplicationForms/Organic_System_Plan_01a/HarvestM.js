import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  ContaminationPreventitions:"",
  Storage:"",
  PestControlMeasures:"",
  CleaningProcedure:"",
  SameStorageArea:"",
  Transportation:"",
  EstimatedYieldOfCrops:"",
  HEstimate:"",
  ProduceHandling: "",
  PostHarvestWashing: "",
  Potable: "",
  ProcessingActivities: "",
  FinalProductsNProcessingLoss: "",
  PackingMaterial: "",
  Procedure: "",
  AvoidContamination: "",
  Labelling: "",
  Monitoring:"",
};

const HarvestM = () => {
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
      user.ContaminationPreventitions === "" ||
      user.Storage === "" ||
      user.PestControlMeasures === "" ||
      user.CleaningProcedure === "" ||
      user.SameStorageArea === "" ||
      user.Transportation === "" ||
      user.EstimatedYieldOfCrops === "" ||
      user.HEstimate === "" ||
      user.ProduceHandling === "" ||
      user.PostHarvestWashing === "" ||
      user.Potable === "" ||
      user.ProcessingActivities === "" ||
      user.FinalProductsNProcessingLoss === "" ||
      user.PackingMaterial === "" ||
      user.Procedure === "" ||
      user.AvoidContamination === "" ||
      user.Labelling === "" ||
      user.Monitoring === "" 
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addpostharvestmh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ContaminationPreventitions: user.ContaminationPreventitions ,
            Storage: user.Storage,
            PestControlMeasures: user.PestControlMeasures,
            CleaningProcedure: user.CleaningProcedure,
            SameStorageArea: user.SameStorageArea,
            Transportation:user.Transportation,
            EstimatedYieldOfCrops: user.EstimatedYieldOfCrops,
            HEstimate: user.HEstimate,
            ProduceHandling: user.ProduceHandling,
            PostHarvestWashing:user.PostHarvestWashing,
            Potable: user.Potable,
            ProcessingActivities: user.ProcessingActivities,
            FinalProductsNProcessingLoss: user.FinalProductsNProcessingLoss,
            PackingMaterial:user.PackingMaterial,
            Procedure:user.Procedure,
            AvoidContamination:user.AvoidContamination,
            Labelling:user.Labelling,
            Monitoring:user.Monitoring,
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
      <Container style={{border: "1px solid black"}} >
          <h4>Harvest and Post-Harvest Management: </h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Please describe the steps taken to prevent contamination during
              harvest of organic crops
            </Form.Label>
            <Col sm={5}>
              <Form.Control
               type="text"
               name="ContaminationPreventitions"
               onChange={handleInputChange}
               value={user.ContaminationPreventitions}
              placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe your storage process
            </Form.Label>
            <Col sm={5}>
              <Form.Control 
               type="text"
               name="Storage"
               onChange={handleInputChange}
               value={user.Storage}
              placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the pest control measures being followed at your storage
              facility, including the methods and products used:
            </Form.Label>
            <Col sm={5}>
              <Form.Control 
               type="text"
               name="PestControlMeasures"
               onChange={handleInputChange}
               value={user.PestControlMeasures}
               placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the cleaning procedure being followed in the storage
              area, including methods, products used and frequency of cleaning:
            </Form.Label>
            <Col sm={5}>
              <Form.Control 
               type="text"
               name="CleaningProcedure"
               onChange={handleInputChange}
               value={user.CleaningProcedure}
              placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you use the same storage areas for organic, transitional,
              buffer, and/or conventional crops?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select 
               name="SameStorageArea"
               onChange={handleInputChange}
               value={user.SameStorageArea}>
                <option>--select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Sold_Without_Storage">
                  Sold Without Storage
                </option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the Transportation system in place.
            </Form.Label>
            <Col sm={5}>
              <Form.Control 
               type="text"
               name="Transportation"
               onChange={handleInputChange}
               value={user.Transportation}
              placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Have you estimated the yield of crops on your farm?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
               name="EstimatedYieldOfCrops"
               onChange={handleInputChange}
               value={user.EstimatedYieldOfCrops}
              >
                <option>--select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How it is estimated?
            </Form.Label>
            <Col sm={5}>
              <Form.Control 
               type="text"
               name="HEstimate"
               onChange={handleInputChange}
               value={user.HEstimate}
              placeholder="" />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Post-Harvest Handling:</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the produce handling system being followed at your farm
              after the harvesting of crop
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ProduceHandling"
                onChange={handleInputChange}
                value={user.ProduceHandling}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is post-harvest washing been followed?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="PostHarvestWashing"
                onChange={handleInputChange}
                value={user.PostHarvestWashing}
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
              If yes, whether the water used for washing is potable?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Potable"
                onChange={handleInputChange}
                value={user.Potable}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              On farm processing activities on the farm:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ProcessingActivities"
                onChange={handleInputChange}
                value={user.ProcessingActivities}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              In case of on farm processing, name final products and processing
              loss.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="FinalProductsNProcessingLoss"
                onChange={handleInputChange}
                value={user.FinalProductsNProcessingLoss}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the packing material used to pack the harvested produce
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="PackingMaterial"
                onChange={handleInputChange}
                value={user.PackingMaterial}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the procedure followed for the transportation of Organic
              crops to the destination.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Procedure"
                onChange={handleInputChange}
                value={user.Procedure}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the procedure followed to avoid contamination and
              comingling during transportation of Organic crops.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="AvoidContamination"
                onChange={handleInputChange}
                value={user.AvoidContamination}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Labelling of final Produce/Product: (Advisory: If planning to do
              the product labelling must mention the artwork of label, content
              of the label, whether label approval accorded, reconciliation of
              labels for each products under certification, use of India Organic
              logo)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Labelling"
                onChange={handleInputChange}
                value={user.Labelling}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{border: "1px solid black"}} >
    <h4>Description of monitoring practices & procedures to ensure effective implementation:</h4>

    <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={5}>(Give details of responsible person who does monitoring, frequency of monitoring, assessment of effectiveness etc.)</Form.Label>
    <Col sm={5}><Form.Control 
      type="text"
      name="Monitoring"
      onChange={handleInputChange}
      value={user.Monitoring}
    placeholder=""/></Col>
    </Form.Group>

  </Container>
  <Button onClick={SendToApi}>Submit</Button>
      </Form>
    </div>
  );
};

export default HarvestM;
