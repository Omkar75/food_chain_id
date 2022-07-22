import React, { useState,useEffect } from "react";

export default function DescT4() {
  const [formdata,  setformdata] = useState({
    Name: "",
    sign: "",
    Date: "",
  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault()
     let Newformdata = {
 
       ...formdata,
       [event.target.name]: event.target.value,
     };
     setformdata(Newformdata);
   };
  useEffect(() => {}, [formdata]);

  return (
    <section className="section">
       {JSON.stringify(formdata)}
      <div className="container card card-body ">
        <p>
          Confirmation:
          <br></br>
          This is to confirm that the information that are filled in the
          questionnaire is complete and accurate to the best of my knowledge.
        </p>
        <br></br>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Name</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Enter Farmer’s name  "
            name="Name"
            onChange={inputEvent}
            value={formdata.Name}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Signature</label>

          <input
            className="w-50 my-2"
            type="file"
            placeholder="Signature  "
            name="sign"
            onChange={inputEvent}
            value={formdata.sign}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Date</label>

          <input
            className="w-50 my-2"
            type="date"
            placeholder="Date  "
            name="Date"
            onChange={inputEvent}
            value={formdata.Date}
            required="required"
          />
        </div>
      </div>
    </section>
  );
}
