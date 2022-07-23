import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  FollowRotationPractice: "",
  RabiCrop: "",
  KharifCrop: "",
  ZaidCrop: "",
  PerennialCrops: "",
  Methods: "",
  Practices: "",
  OrganicFields: "",
  CommentOrganicFields: "",
  NeighbouringArea: "",
  ParallelProduction: "",
  CommentParallelProduction: "",
  MaintainanceOfBuffeZone: "",
  MajorPests: "",
  CommentMajorPests: "",
  DiseaseProblem: "",
  Weed: "",
  CommentWeed: "",
  WeedControl: "",
};

const CropM = () => {
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
      user.FollowRotationPractice === "" ||
      user.RabiCrop === "" ||
      user.KharifCrop === "" ||
      user.ZaidCrop === "" ||
      user.PerennialCrops === "" ||
      user.Methods === "" ||
      user.Practices === "" ||
      user.OrganicFields === "" ||
      user.CommentOrganicFields === "" ||
      user.NeighbouringArea === "" ||
      user.ParallelProduction === "" ||
      user.CommentParallelProduction === "" ||
      user.MaintainanceOfBuffeZone === "" ||
      user.MajorPests === "" ||
      user.CommentMajorPests === "" ||
      user.DiseaseProblem === "" ||
      user.Weed === "" ||
      user.CommentWeed === "" ||
      user.WeedControl === ""
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addcroppestweed",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FollowRotationPractice : user.FollowRotationPractice ,
            RabiCrop: user.RabiCrop,
            KharifCrop: user.KharifCrop,
            ZaidCrop: user.ZaidCrop,
            PerennialCrops: user.PerennialCrops,
            Methods: user.Methods,
            Practices: user.Practices,
            OrganicFields: user.OrganicFields,
            CommentOrganicFields:user.CommentOrganicFields,
            NeighbouringArea: user.NeighbouringArea,
            ParallelProduction: user.ParallelProduction,
            CommentParallelProduction: user.CommentParallelProduction,
            MaintainanceOfBuffeZone:user.MaintainanceOfBuffeZone,
            MajorPests:user.MajorPests,
            CommentMajorPests:user.CommentMajorPests,
            DiseaseProblem:user.DiseaseProblem,
            Weed:user.Weed,
            CommentWeed: user.CommentWeed,
            WeedControl: user.WeedControl,
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
          <h4>Crop Management:</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you follow Crop Rotation Practice?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FollowRotationPractice"
                onChange={handleInputChange}
                value={user.FollowRotationPractice}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <div className="card card-body ">
            <p>If yes, please describe the crop rotation practice?</p>
            <hr />
            <div className="table table-striped table-bordered table-sm">
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      a)Annual Crops:
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      Rabi crop:
                    </th>
                    <th>
                      <input
                        type="text"
                        name="RabiCrop"
                        onChange={handleInputChange}
                        value={user.RabiCrop}
                      />
                    </th>
                  </tr>

                  <tr>
                    <th className="col-md-4" name="sno">
                      Kharif crop:
                    </th>
                    <th>
                      <input
                        type="text"
                        name="KharifCrop"
                        onChange={handleInputChange}
                        value={user.KharifCrop}
                      />
                    </th>
                  </tr>

                  <tr>
                    <th className="col-md-4" name="sno">
                      Zaid crop:
                    </th>
                    <th>
                      <input
                        type="text"
                        name="ZaidCrop"
                        onChange={handleInputChange}
                        value={user.ZaidCrop}
                      />
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      b) Perennial crops:
                    </th>
                    <th>
                      <input
                        type="text"
                        name="PerennialCrops"
                        onChange={handleInputChange}
                        value={user.PerennialCrops}
                      />
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      c) Please describe the methods used to promote biological
                      plant diversity in case of only perennial plantation.
                      (e.g. alley cropping, intercropping, hedgerows, or other
                      conservation methods)
                    </th>
                    <th>
                      <input
                        type="text"
                        name="Methods"
                        onChange={handleInputChange}
                        value={user.Methods}
                      />
                    </th>
                  </tr>
                </thead>
              </Table>
            </div>
          </div>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Provide details of crop management practices (Crop specific)
              (E.g., Bunding, earthing up, Thinning, Gap filling, Pruning etc.)
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Practices"
                onChange={handleInputChange}
                value={user.Practices}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do any of your organic fields border areas that could possibly
              cause contamination to your organic crops?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="OrganicFields"
                onChange={handleInputChange}
                value={user.OrganicFields}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentOrganicFields"
                onChange={handleInputChange}
                value={user.CommentOrganicFields}
                placeholder='(If "yes" Give details on preventive measures)'
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe the neighbouring area of your farms in all direction and
              including use of adjoining land
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NeighbouringArea"
                onChange={handleInputChange}
                value={user.NeighbouringArea}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Does Parallel Production (i.e. production of both organic and
              conventional crop on the same farm or site) occur?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="ParallelProduction"
                onChange={handleInputChange}
                value={user.ParallelProduction}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentParallelProduction"
                onChange={handleInputChange}
                value={user.CommentParallelProduction}
                placeholder='(If "yes" describe how this is being managed )'
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              Describe how the buffer zones (areas) you maintain at your site to
              minimize the risk of contamination from adjoining land used?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="MaintainanceOfBuffeZone"
                onChange={handleInputChange}
                value={user.MaintainanceOfBuffeZone}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Pest, Disease and Weed control: </h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              What are the major pests at your farm or site ?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="MajorPests"
                onChange={handleInputChange}
                value={user.MajorPests}
              >
                <option>--select option--</option>
                <option value="Insects (list)">Insects (list) </option>
                <option value="Rodents">Rodents </option>
                <option value="Wild Animals">Wild Animals</option>
                <option value="Birds">Birds</option>
                <option value="Others">Others specify</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentMajorPests"
                onChange={handleInputChange}
                value={user.CommentMajorPests}
                placeholder="If others,specify"
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              Do you experience any disease problem at your farm?{" "}
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="DiseaseProblem"
                onChange={handleInputChange}
                value={user.DiseaseProblem}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>


 {/* Disease and pest information table
          <Soil_Disease/>  */}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              Is there a problem of weeds at your farm or site:
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Weed"
                onChange={handleInputChange}
                value={user.Weed}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentWeed"
                onChange={handleInputChange}
                value={user.CommentWeed}
                placeholder='(If "yes" please list the names of the weeds available in the area )'
              />{" "}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              {" "}
              Describe how the weeds are been controlled:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="WeedControl"
                onChange={handleInputChange}
                value={user.WeedControl}
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

export default CropM;
