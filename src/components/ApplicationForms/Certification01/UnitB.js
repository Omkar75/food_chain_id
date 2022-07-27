import React, { useState, useEffect } from "react";
import { Form, Table } from "react-bootstrap";

export default function UnitB() {
  const [formdata, setformdata] = useState({
    Name_Add: "",
    Project: "",
    Self_C: "",
    Total_Area: "",
    Area_Under_C: "",
    Total_Farmer: "",
    Farmer_More_Area: "",
    Total_Farmer_Area: "",
    K_main: "",
    K_Intercrop: "",
    R_main: "",
    R_intercrop: "",
    Z_main: "",
    Z_Intercrop: "",
    P_main: "",
    P_intercrop: "",
    Seeds: "",

    Nutrient: "",
    Pest: "",

    Location_Farmer: "",

    Crop_History: "",
  });
  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };

  useEffect(() => {}, [formdata]);

  const SendToApi = () => {
    if (
      formdata.Total_Area === "" ||
      formdata.Area_Under_C === "" ||
      formdata.Name_Add === "" ||
      formdata.Project === "" ||
      formdata.Self_C === "" ||
      formdata.Total_Farmer === "" ||
      formdata.Farmer_More_Area === "" ||
      formdata.Total_Farmer_Area === "" ||
      formdata.Crop_History === "" ||
      formdata.Seeds === "" ||
      formdata.Pest === "" ||
      formdata.Nutrient === "" ||
      formdata.K_Intercrop === "" ||
      formdata.K_main === "" ||
      formdata.P_intercrop === "" ||
      formdata.P_main === "" ||
      formdata.Z_Intercrop === "" ||
      formdata.Z_main === "" ||
      formdata.R_main === "" ||
      formdata.R_intercrop === "" ||
      formdata.Location_Farmer === ""
    ) {
      alert("Enter All details");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1/addgrowergroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formdata.Name,
            Total_Area: formdata.Total_Area,
            Area_Under_C: formdata.Area_Under_C,
            Name_Add: formdata.Name_Add,
            Project: formdata.Project,
            Self_C: formdata.Self_C,

            Area_Under_C: formdata.Area_Under_C,
            Total_Farmer: formdata.Total_Farmer,
            Farmer_More_Area: formdata.Farmer_More_Area,
            Total_Farmer_Area: formdata.Total_Farmer_Area,

            Seeds: formdata.Seeds,
            Pest: formdata.Pest,
            Nutrient: formdata.Nutrient,

            K_main: formdata.K_main,
            K_Intercrop: formdata.K_Intercrop,
            R_main: formdata.R_main,
            R_intercrop: formdata.R_intercrop,
            Z_main: formdata.Z_main,
            Z_Intercrop: formdata.Z_Intercrop,
            P_main: formdata.P_main,
            P_intercrop: formdata.P_intercrop,

            Location_Farmer: formdata.Location_Farmer,

            Crop_History: formdata.Crop_History,
            userId: "62c403e18e1a710854e6e856",
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
    <section className="section">
      {JSON.stringify(formdata)}
      <div className="container card card-body ">
        <h5 className="center">Farming unit information page 2</h5>

        <div className="card card-body ">
          <div className="table table-striped table-bordered table-sm">
            <div className="card card-body">
              <h6>B. Grower Group </h6>
              <hr />
              <div className="table table-striped table-bordered table-sm">
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Grower Group Name & address
                      </th>
                      <th>
                        <input
                          name="Name_Add"
                          onChange={inputEvent}
                          value={formdata.Name_Add}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Contract
                      </th>
                      <th>
                        <input
                          name="Self_C"
                          onChange={inputEvent}
                          value={formdata.Self_C}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Project management
                      </th>
                      <th>
                        <input
                          name="Project"
                          onChange={inputEvent}
                          value={formdata.Project}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Grower Group Managed by
                      </th>
                      <th>
                        <input
                          name="name"
                          onChange={inputEvent}
                          value={formdata.Name}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Total Area (Ha)
                      </th>
                      <th>
                        <input
                          name="Total_Area"
                          onChange={inputEvent}
                          value={formdata.Total_Area}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Area (Ha) under Certification
                      </th>
                      <th>
                        <input
                          name="Area_Under_C"
                          onChange={inputEvent}
                          value={formdata.Area_Under_C}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Total number of farmers:
                      </th>
                      <th>
                        <input
                          name="Total_Farmer"
                          onChange={inputEvent}
                          value={formdata.Total_Farmer}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        No. of farmers having more than 4 Ha area
                      </th>
                      <th>
                        <input
                          name="Farmer_More_Area"
                          onChange={inputEvent}
                          value={formdata.Farmer_More_Area}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Total area of farmers having more than 4 Ha area
                      </th>
                      <th>
                        <input
                          name="Total_Farmer_Area"
                          onChange={inputEvent}
                          value={formdata.Total_Farmer_Area}
                          type="text"
                          placeholder=""
                        />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Details of Inputs used
                      </th>
                      <th className="col-md-4" name="sno">
                        Seeds/Seedlings
                      </th>
                      <th className="col-md-4" name="sno">
                        Nutrient Management
                      </th>
                      <th className="col-md-4" name="sno">
                        Pest/Disease management
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input
                          name="Seeds"
                          onChange={inputEvent}
                          value={formdata.Seeds}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="Nutrient"
                          onChange={inputEvent}
                          value={formdata.Nutrient}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="Pest"
                          onChange={inputEvent}
                          value={formdata.Pest}
                          type="text"
                          placeholder=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="card card-body row scrollX col scrollY">
              <hr />
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      <label>Crops Grown</label>
                    </th>

                    <th className="col-md-2" name="appT">
                      <label>Kharif</label>
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>
                    <th className="col-md-2" name="appT">
                      Rabi
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>

                    <th className="col-md-2" name="appT">
                      Zaid
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>

                    <th className="col-md-2" name="appT">
                      Perennial
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr ng-repeat="name in getdrugnameNewArray">
                    <td></td>

                    <td>
                      <td>
                        <th>
                          <input
                            name="K_main"
                            onChange={inputEvent}
                            value={formdata.K_main}
                            type="text"
                            placeholder="Time"
                          />
                        </th>
                      </td>
                      <td>
                        <th>
                          <input
                            name="K_Intercrop"
                            onChange={inputEvent}
                            value={formdata.K_Intercrop}
                            type="text"
                            placeholder=" Rate"
                          />
                        </th>
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="R_main"
                          onChange={inputEvent}
                          value={formdata.R_main}
                          type="text"
                          placeholder="Main"
                        />
                      </td>
                      <td>
                        <input
                          name="R_intercrop"
                          onChange={inputEvent}
                          value={formdata.R_intercrop}
                          type="text"
                          placeholder="Intercrop"
                        />
                      </td>
                    </td>
                    <td>
                      <td>
                        <input
                          name="Z_main"
                          onChange={inputEvent}
                          value={formdata.Z_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="Z_Intercrop"
                          onChange={inputEvent}
                          value={formdata.Z_Intercrop}
                          type="text"
                          placeholder=" "
                        />
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="P_main"
                          onChange={inputEvent}
                          value={formdata.P_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="P_intercrop"
                          onChange={inputEvent}
                          value={formdata.P_intercrop}
                          type="text"
                          placeholder=" "
                        />
                      </td>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-md-4" name="sno">
                    Location of farmers (Mention districts or town name)
                  </th>
                  <th>
                    <input
                      name="Location_Farmer"
                      onChange={inputEvent}
                      value={formdata.Location_Farmer}
                      type="text"
                      placeholder=""
                    />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Crop history (Last two seasons):
                  </th>
                  <th>
                    <input
                      name="Crop_History"
                      onChange={inputEvent}
                      value={formdata.Crop_History}
                      type="text"
                      placeholder=""
                    />
                  </th>
                </tr>
              </thead>
            </Table>
            <button
              onClick={() => {
                SendToApi();
              }}
            >
              Submit
            </button>
            <label>
              (Note: If total area of farmers having more than 4 Ha area is 50%
              or more than total group area, then group cannot be accepted for
              certification).
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
