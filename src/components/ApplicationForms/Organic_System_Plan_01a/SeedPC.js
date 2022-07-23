import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  Procure: "",
  SourceOrSupplier: "",
  NameOfCertificationBody: "",
  ReasonOfNonAvailability: "",
  SoilMixIngredients: "",
  FertilityProducts: "",
  ProductsForPestControl: "",
  Equipment: "",
  CopyOfCurrentMaterials: "",
  CommentCopyOfCurrentMaterials: "",
  GreenHouse: "",
  CommentGreenHouse: "",
  SourcesOfIrrigation: "",
  OtherSourcesOfIrrigation: "",
  Describe: "",
};

const SeedPC = () => {
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
      user.Procure=== ""||
      user.SourceOrSupplier=== ""||
      user.NameOfCertificationBody===""||
      user.ReasonOfNonAvailability===""||
      user.SoilMixIngredients===""||
      user.FertilityProducts=== ""||
      user.ProductsForPestControl=== ""||
      user.Equipment===""||
      user.CopyOfCurrentMaterials===""||
      user.CommentCopyOfCurrentMaterials===""||
      user.GreenHouse===""||
      user.CommentGreenHouse===""||
      user.SourcesOfIrrigation===""||
      user.OtherSourcesOfIrrigation===""||
      user.Describe===""
      
    ) {
      alert("Please enter all fields");
    } else {
      console.log(JSON.stringify({
        Procure: user.Procure,
        SourceOrSupplier:user.SourceOrSupplier,
        NameOfCertificationBody:user.NameOfCertificationBody,
        ReasonOfNonAvailability:user.ReasonOfNonAvailability,
        SoilMixIngredients:user.SoilMixIngredients,
        FertilityProducts:user.FertilityProducts,
        ProductsForPestControl:user.ProductsForPestControl,
        Equipment:user.Equipment,
        CopyOfCurrentMaterials:user.CopyOfCurrentMaterials,
        CommentCopyOfCurrentMaterials:user.CommentCopyOfCurrentMaterials,
        GreenHouse:user.GreenHouse,
        CommentGreenHousee:user.CommentGreenHouse,
        SourcesOfIrrigation:user.SourcesOfIrrigation,
        OtherSourcesOfIrrigation:user.OtherSourcesOfIrrigation,
        Describe:user.Describe,
        form_conn:"62d1545bb63a268f6cbe788f"
      }))
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addperennialwater",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Procure: user.Procure,
            SourceOrSupplier:user.SourceOrSupplier,
            NameOfCertificationBody:user.NameOfCertificationBody,
            ReasonOfNonAvailability:user.ReasonOfNonAvailability,
            SoilMixIngredients:user.SoilMixIngredients,
            FertilityProducts:user.FertilityProducts,
            ProductsForPestControl:user.ProductsForPestControl,
            Equipment:user.Equipment,
            CopyOfCurrentMaterials:user.CopyOfCurrentMaterials,
            CommentCopyOfCurrentMaterials:user.CommentCopyOfCurrentMaterials,
            GreenHouse:user.GreenHouse,
            CommentGreenHouse:user.CommentGreenHouse,
            SourcesOfIrrigation:user.SourcesOfIrrigation,
            OtherSourcesOfIrrigation:user.OtherSourcesOfIrrigation,
            Describe:user.Describe,
            form_conn:"62d1545bb63a268f6cbe788f"
          }),
        }
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})

      }
      }

  return (
    <div className=" text-md-left">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Seedlings for Perennial Crops: </h4>
          <br />
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you procure organic seedlings?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Procure"
                onChange={handleInputChange}
                value={user.Procure}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              If yes, please provide details of the source or name of supplier:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="SourceOrSupplier"
                onChange={handleInputChange}
                value={user.SourceOrSupplier}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              If organic seedlings are certified, then please provide the name
              of certification body:{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NameOfCertificationBody"
                onChange={handleInputChange}
                value={user.NameOfCertificationBody}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              If you procured non-organic seedlings, please share the details
              with reason of non-availability of same:{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Control
                type="text"
                name="ReasonOfNonAvailability"
                onChange={handleInputChange}
                value={user.ReasonOfNonAvailability}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <p>
            If you are growing seedling at your farm or site then, please
            provide the following details:{" "}
          </p>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Soil mix ingredients used for growing the seedlings{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Control
                type="text"
                name="SoilMixIngredients"
                onChange={handleInputChange}
                value={user.SoilMixIngredients}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Fertility products used in the nursery{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Control
                type="text"
                name="FertilityProducts"
                onChange={handleInputChange}
                value={user.FertilityProducts}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Products used for controlling the pest and diseases
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Control
                type="text"
                name="ProductsForPestControl"
                onChange={handleInputChange}
                value={user.ProductsForPestControl}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Equipment used during the cultivation of seedlings{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Equipment"
                onChange={handleInputChange}
                value={user.Equipment}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you have a copy of current Materials List that is to be used?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="CopyOfCurrentMaterials"
                onChange={handleInputChange}
                value={user.CopyOfCurrentMaterials}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentCopyOfCurrentMaterials"
                onChange={handleInputChange}
                value={user.CommentCopyOfCurrentMaterials}
                placeholder="Provide details of materials here"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you have a Green House? If yes, give details
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="GreenHouse"
                onChange={handleInputChange}
                value={user.GreenHouse}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentGreenHouse"
                onChange={handleInputChange}
                value={user.CommentGreenHouse}
                placeholder="comments"
              />{" "}
            </Col>
          </Form.Group>

          <br />
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Water Management : </h4>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              What are the sources of irrigation or water at your farm or site?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="SourcesOfIrrigation"
                onChange={handleInputChange}
                value={user.SourcesOfIrrigation}
              >
                <option value="Rainfed">Rainfed</option>
                <option value="Onsite well / bore well">
                  Onsite well / bore well
                </option>
                <option value="Municipality">Municipality</option>
                <option value="River/Creek/Pond etc">
                  River/Creek/Pond etc.
                </option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="OtherSourcesOfIrrigation"
                onChange={handleInputChange}
                value={user.OtherSourcesOfIrrigation}
                placeholder="if other, specify : "
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Please describe how the water quality is being monitored including
              its frequency{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Describe"
                onChange={handleInputChange}
                value={user.Describe}
                placeholder=""
              />
            </Col>
            <Form.Text>
              (Please attach the copies of available water test results to
              Organic System plan.)
            </Form.Text>
          </Form.Group>
        </Container>

        <Button onClick={SendToApi}>Submit</Button>

        
      </Form>
    </div>
  );
};

export default SeedPC;
