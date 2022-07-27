import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Input from "react-bootstrap/InputGroup";

const Certification_Decision = () => {
  const [formdata, setformdata] = useState({
    ProjectName: "",
    FCIDProjectNo: "",
    TracenetRegNo: "",
    Standards: "",
    DateOfCertification: "",
    CertAuditReportNo: "",
    DateOfAudit: "",
    NameOfAuditor: "",
    Comments: "",
    CertificationDecision: "",
    NumberOfMembers: [{name:"", signature:""},{name:"",signature:""}],
  });
  const handleChangeData = (event, i) => {
    console.log(i)
    if(i >= 0){
      console.log("hello")
      let temparr = [...formdata.NumberOfMembers]
      console.log(temparr)
      temparr[i][event.target.name] = event.target.value
      let Newformdata = {
        ...formdata,
        NumberOfMembers: [...temparr]
      }
      setformdata(Newformdata)
    }else{      
      let Newformdata = {
        ...formdata,
        [event.target.name]: event.target.value,
      };
      setformdata(Newformdata);
    }
   };


  useEffect(() => {}, [formdata]);

  return (
    <div className="overflow-auto ">
      {JSON.stringify(formdata)}
      <Form className="space-y-4 sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
        <Form.Group className="border-2 border-black p-1">
          <Form.Group
            as={Row}
            className="mb-2 items-center"
            controlId="ProjectName"
          >
            <Form.Label column sm={2}>
              Project Name
            </Form.Label>
            <Col>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="ProjectName"
                onChange={handleChangeData}
                placeholder="Project Name"
                value={formdata.ProjectName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="FCIDProjectNo">
            <Form.Label column sm={2}>
              FCID Project No.
            </Form.Label>
            <Col>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="FCIDProjectNo"
                onChange={handleChangeData}
                placeholder="FCID Project Number"
                value={formdata.FCIDProjectNo}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="TracenetRegNo">
            <Form.Label column sm={2}>
              Tracenet Reg. No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="TracenetRegNo"
                onChange={handleChangeData}
                placeholder="Tracenet Reg. No."
                value={formdata.TracenetRegNo}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="Standards">
            <Form.Label column sm={2}>
              Standards
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="Standards"
                onChange={handleChangeData}
                placeholder="Standards"
                value={formdata.Standards}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="DateOfCertification">
            <Form.Label column sm={2}>
              Date of Certification
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="DateOfCertification"
                onChange={handleChangeData}
                placeholder="Date of Certification"
                value={formdata.DateOfCertification}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="CertAuditReportNo">
            <Form.Label column sm={2}>
              Certificate Audit Report No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="CertAuditReportNo"
                onChange={handleChangeData}
                placeholder="Certificate Audit Report Number"
                value={formdata.CertAuditReportNo}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="DateOfAudit">
            <Form.Label column sm={2}>
              Date of Audit
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="DateOfAudit"
                onChange={handleChangeData}
                placeholder="Date Of Audit"
                value={formdata.DateOfAudit}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-2" controlId="NameOfAuditor">
            <Form.Label column sm={2}>
              Name of Auditor
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                className="!text-base !font-light"
                type="text"
                name="NameOfAuditor"
                onChange={handleChangeData}
                placeholder="Name Of Auditor"
                value={formdata.NameOfAuditor}
              />
            </Col>
          </Form.Group>
        </Form.Group>
        <Form.Group className="border-2 border-black p-1">
          <Form.Group className="" controlId="Comments">
            <Form.Label column sm={1}>
              Comments
            </Form.Label>
            <Form.Text id="CommentHelpBlock" className="!text-medium" muted>
              (Audit report review, Non conformity assessment, sample report
              analysis review, addition information if any and Decision by
              certification committee)
            </Form.Text>
            <Form.Control
              as="textarea"
              rows={3}
              aria-describedby="CommentHelpBlock"
              name="Comments"
              onChange={handleChangeData}
              value={formdata.Comments}
            />
          </Form.Group>
        </Form.Group>
        <Form.Group className="border-2 border-black p-1">
          <Row>
          <Form.Label column sm={3}>
          Certification Decision
            </Form.Label>
            <Col>
              <Form.Select
                aria-label="Default select example"
                value={formdata.CertificationDecision}
                onChange={handleChangeData}
                name="CertificationDecision"
              >
                <option>Open this select menu</option>
                <option value="Approved">Approved</option>
                <option value="Withheld">Withheld</option>
                <option value="Denied">Denied</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="border-2 border-black p-1">
          <Row>
          <Form.Label column >
          Members
            </Form.Label>
          </Row>
          {formdata.NumberOfMembers.map((elementsInArray, index) => {
            return (
              <Form.Group key={index}>
              <Row>
              
                <Form.Label column sm={2}>
              {index+1}
            </Form.Label>
          
                <Col>
                <Form.Control
                className="!text-base !font-light"
                type="text"
                name="name"
                onChange={event=>handleChangeData(event, index)}
                placeholder="Name"
                value={formdata.NumberOfMembers[index].name}
              />
                </Col>
                <Col>
                <Form.Control
                className="!text-base !font-light"
                type="text"
                name="signature"
                onChange={handleChangeData}
                placeholder="Signature"
                value={formdata.NumberOfMembers[index].signature}
              />
                </Col>
              </Row>
            <br/>
              </Form.Group>
            );
          })}
        </Form.Group>
      </Form>
    </div>
  );
};

export default Certification_Decision;