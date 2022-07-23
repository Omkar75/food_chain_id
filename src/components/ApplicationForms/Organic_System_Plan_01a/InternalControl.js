import React, { useState, useRef } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
  NoOfFarmers: "",
  FarmersWithMoreThan_4Ha: "",
  Ensured_Less_Than_50_Percent: "",
  HowSimilarCropProductionEnsured: "",
  Implementation: "",
  ResponsibleForICSImplementation: "",
  DescribeDocumentsUsedByICS: "",
  StaffTraining: "",
  FarmersTraining: "",
  SystemToInspectFarmers: "",
  CommentSystemToInspectFarmers: "",
  SanctionProcess: "",
  CommentSanctionProcess: "",
  BuyingProcedure: "",
  CommentBuyingProcedure: "",
  Products: "",
  FacilityToStoreHandle: "",
  CommentFacilityToStoreHandle: "",



  ICSManual: "",
  ICSOrganizationChart: "",
  OverviewMap: "",
  FarmerList: "",
  SanctionedFarmerList: "",
  LocalLanguage: "",
  InternalInspection: "",
  ICSStaffDocuments: "",
  FarmerDocuments: "",
  Others:""
};

const InternalControl = () => {
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
      user.NoOfFarmers===""||
  user.FarmersWithMoreThan_4Ha===""||
  user.Ensured_Less_Than_50_Percent===""||
  user.HowSimilarCropProductionEnsured===""||
  user.Implementation===""||
  user.ResponsibleForICSImplementation===""||
  user.DescribeDocumentsUsedByICS===""||
  user.StaffTraining===""||
  user.FarmersTraining===""||
  user.SystemToInspectFarmers===""||
  user.CommentSystemToInspectFarmers===""||
  user.SanctionProcess===""||
  user.CommentSanctionProcess===""||
  user.BuyingProcedure===""||
  user.CommentBuyingProcedure===""||
  user.Products===""||
  user.FacilityToStoreHandle===""||
  user.CommentFacilityToStoreHandle===""||



  user.ICSManual===""||
  user.ICSOrganizationChart===""||
  user.OverviewMap===""||
  user.FarmerList===""||
  user.SanctionedFarmerList===""||
  user.LocalLanguage===""||
  user.InternalInspection===""||
  user.ICSStaffDocuments===""||
  user.FarmerDocuments===""||
  user.Others===""
      
    ) {
      alert("Please enter all fields");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1a/addqipics",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            NoOfFarmers:user.NoOfFarmers,
            FarmersWithMoreThan_4Ha:user.FarmersWithMoreThan_4Ha,
            Ensured_Less_Than_50_Percent :user.Ensured_Less_Than_50_Percent,
            HowSimilarCropProductionEnsured :user.HowSimilarCropProductionEnsured,
            Implementation :user.Implementation,
            ResponsibleForICSImplementation:user.ResponsibleForICSImplementation,
            DescribeDocumentsUsedByICS :user.DescribeDocumentsUsedByICS,
            StaffTraining :user.StaffTraining,
            FarmersTraining :user.FarmersTraining,
            SystemToInspectFarmers:user.SystemToInspectFarmers,
            CommentSystemToInspectFarmers:user.CommentSystemToInspectFarmers,
             SanctionProcess:user.SanctionProcess,
             CommentSanctionProcess:user.CommentSanctionProcess,
             BuyingProcedure:user.BuyingProcedure,
             CommentBuyingProcedure:user.CommentBuyingProcedure,
             Products:user.Products,
             FacilityToStoreHandle:user.FacilityToStoreHandle,
             CommentFacilityToStoreHandle:user.CommentFacilityToStoreHandle,
           
           
           
            ICSManual:user.ICSManual,
             ICSOrganizationChart:user.ICSOrganizationChart,
             OverviewMap:user.OverviewMap,
             FarmerList:user.FarmerList,
             SanctionedFarmerList:user.SanctionedFarmerList,
             LocalLanguage:user.LocalLanguage,
             InternalInspection:user.InternalInspection,
             ICSStaffDocuments:user.ICSStaffDocuments,
             FarmerDocuments:user.FarmerDocuments,
             Others:user.Others,
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
          <h4>Internal Control System:</h4>
          <br />
          <div>Scope</div>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              What is the total number of farmers in the grower group?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="NoOfFarmers"
                onChange={handleInputChange}
                value={user.NoOfFarmers}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How many farmers in the grower group have more than 4 Ha area?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="FarmersWithMoreThan_4Ha"
                onChange={handleInputChange}
                value={user.FarmersWithMoreThan_4Ha}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is it ensured that total area of farms having more than 4 Ha shall
              be less than 50% of the total area of the group?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="Ensured_Less_Than_50_Percent"
                onChange={handleInputChange}
                value={user.Ensured_Less_Than_50_Percent}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe how it is ensured that all farmers in the group follow
              similar crop production system and are located in geographical
              proximity
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="HowSimilarCropProductionEnsured"
                onChange={handleInputChange}
                value={user.HowSimilarCropProductionEnsured}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Quality System </h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How internal quality management system is implemented?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Implementation"
                onChange={handleInputChange}
                value={user.Implementation}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Who are responsible to implement ICS procedures?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="ResponsibleForICSImplementation"
                onChange={handleInputChange}
                value={user.ResponsibleForICSImplementation}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Describe all documents used by ICS.
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="DescribeDocumentsUsedByICS"
                onChange={handleInputChange}
                value={user.DescribeDocumentsUsedByICS}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How ICS staff is trained?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="StaffTraining"
                onChange={handleInputChange}
                value={user.StaffTraining}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How farmers are trained?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="FarmersTraining"
                onChange={handleInputChange}
                value={user.FarmersTraining}
                placeholder=""
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Internal inspections, Approvals & Sanctions</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is there system in place to inspect all farmers in the group?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="SystemToInspectFarmers"
                onChange={handleInputChange}
                value={user.SystemToInspectFarmers}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentSystemToInspectFarmers"
                onChange={handleInputChange}
                value={user.CommentSystemToInspectFarmers}
                placeholder="If yes, describe."
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is approval and sanction process developed and implemented?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="SanctionProcess"
                onChange={handleInputChange}
                value={user.SanctionProcess}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentSanctionProcess"
                onChange={handleInputChange}
                value={user.CommentSanctionProcess}
                placeholder="If yes, describe."
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>Product Handling provisions</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Is buying procedure developed and implemented?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="BuyingProcedure"
                onChange={handleInputChange}
                value={user.BuyingProcedure}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentBuyingProcedure"
                onChange={handleInputChange}
                value={user.CommentBuyingProcedure}
                placeholder="If yes, describe."
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              How products from different organic status farmer purchased and
              handled?
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="Products"
                onChange={handleInputChange}
                value={user.Products}
                placeholder=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Do you have any common facility to store or handle the organic
              products?
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FacilityToStoreHandle"
                onChange={handleInputChange}
                value={user.FacilityToStoreHandle}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control
                type="text"
                name="CommentFacilityToStoreHandle"
                onChange={handleInputChange}
                value={user.CommentFacilityToStoreHandle}
                placeholder="If yes, describe."
              />
            </Col>
          </Form.Group>
        </Container>
        <Container style={{ border: "1px solid black" }}>
          <h4>ICS Documentation</h4>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              ICS Manual
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="ICSManual"
                onChange={handleInputChange}
                value={user.ICSManual}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              ICS Organization Chart
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="ICSOrganizationChart"
                onChange={handleInputChange}
                value={user.ICSOrganizationChart}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Overview Map
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="OverviewMap"
                onChange={handleInputChange}
                value={user.OverviewMap}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Farmer List
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FarmerList"
                onChange={handleInputChange}
                value={user.FarmerList}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Sanctioned Farmer List
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="SanctionedFarmerList"
                onChange={handleInputChange}
                value={user.SanctionedFarmerList}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Internal standards in local language
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="LocalLanguage"
                onChange={handleInputChange}
                value={user.LocalLanguage}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Internal inspection forms
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="InternalInspection"
                onChange={handleInputChange}
                value={user.InternalInspection}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              ICS Staff Documents
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="ICSStaffDocuments"
                onChange={handleInputChange}
                value={user.ICSStaffDocuments}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Farmer documents (Application, Agreement etc)
            </Form.Label>
            <Col sm={5}>
              {" "}
              <Form.Select
                name="FarmerDocuments"
                onChange={handleInputChange}
                value={user.FarmerDocuments}
              >
                <option>--select option--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={5}>
              Other
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

export default InternalControl;
