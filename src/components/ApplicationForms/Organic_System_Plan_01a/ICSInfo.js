import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  NameofICS: "",
  FCIDProjectNo: "",
  TracenetRegNo: "",
  MailingAdd: "",
  Village: "",
  Taluka: "",
  District: "",
  ZipCode: "",
  TypesofBusiness: "",
  Nameofthemandator: "",
  Addofmandator: "",
  ContactPerson: "",
  Designation: "",
  PhoneNo: "",
  MobileNo: "",
  FaxNo: "",
  Emailid: "",
  Website: "",
  PanCardNo: "",
  Totalarea: "",
  CropArea: "",
  NoOfFarmers: "",
  Standard: "",
  Scope: "",
  AppliedForOrganicCertfication: "",
  CopyOfCertificate: "",
  DateOSPPrepared: "",
  DateOSPUpdated: "",
};
// const [user, setUser] = useState(userObj);


const ICSInfo = () => {
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
      user.NameofICS=== ""||
      user.FCIDProjectNo=== ""||
      user.TracenetRegNo===""||
      user.MailingAdd===""||
      user.Village===""||
      user.Taluka=== ""||
      user.District=== ""||
      user.ZipCode===""||
      user.TypesofBusiness===""||
      user.Nameofthemandator===""||
      user.Addofmandator===""||
      user.ContactPerson===""||
      user.Designation===""||
      user.PhoneNo===""||
      user.MobileNo===""||
      user.FaxNo===""||
      user.Emailid===""||
      user.Website===""||
      user.PanCardNo===""||
      user.Totalarea===""||
      user.CropArea===""||
      user.NoOfFarmers===""||
      user.Standard===""||
      user.Scope===""||
      user.AppliedForOrganicCertfication===""||
      user.CopyOfCertificate===""||
      user.DateOSPPrepared===""||
      user.DateOSPUpdated===""
      
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addicsdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            NameofICS: user.NameofICS,
            FCIDProjectNo: user.FCIDProjectNo,
            TracenetRegNo: user.TracenetRegNo,
            MailingAdd: user.MailingAdd,
            Village: user.Village,
            Taluka: user.Taluka,
            District: user.District,
            ZipCode: user.ZipCode,
            TypesofBusiness: user.TypesofBusiness,
            Nameofthemandator: user.Nameofthemandator,
            Addofmandator: user.Addofmandator,
            ContactPerson: user.ContactPerson,
            Designation: user.Designation,
            PhoneNo: user.PhoneNo,
            MobileNo: user.MobileNo,
            FaxNo: user.FaxNo,
            Emailid: user.Emailid,
            Website: user.Website,
            PanCardNo:user.PanCardNo,
            Totalarea: user.Totalarea,
            CropArea: user.CropArea,
            NoOfFarmers: user.NoOfFarmers,
            Standard: user.Standard,
            Scope: user.Scope,
            AppliedForOrganicCertfication: user.AppliedForOrganicCertfication,
            CopyOfCertificate: user.CopyOfCertificate,
            DateOSPPrepared: user.DateOSPPrepared,
            DateOSPUpdated: user.DateOSPUpdated,
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
            <Form.Label column sm={2}>
              Name of the ICS:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NameofICS"
                onChange={handleInputChange}
                value={user.NameofICS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>FCID Project No.:</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="FCIDProjectNo"
                    onChange={handleInputChange}
                    value={user.FCIDProjectNo}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Tracenet Reg. No.:</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="TracenetRegNo"
                    onChange={handleInputChange}
                    value={user.TracenetRegNo}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Mailing Address:{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="MailingAdd"
                onChange={handleInputChange}
                value={user.MailingAdd}
                placeholder=""
              />
            </Col>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Village/City: </Form.Label>
                <Col>
                  {" "}
                  <Form.Control
                    type="text"
                    name="Village"
                    onChange={handleInputChange}
                    value={user.Village}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column> Taluka:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="Taluka"
                    onChange={handleInputChange}
                    value={user.Taluka}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column> District: </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="District"
                    onChange={handleInputChange}
                    value={user.District}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Zip Code:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="ZipCode"
                    onChange={handleInputChange}
                    value={user.ZipCode}
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Types of Business:
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="TypesofBusiness"
                onChange={handleInputChange}
                value={user.TypesofBusiness}
              >
                <option value="Proprietorship">Proprietorship</option>
                <option value="Partnership">Partnership</option>
                <option value="Corporation">Corporation</option>
                <option value="Limited">Limited</option>
                <option value="Cooperative">Cooperative</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control placeholder="If Other, Specify " />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column>Name of the mandator (if any):</Form.Label>
            <Col sm={9}>
              {" "}
              <Form.Control
                type="text"
                name="Nameofthemandator"
                onChange={handleInputChange}
                value={user.Nameofthemandator}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Address of the mandator:
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Addofmandator"
                onChange={handleInputChange}
                value={user.Addofmandator}
                placeholder=""
              />
            </Col>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Contact Person:</Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    name="ContactPerson"
                    onChange={handleInputChange}
                    value={user.ContactPerson}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Designation: </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="Designation"
                    onChange={handleInputChange}
                    value={user.Designation}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Phone No.:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="PhoneNo"
                    onChange={handleInputChange}
                    value={user.PhoneNo}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Mobile No.:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="MobileNo"
                    onChange={handleInputChange}
                    value={user.MobileNo}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Fax No.:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="FaxNo"
                    onChange={handleInputChange}
                    value={user.FaxNo}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Email id:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="Emailid"
                    onChange={handleInputChange}
                    value={user.Emailid}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Website:</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="Website"
                    onChange={handleInputChange}
                    value={user.Website}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Pan card No.:{" "}
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="PanCardNo"
                onChange={handleInputChange}
                value={user.PanCardNo}
                placeholder=""
              />{" "}
            </Col>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Total area (Ha):</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="Totalarea"
                    onChange={handleInputChange}
                    value={user.Totalarea}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>Crop Area (Ha):</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="CropArea"
                    onChange={handleInputChange}
                    value={user.CropArea}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column>No. of farmers: </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    name="NoOfFarmers"
                    onChange={handleInputChange}
                    value={user.NoOfFarmers}
                    placeholder=""
                  />{" "}
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Standard
            </Form.Label>
            <Col sm={1}>
              <Form.Check
                type="checkbox"
                name="Standard"
                checked={user.Standard}
                value="NPOP"
                onChange={handleInputChange}
                label="NPOP"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Scope
            </Form.Label>
            <Col sm={2}>
              <Form.Check
                type="checkbox"
                name="Scope"
                checked={user.Scope}
                value="GrowerGroup"
                onChange={handleInputChange}
                label="Grower Group"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={7}>
              Is your organization currently certified or previously applied for
              Organic Certification?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="AppliedForOrganicCertfication"
                onChange={handleInputChange}
                value={user.AppliedForOrganicCertfication}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={7}>
              If YES, please share the certification details with a copy of
              certificate; Attached?
            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CopyOfCertificate"
                onChange={handleInputChange}
                value={user.CopyOfCertificate}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NA">NA</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={6}>
                  Date OSP initially prepared :
                </Form.Label>
                <Col sm={5}>
                  {" "}
                  <Form.Control
                    type="date"
                    name="DateOSPPrepared"
                    onChange={handleInputChange}
                    value={user.DateOSPPrepared}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={6}>
                  Date OSP updated :
                </Form.Label>
                <Col sm={5}>
                  {" "}
                  <Form.Control
                    type="date"
                    name="DateOSPUpdated"
                    onChange={handleInputChange}
                    value={user.DateOSPUpdated}
                  />
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button onClick={SendToApi}>Submit</Button>
      </Form>
    </div>
  );
};

export default ICSInfo;