import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  Type: "",
  NutrientDefeciency: "",
  CommentNutrientDefeciency: "",
  MinSE: "",
  CommentMinSE: "",
  MonitorSF: "",
  CommentMonitorSF: "",
  SFPlan: "",
  Manure: "",
  SourceOfManure: "",
  CommentSource: "",
  RawManure: "",
  CommentRawManure: "",
  BurnCropResidue: "",
  SweageSludge: "",
  Compost: "",
  CommentCompost: "",
  CompostingMethod: "",
  CommentCompostingMethod: "",
  CNRatio: "",
  Temperature: "",
  MaintainedTemperature: "",
  LTemperature: "",
  CountMaterialTurned: "",
};

const SoilF = () => {
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
      user.Type === "" ||
      user.NutrientDefeciency === "" ||
      user.CommentNutrientDefeciency === "" ||
      user.MinSE === "" ||
      user.CommentMinSE === "" ||
      user.MonitorSF === "" ||
      user.CommentMonitorSF === "" ||
      user.SFPlan === "" ||
      user.Manure === "" ||
      user.SourceOfManure === "" ||
      user.CommentSource === "" ||
      user.RawManure === "" ||
      user.CommentRawManure === "" ||
      user.BurnCropResidue === "" ||
      user.SweageSludge === "" ||
      user.Compost === "" ||
      user.CommentCompost === "" ||
      user.CompostingMethod === "" ||
      user.CommentCompostingMethod === "" ||
      user.CNRatio === "" ||
      user.Temperature === "" ||
      user.MaintainedTemperature === "" ||
      user.LTemperature === "" ||
      user.CountMaterialTurned === ""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addsoilcropfertility",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Type: user.Type,
            NutrientDefeciency: user.NutrientDefeciency,
            CommentNutrientDefeciency: user.CommentNutrientDefeciency,
            MinSE: user.MinSE,
            CommentMinSE: user.CommentMinSE,
            MonitorSF: user.MonitorSF,
            CommentMonitorSF: user.CommentMonitorSF,
            SFPlan: user.SFPlan,
            Manure: user.Manure,
            SourceOfManure: user.SourceOfManure,
            CommentSource: user.CommentSource,
            RawManure: user.RawManure,
            CommentRawManure: user.CommentRawManure,
            BurnCropResidue: user.BurnCropResidue,
            SweageSludge: user.SweageSludge,
            Compost: user.Compost,
            CommentCompost: user.CommentCompost,
            CompostingMethod: user.CompostingMethod,
            CommentCompostingMethod: user.CommentCompostingMethod,
            CNRatio: user.CNRatio,
            Temperature: user.Temperature,
            MaintainedTemperature: user.MaintainedTemperature,
            LTemperature: user.LTemperature,
            CountMaterialTurned: user.CountMaterialTurned,
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
    <div className="text-md-left">
      {JSON.stringify(user)}
      <Form>
        <Container style={{ border: "1px solid black" }}>
          <h4>Soil and Crop Fertility Management : </h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              Type of the soil:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Type"
                onChange={handleInputChange}
                value={user.Type}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Are there any soil nutrient deficiencies been observed at your
              farm? If yes, please describe how the deficiencies have been
              addressed.{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="NutrientDefeciency"
                onChange={handleInputChange}
                value={user.NutrientDefeciency}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentNutrientDefeciency"
                onChange={handleInputChange}
                value={user.CommentNutrientDefeciency}
                placeholder="Give reference of Soil test report"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How do you manage your land to minimize soil erosion?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="MinSE"
                onChange={handleInputChange}
                value={user.MinSE}
              >
                <option>--Select Option--</option>
                <option value="Crop rotation">Crop rotation</option>
                <option value="Terracing ">Terracing </option>
                <option value="Contour farming">Contour farming</option>
                <option value="Cover crops">Cover crops</option>
                <option value="Tillage">Tillage</option>
                <option value="Bunds">Bunds</option>
                <option value="Others">Others (specify)</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentMinSE"
                onChange={handleInputChange}
                value={user.CommentMinSE}
                placeholder="If others,specify"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How do you monitor your soil fertility and crop contamination?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="MonitorSF"
                onChange={handleInputChange}
                value={user.MonitorSF}
              >
                <option>--Select Option--</option>
                <option value="Physical observation of soil">
                  Physical observation of soil
                </option>
                <option value="Physical Observation of plant health">
                  Physical Observation of plant health
                </option>
                <option value="Soil Analysis">Soil Analysis</option>
                <option value="Residue Analysis">Residue Analysis</option>
                <option value="Crop yields comparison">
                  Crop yields comparison{" "}
                </option>
                <option value="Others">Others please specify</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentMonitorSF"
                onChange={handleInputChange}
                value={user.CommentMonitorSF}
                placeholder="If others,specify"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe your soil fertility plan? (Green manure/Compost/Bio
              fertilizer / Soil conditioner /Crop Rotation / inter cropping
              etc.)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="SFPlan"
                onChange={handleInputChange}
                value={user.SFPlan}
                placeholder="(Give details of inputs used, Application rate, Application methods, Application time)"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Which type of manure are you using to improve soil fertility:
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Manure"
                onChange={handleInputChange}
                value={user.Manure}
              >
                <option>--Select Option--</option>
                <option value="Processed animal manure">
                  Processed animal manure
                </option>
                <option value="Green waste">Green waste</option>
                <option value="Liquid fertilizer">Liquid fertilizer</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              What is the source of manure?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="SourceOfManure"
                onChange={handleInputChange}
                value={user.SourceOfManure}
              >
                <option>--Select Option--</option>
                <option value="Off-farm ">Off-farm</option>
                <option value="On-farm">On-farm</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentSource"
                onChange={handleInputChange}
                value={user.CommentSource}
                placeholder="If off farm, give details of source:"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is raw manure application done in the organic farm (This applies
              to manures whether deposited naturally by livestock or draft
              animals or manure spread as part of nutrient management plan)
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="RawManure"
                onChange={handleInputChange}
                value={user.RawManure}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentRawManure"
                onChange={handleInputChange}
                value={user.CommentRawManure}
                placeholder="If yes, then please mention the use."
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you burn crop residues at farm?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="BurnCropResidue"
                onChange={handleInputChange}
                value={user.BurnCropResidue}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you apply sewage sludge to fields?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="SweageSludge"
                onChange={handleInputChange}
                value={user.SweageSludge}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Whether the compost is made at site or farm{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Compost"
                onChange={handleInputChange}
                value={user.Compost}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentCompost"
                onChange={handleInputChange}
                value={user.CommentCompost}
                placeholder="If yes, please list all compost ingredients/additives"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              What composting method do you use?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CompostingMethod"
                onChange={handleInputChange}
                value={user.CompostingMethod}
              >
                <option>--Select Option--</option>
                <option value="In-vessel">In-vessel </option>
                <option value="static aerated">static aerated </option>
                <option value="windrows">windrows</option>
                <option value="Others">Others please specify</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentCompostingMethod"
                onChange={handleInputChange}
                value={user.CommentCompostingMethod}
                placeholder="If others,specify"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              What is C: N ratio?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="CNRatio"
                onChange={handleInputChange}
                value={user.CNRatio}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you monitor temperature?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Temperature"
                onChange={handleInputChange}
                value={user.Temperature}
              >
                <option>--Select Option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              If yes, what is temperature maintained?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="MaintainedTemperature"
                onChange={handleInputChange}
                value={user.MaintainedTemperature}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How long is this temperature maintained?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="LTemperature"
                onChange={handleInputChange}
                value={user.LTemperature}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              If compost is windrowed, how many times are materials turned?{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="CountMaterialTurned"
                onChange={handleInputChange}
                value={user.CountMaterialTurned}
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

export default SoilF;
