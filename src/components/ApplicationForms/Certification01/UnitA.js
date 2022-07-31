import React from "react";
import { Form, Table } from "react-bootstrap";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function UnitA() {
  const location = useLocation();
  const [datalist, setdatalist] = useState(location?.state?.user);
  const [formdata, setformdata] = useState({
    Name: "",
    Area: "",
    Area_Under: "",
    Survey: "",
    GPS: "",
    Seed: "",
    Pest: "",
    Crops: "",
    K_main: "",
    K_Intercrop: "",
    R_main: "",
    R_intercrop: "",
    Z_main: "",
    Z_Intercrop: "",
    P_main: "",
    P_intercrop: "",
    Details: "",
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
      formdata.Name === "" ||
      formdata.Area === "" ||
      formdata.Area_Under === "" ||
      formdata.Crop_History === "" ||
      formdata.Crops === "" ||
      formdata.Details === "" ||
      formdata.GPS === "" ||
      formdata.K_Intercrop === "" ||
      formdata.K_main === "" ||
      formdata.P_intercrop === "" ||
      formdata.P_main === "" ||
      formdata.Pest === "" ||
      formdata.Z_Intercrop === "" ||
      formdata.Z_main === "" ||
      formdata.R_main === "" ||
      formdata.R_intercrop === "" ||
      formdata.Survey === ""
    ) {
      alert("Enter All details");
    } else {
      fetch(
        "https://foodchainid.herokuapp.com/foodchainid_form1/addindvfarmunit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formdata.Name,
            Area: formdata.Area,
            Area_Under: formdata.Area_Under,
            Survey: formdata.Survey,
            GPS: formdata.GPS,

            Seed: formdata.Seed,
            Pest: formdata.Pest,
            Crops: formdata.Crops,

            K_main: formdata.K_main,
            K_Intercrop: formdata.K_Intercrop,
            R_main: formdata.R_main,
            R_intercrop: formdata.R_intercrop,
            Z_main: formdata.Z_main,
            Z_Intercrop: formdata.Z_Intercrop,
            P_main: formdata.P_main,
            P_intercrop: formdata.P_intercrop,
            Details: formdata.Details,
            Crop_History: formdata.Crop_History,
            userId: datalist.form_conn,
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
        <h4 className="center">Farming unit information</h4>

        <div className="card card-body row col">
          <h6>A. Individual farming unit </h6>
          <hr />
          <div className="table table-striped table-bordered table-sm">
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-md-4" >
                    Name and address of the farm
                  </th>
                  <th>
                    <input
                      name="Name"
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
                      name="Area"
                      onChange={inputEvent}
                      value={formdata.Area}
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
                      name="Area_Under"
                      onChange={inputEvent}
                      value={formdata.Area_Under}
                      type="text"
                      placeholder=""
                    />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Survey No.
                  </th>
                  <th>
                    <input
                      name="Survey"
                      onChange={inputEvent}
                      value={formdata.Survey}
                      type="text"
                      placeholder=""
                    />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    GPS co-ordinates
                  </th>
                  <th>
                    <input
                      name="GPS"
                      onChange={inputEvent}
                      value={formdata.GPS}
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
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input
                      name="Seed"
                      onChange={inputEvent}
                      value={formdata.Seed}
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
                  <td>
                    <input
                      name="Crops"
                      onChange={inputEvent}
                      value={formdata.Crops}
                      type="text"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="card card-body row scrollX col scrollY">
              <h6> </h6>
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
                        <input
                          name="K_main"
                          onChange={inputEvent}
                          value={formdata.K_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="K_Intercrop"
                          onChange={inputEvent}
                          value={formdata.K_Intercrop}
                          type="text"
                          placeholder=""
                        />
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="R_main"
                          onChange={inputEvent}
                          value={formdata.R_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="R_intercrop"
                          onChange={inputEvent}
                          value={formdata.R_intercrop}
                          type="text"
                          placeholder=" "
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
                          placeholder=" Rate"
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
                          placeholder=" Rate"
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
                    Are you doing any processing
                  </th>
                  <th>
                    <input
                      name="Details"
                      onChange={inputEvent}
                      value={formdata.Details}
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
