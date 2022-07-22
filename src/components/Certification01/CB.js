import React, { useState, useEffect} from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function CB() {
  const [formdata, setformdata] = useState({
    Assessment: "",

    Project_Number: "",

    Received_Date: "",

    Confirmation: "",

    FCID: "",

    Status: "",

    Name:"",
    Sign: "",

    date: "",
  });

  const inputEvent = (event, i) => {
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
    <div className="container card card-body  ">
       {JSON.stringify(formdata)}
      <h6 className="center">To be completed by CB:</h6>

      <div className="table table-striped table-bordered table-sm">
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="col-md-4" name="sno">
                Assessment of application
              </th>
              <th>
                <input
                  name="Assessment"
                  onChange={inputEvent}
                  value={formdata.Assessment}
                  type="text"
                  placeholder=""
                />
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Certification Application Form Review No / Project Number:
              </th>
              <th>
                <input
                  name="Project_Number"
                  onChange={inputEvent}
                  value={formdata.Project_Number}
                  type="text"
                  placeholder=""
                />
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Application received date:
              </th>
              <th>
                <input
                  name="Received_Date"
                  onChange={inputEvent}
                  value={formdata.Received_Date}
                  type="text"
                  placeholder=""
                />
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Is the information in application form sufficient to make an
                offer (e.g. filled in completely, signature present and signed
                by the company requesting certification)?
              </th>
              <th>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}></Form.Label>
                  <Col sm={5}>
                    <Form.Select
                      name=" Confirmation"
                      onChange={inputEvent}
                      value={formdata.Confirmation}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    <Form.Control placeholder="If Other, Specify " />
                  </Col>
                </Form.Group>
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Is it possible for FCID to inspect and certify the project (e.g.
                sufficient inspection and expert inspector capacity, product
                within scope)?
              </th>
              <th>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}></Form.Label>
                  <Col sm={5}>
                    <Form.Select
                      name=" FCID"
                      onChange={inputEvent}
                      value={formdata.FCID}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                    <Form.Control placeholder="If Other, Specify " />
                  </Col>
                </Form.Group>
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Approval:
              </th>
              <th>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}></Form.Label>
                  <Col sm={5}>
                    <Form.Select
                      name=" Status"
                      onChange={inputEvent}
                      value={formdata.Status}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Col>
                </Form.Group>
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Name application reviewer:
              </th>
              <th className="col-md-4" >
                <input
                  name="Name"
                  onChange={inputEvent}
                  value={formdata.Name}
                  type="text"
                  placeholder=""
                />
              </th>
              <th className="col-md-4" name="sno">
                Signature application reviewer:
              </th>
              <th>
                <input
                  name="Sign"
                  onChange={inputEvent}
                  value={formdata.Sign}
                  type="file"
                  placeholder=""
                />
              </th>
            </tr>
            <tr>
              <th className="col-md-4" name="sno">
                Date:
              </th>
              <th>
                <input
                  name="date
                  "
                  onChange={inputEvent}
                  value={formdata.date
                  }
                  type="date"
                  placeholder=""
                />
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}
