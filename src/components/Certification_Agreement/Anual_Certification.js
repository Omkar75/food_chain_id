import React, { useState, useEffect } from "react";
import { Form, Table, Accordion } from "react-bootstrap";

export default function Anual_Certification() {
  const [formdata, setformdata] = useState({
   fees: "",
  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        <h4>3. Annual Audit and Certification Fee</h4>
        <br></br>
        <Table>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">Audit and Certification fee</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="Amount"
              name="fees"
              onChange={inputEvent}
              value={formdata.fees}
              required="required"
            />
          </div>
          <br></br>
          Note: Fees are calculated based on FCID Tariff Structure submitted to
          APEDA/NAB. Refer FCID-ORG-16
        </Table>

        <p>
          The Annual Fee comprises: audit visit(s), audit activities and
          certification report(s); <br></br>
          <strong> If the FCID’s certification decision is ‘positive’ the Annual Fee
          includes: </strong>
          <br></br>- a scope certificate; <br></br>- assessment and
          approval of labels;<br></br>- assessment and approval of product
          specifications;<br></br>- inclusion of CLIENT’s Project Name on the
          FCID’s website, naming it as a certificate holder.<br></br>
          <strong> The following items are not included in the Annual Fee:<br></br> </strong>
         
         a) Expenses for analyses (if necessary) <br></br> b) Auditors' travel expenses and
          subsistence costs (including, but not limited to lodgings) <br></br> c) FCID’s
          expenses incurred for sending certificates and samples by registered
          mail, which will be charged to The Client account based on FCID’s
          actual expenses<br></br> d)  Any additional services <br></br> e) Assessment and approval of
          labels <br></br> The fees quoted for the inspection and certification may be
          modified as a result of findings during the audit. This may be because
          of the need for more time that FCID need to spend on preparation or in
          the field. Should there be any such variation FCID will provide a
          modified Certification Agreement prior to issue of the certification
          report/certificate.
        </p>
      </div>
    </section>
  );
}
