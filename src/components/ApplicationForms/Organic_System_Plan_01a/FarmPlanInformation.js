import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  CopyOfOrganicStandards: "",
  CommentCopyOfOrganicStandards: "",
  FilledYielEstimate: "",
  CommentFilledYielEstimate: "",
  DescribeProcedure: "",
  ConventionalUntreated: "",
  TraditionalGrown: "",
  OwnFarmSeed: "",
  Synthetic: "",
  OrganicSeed: "",
  SeedDetails: "",
};

const FarmPlanInformation = () => {
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
      user.CopyOfOrganicStandards=== ""||
      user.CommentCopyOfOrganicStandards=== ""||
      user.FilledYielEstimate===""||
      user.CommentFilledYielEstimate===""||
      user.DescribeProcedure===""||
      user.ConventionalUntreated=== ""||
      user.TraditionalGrown=== ""||
      user.OwnFarmSeed===""||
      user.Synthetic===""||
      user.OrganicSeed===""||
      user.SeedDetails===""
      
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addfarmseeed",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            CopyOfOrganicStandards: user.CopyOfOrganicStandards,
            CommentCopyOfOrganicStandards: user.CommentCopyOfOrganicStandards,
            FilledYielEstimate: user.FilledYielEstimate,
            CommentFilledYielEstimate: user.CommentFilledYielEstimate,
            DescribeProcedure: user.DescribeProcedure,
            ConventionalUntreated: user.ConventionalUntreated,
            TraditionalGrown: user.TraditionalGrown,
            OwnFarmSeed: user.OwnFarmSeed,
            Synthetic: user.Synthetic,
            OrganicSeed: user.OrganicSeed,
            SeedDetails: user.SeedDetails,
            form_conn:"62d1545bb63a268f6cbe788f"
          }),
        }
      ).then((res)=>{res.json().then((data)=>{console.log(data)})})

      }
      }
  return (
    <div className="rules text-md-right">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
              Do you have a copy of latest organic standards?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CopyOfOrganicStandards"
                onChange={handleInputChange}
                value={user.CopyOfOrganicStandards}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
              <br />
              <Form.Control
                name="CommentCopyOfOrganicStandards"
                onChange={handleInputChange}
                value={user.CommentCopyOfOrganicStandards}
                placeholder="Comments"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
              Have you filled Field specification & Yield estimate for all
              crops?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="FilledYielEstimate"
                onChange={handleInputChange}
                value={user.FilledYielEstimate}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
              <br />
              <Form.Control
                name="CommentFilledYielEstimate"
                onChange={handleInputChange}
                value={user.CommentFilledYielEstimate}
                placeholder="Comments"
              />
            </Col>
          </Form.Group>
          <br />
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <br />
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6}>
              Describe step by step activities performed on the field from land
              preparation till harvesting, transport of organic products, in
              brief
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Control
                type="text"
                name="DescribeProcedure"
                onChange={handleInputChange}
                value={user.DescribeProcedure}
                placeholder="comments"
              />
            </Col>
          </Form.Group>
          <br />
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <br />
          <h6>
            (Please select applicable following origin of seeds or planting
            stock used at your site or farm)
          </h6>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Conventional untreated seeds{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="ConventionalUntreated"
                onChange={handleInputChange}
                value={user.ConventionalUntreated}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Traditional grown seeds but not certified seeds{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="TraditionalGrown"
                onChange={handleInputChange}
                value={user.TraditionalGrown}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Seed from own farm{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="OwnFarmSeed"
                onChange={handleInputChange}
                value={user.OwnFarmSeed}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Synthetic treated seed{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="Synthetic"
                onChange={handleInputChange}
                value={user.Synthetic}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Organic seeds{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="OrganicSeed"
                onChange={handleInputChange}
                value={user.OrganicSeed}
              >
                <option value="Yes">yes</option>
                <option value="No">no</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
              Mention Seed rate, Source if outside the farm, Seed treatments
              done, Timing of seed use etc.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="SeedDetails"
                onChange={handleInputChange}
                value={user.SeedDetails}
                placeholder="comments"
              />
            </Col>
          </Form.Group>
          <br />
        </Container>

        <Button onClick={SendToApi}>Submit</Button>

        
      </Form>
    </div>
  );
};

export default FarmPlanInformation;