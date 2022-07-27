import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const userObj = {
CertificationApplicationForm:"",
QCAgreement:"",
TracenetRLetter:"",
AuditPlan:"",
AuditConfirmationLetter:"",
ApprovedPlan:"",
MeetingForm:"",
AuditSummary:"",
RiskAssessment:"",
AuditChecklist:"",
CertificationAuditReport:"",
FieldHistory:"",
FSAndYE:"",
FarmerList:"",
SanctionedFarmerList:"",
OverviewMap:"",
ICSManual:"",
SamplingForm:"",
SupportingDocuments:"",
CorrectVersions:"",
FilledCompletely:"",
LanguageGrammar:""


};
    const  Checkpoints_05 = () => {
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
            "https://foodchainid.herokuapp.com/foodchainid_form5/getcheckpoint5",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                form_conn:"62d1545bb63a268f6cbe788f"
              }),
            }
          ).then((res)=>{res.json().then((data)=>{console.log(data)})})
      
      
        
          
        }, [])
        
        const SendToApi = () => {
          if (
            user.CertificationApplicationForm=== ""||
            user.QCAgreement=== ""||
            user.TracenetRLetter=== ""||
            user.AuditPlan=== ""||
            user.AuditConfirmationLetter=== ""||
            user.ApprovedPlan=== ""||
            user.MeetingForm=== ""||
            user.AuditSummary=== ""||
            user.RiskAssessment=== ""||
            user.AuditChecklist=== ""||
            user.CertificationAuditReport=== ""||
            user.FieldHistory=== ""||
            user.FSAndYE=== ""||
            user.FarmerList=== ""||
            user.SanctionedFarmerList=== ""||
            user.OverviewMap=== ""||
            user.ICSManual=== ""||
            user.SamplingForm=== ""||
            user.SupportingDocuments=== ""||
            user.CorrectVersions=== ""||
            user.FilledCompletely=== ""||
            user.LanguageGrammar=== ""
          ) {
            alert("Please enter all fields");
          } else {
            fetch(
              "https://foodchainid.herokuapp.com/foodchainid_form5/addcheckpoint5",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  CertificationApplicationForm:user.CertificationApplicationForm,
                  QCAgreement:user.QCAgreement,
                  TracenetRLetter:user.TracenetRLetter,
                  AuditPlan:user.AuditPlan,
                  AuditConfirmationLetter:user.AuditConfirmationLetter,
                  ApprovedPlan:user.ApprovedPlan,
                  MeetingForm:user.MeetingForm,
                  AuditSummary:user.AuditSummary,
                  RiskAssessment:user.RiskAssessment,
                  AuditChecklist:user.AuditChecklist,
                  CertificationAuditReport:user.CertificationAuditReport,
                  FieldHistory:user.FieldHistory,
                  FSAndYE:user.FSAndYE,
                  FarmerList:user.FarmerList,
                  SanctionedFarmerList:user.SanctionedFarmerList,
                  OverviewMap:user.OverviewMap,
                  ICSManual:user.ICSManual,
                  SamplingForm:user.SamplingForm,
                  SupportingDocuments:user.SupportingDocuments,
                  CorrectVersions:user.CorrectVersions,
                  FilledCompletely:user.FilledCompletely,
                  LanguageGrammar:user.LanguageGrammar,
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
            Certification Application Form
            (Initial & updated, in case of any changes):

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CertificationApplicationForm"
                onChange={handleInputChange}
                value={user.CertificationApplicationForm}
              > <option>Select Option</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
             
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Quotation & Certification Agreement:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="QCAgreement"
                onChange={handleInputChange}
                value={user.QCAgreement}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Tracenet Registration Letter:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="TracenetRLetter"
                onChange={handleInputChange}
                value={user.TracenetRLetter}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Audit Plan:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="AuditPlan"
                onChange={handleInputChange}
                value={user.AuditPlan}
              ><option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                <option value="NA">NA</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Audit Confirmation Letter

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="AuditConfirmationLetter"
                onChange={handleInputChange}
                value={user.AuditConfirmationLetter}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                <option value="NA">NA</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Approved Organic System Plan:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="ApprovedPlan"
                onChange={handleInputChange}
                value={user.ApprovedPlan}
              ><option>Select Option</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Opening & Closing Meeting Form:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="MeetingForm"
                onChange={handleInputChange}
                value={user.MeetingForm}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>

              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Audit Summary:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="AuditSummary"
                onChange={handleInputChange}
                value={user.AuditSummary}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Risk Assessment:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="RiskAssessment"
                onChange={handleInputChange}
                value={user.RiskAssessment}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Audit Checklist:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="AuditChecklist"
                onChange={handleInputChange}
                value={user.AuditChecklist}
              >
                <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Certification Audit Report:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CertificationAuditReport"
                onChange={handleInputChange}
                value={user.CertificationAuditReport}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Field History:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="FieldHistory"
                onChange={handleInputChange}
                value={user.FieldHistory}
              >
                <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Field Specification & Yield Estimate:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="FSAndYE"
                onChange={handleInputChange}
                value={user.FSAndYE}
              ><option>Select Option</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Farmer List:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="FarmerList"
                onChange={handleInputChange}
                value={user.FarmerList}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
               
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Sanctioned Farmer List:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="SanctionedFarmerList"
                onChange={handleInputChange}
                value={user.SanctionedFarmerList}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                <option value="NA">NA</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Overview Map:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="OverviewMap"
                onChange={handleInputChange}
                value={user.OverviewMap}
              >
                <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            ICS Manual & ICS related documents (Chapter 5 of NPOP):

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="ICSManual"
                onChange={handleInputChange}
                value={user.ICSManual}
              >
                <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Sampling Form (if applicable):

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="SamplingForm"
                onChange={handleInputChange}
                value={user.SamplingForm}
              >
                <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Supporting documents:

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="SupportingDocuments"
                onChange={handleInputChange}
                value={user.SupportingDocuments}
              >
               <option>Select Option</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                
              </Form.Select>
              <br />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Are correct versions of all documents used?

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="CorrectVersions"
                onChange={handleInputChange}
                value={user.CorrectVersions}
              ><option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Are all documents filled completely?

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="FilledCompletely"
                onChange={handleInputChange}
                value={user.FilledCompletely}
              ><option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <br />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={4}>
            Is language & grammar ok?

            </Form.Label>
            <Col sm={5}>
              <Form.Select
                name="LanguageGrammar"
                onChange={handleInputChange}
                value={user.LanguageGrammar}
              ><option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <br />
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

export default Checkpoints_05;