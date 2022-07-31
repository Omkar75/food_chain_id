import React, { useState, useContext, useEffect } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthProvider";
import { useLocation } from "react-router-dom";

// import {RedaFile} from "../ExcelData";
const rowheaderlist = [
  "No.of farmers",
  "Total area (Ha)",
  "Crop & Variety",
  "Crop type (Main/Intercrop)",
  "Crop Area (Ha)",
  "No. of trees/plants",
  "Sowing time (mm/yy)",
  "Harvest time (mm/yy)",
  "Actual yield of last year (MT)",
  "Quantity sold of last year (MT)",
  "Estimated yield for current year (MT)",
  "On farm processed product",
  "Loss in %",
  "Field status(IC1/IC2/IC3/C)",
  "Product status (IC/C)",
];
const StateDetails={
  No_of_farmers: "",
  Total_area_Ha: "",
  Crop_n_Variety: "",
  Crop_type_Main_or_Intercrop: "",
  Crop_Area_Ha: "",
  No_of_trees_plants: "",
  Sowing_time_mmyy: "",
  Harvest_time_mmyy: "",
  Actual_yield_of_last_year_MT: "",
  Quantity_sold_of_last_year_MT: "",
  Estimated_yield_for_current_year_MT: "",
  On_farm_processed_product: "",
  Loss_in_percent: "",
  Field_status: "",
  Product_status: "",
}
const data = [];
const FieldSpecsnYieldEstimate = () => {
  const location = useLocation();
  const [Data, setData] = useState([]);
  const [file, setFile] = useState();
  const [datalist, setdatalist] = useState(location?.state?.user);
  const [edituserID, setedituserID] = useState(null);
  const [hideRowButton, sethideRowButton] = useState(true);
  const { auth } = useContext(AuthContext);
  const [details, setDetails] = useState({
    NameOfClient: "",
    TracenetRegNo: "",
    Season: "",
    Year: "",
    FCIDProjectNo: "",
    ApplicationStandard: "NOPO",
  });
  const [tableDetails, settableDetails] = useState(StateDetails);
  const [EditDetails, setEditDetails] = useState(StateDetails);
  const handleEditClick = (event, user) => {
    event.preventDefault();
    console.log(user);
    setedituserID(user.No_of_farmers);
    const fromValues = { ...user };
    setEditDetails({ ...fromValues });
  };
  const handleChangedetails = (event) => {
    let Newformdata = {
      ...details,
      [event.target.name]: event.target.value,
    };
    setDetails(Newformdata);
  };
  const handleChangeNewUser = (event, datasheet) => {
    let Newformdata = {
      ...tableDetails,
      [event.target.name]: event.target.value,
    };
    settableDetails(Newformdata);
  };
  const handleAddNewUser = (event) => {
    event.preventDefault();
    setData((oldform) => [...oldform, tableDetails]);
    let Newform = { ...tableDetails };
    Object.keys(Newform).forEach((key) => {
      Newform[key] = "";
    });
    settableDetails({ ...Newform });
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...EditDetails };
    newFormData[fieldName] = fieldValue;
    setEditDetails({ ...newFormData });
  };
  const handleEditFormSubmit = (event, user) => {
    event.preventDefault();
    const index = Data.findIndex((user) => user.No_of_farmers === edituserID);
    const newStatevalue = [...Data];
    newStatevalue[index] = { ...EditDetails };
    setData([...newStatevalue]);
    setedituserID(null);
  };
  const handleCancelClick = () => {
    setedituserID(null);
  };
  const handleDeleteClick = async (event, user) => {
    const URL_DELETE_ROW = "https://foodchainid.herokuapp.com/foodchainid_form1b/deletefieldSpecRow/"
    console.log(user);
    event.preventDefault();
    
    try{
      const response = await axios.delete(
        `https://foodchainid.herokuapp.com/foodchainid_form1b/deletefieldSpecRow/${datalist.form_conn}/${user._id}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      console.log("------"+JSON.stringify(response?.data));
    }catch(err){
      console.log(err)
    }
    let arrToDeleteUser = [...Data];
    let DeletedUser = arrToDeleteUser.filter(
      (u) => u._id != user._id
    );
    setData([...DeletedUser]);
  };
  let datasheet;
  const RedaFile = () => {
    datasheet = [];
    var f = file;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      console.log("Sheet Names >>> " + wb.SheetNames.length);

      wb.SheetNames.forEach(async (name) => {
        console.log(name);
        const ws = wb.Sheets[name];
        /* Convert array of arrays */
        //  setdata(XLSX.utils.sheet_to_json(ws));
        await console.log(
          "Data>>>" + JSON.stringify(XLSX.utils.sheet_to_json(ws))
        );
        // shows that excel data is read
        datasheet.push(XLSX.utils.sheet_to_json(ws));
        console.log(datasheet);
        datasheet[0].map((v, index) => {
          console.log(v);
          let Newfromdata = {
            No_of_farmers: v["No. of farmers"],
            Total_area_Ha: v["Total area (Ha)"],
            Crop_n_Variety: v["Crop & Variety"],
            Crop_type_Main_or_Intercrop: v["Crop type"],
            Crop_Area_Ha: v["Crop Area (Ha)"],
            No_of_trees_plants: v["No. of trees"],
            Sowing_time_mmyy: v["Sowing time (mm/yy)"],
            Harvest_time_mmyy: v["Harvest time (mm/yy)"],
            Actual_yield_of_last_year_MT: v["Actual yield of last year (MT)"],
            Quantity_sold_of_last_year_MT: v["Quantity sold of last year (MT)"],
            Estimated_yield_for_current_year_MT:
              v["Estimated yield for current year (MT)"],
            On_farm_processed_product: v["On farm processed product"],
            Loss_in_percent: v["Loss in %"],
            Field_status: v["Field status"],
            Product_status: v["Product status (IC/C)"],
          };
          let temparryforempty = { ...tableDetails };
          settableDetails({ ...Newfromdata });
          setData((oldform) => [...oldform, Newfromdata]);
          settableDetails({ ...temparryforempty });
        });
      });
    };
    reader.readAsBinaryString(f);
  };
  const URL = "foodchainid_form1b/addcontactfs"

  const callToApi = async () => {
    let Newformdata = {
      ...details,
      form_conn: datalist.form_conn,
    };
    console.log(JSON.stringify({Newformdata}))
    try{
      const response = await axios.post(
        URL,
        JSON.stringify(Newformdata),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      console.log("------"+JSON.stringify(response?.data));
    }catch(err){
      console.log(err)
    }
  }
  const getcall = async () => {
    const get_url = "foodchainid_form1b/getcontactfs";
    //console.log(JSON.stringify(Newformdata));
    try {
      const response = await axios.post(
        get_url,
        JSON.stringify({
          form_conn: datalist.form_conn,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("---response---" + JSON.stringify(response?.data?.message));  
      if(response.data.data !== undefined){
        console.log("data------------------"+JSON.stringify(response.data.data))
        setDetails(response.data.data)
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getcalltable = async () => {
    const get_url = "foodchainid_form1b/getfieldspec";
    //console.log(JSON.stringify(Newformdata));
    try {
      const response = await axios.post(
        get_url,
        JSON.stringify({
          form_conn: datalist.form_conn,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("---responsetable---" + JSON.stringify(response?.data?.data));  
      if(response.data.data !== undefined){
        console.log("omkar"+JSON.stringify(response.data.data))
        setData(response.data.data)
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcall();
    getcalltable();
  }, [])
  const URL_forTables = "foodchainid_form1b/addfieldspec"
  const callToApifottable = async () => {
    let Newformdata = {
      form_conn: datalist.form_conn,
      data: [...Data],
    };
    console.log(JSON.stringify({Newformdata}))
    try{
      const response = await axios.post(
        URL_forTables,
        JSON.stringify(Newformdata),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      console.log("------"+JSON.stringify(response?.data));
    }catch(err){
      console.log(err)
    }
  }
  return (
    <section className="!w-full !h-full overflow-x-hidden space-y-8  sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      {JSON.stringify(datalist)}
      <Card className="px-4 py-2 !rounded-lg text-gray-700">
        {JSON.stringify(details)}
        <Row>
          <Col>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                Name of the client :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details?.NameOfClient}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "NameOfClient"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                Tracenet Reg. No. :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details?.TracenetRegNo}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "TracenetRegNo"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                Season :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details?.Season}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "Season"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                Year :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details.Year}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "Year"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                FCID Project NO. :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details.FCIDProjectNo}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "FCIDProjectNo"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
            <Row className="!items-center">
              <Form.Label column sm={3}>
                Application Standard :
              </Form.Label>
              <Col>
                <Form.Control
                  value={details.ApplicationStandard}
                  className="!text-base !text-black !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "ApplicationStandard"
                  onChange={handleChangedetails}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="flex justify-end">
        {(auth==="Operator")?<Button>Approve</Button>:<Button onClick={callToApi}>Submit for Approval</Button>}
        
      </div>
      </Card>
      <div className="space-y-4">
        <div className="space-x-4 flex justify-end">
          <Button onClick={()=>{sethideRowButton(false)}}>Add Row</Button>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <Button onClick={RedaFile}>Click to Add from Excel Sheet</Button>
        </div>
        <Table
          className="!border-teal-700 !text-gray-800 !h-1/2"
          bordered
          hover
          responsive
          
        >
          <thead>
            <tr>
              <th colSpan={8} className="text-center">
                Field specification
              </th>
              <th colSpan={5} className="text-center">
                Yield estimate
              </th>
              <th colSpan={2} className="text-center">
                Status
              </th>
              <th colSpan={2} rowSpan={2}>
                Actions
              </th>
            </tr>
            <tr>
              {rowheaderlist.map((r, i) => {
                return <th key={i}>{r}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr className={(hideRowButton === true) ? "hidden" : ""}>
              {Object.entries(tableDetails).map((ass, index) => {
                return (
                  <td className="" key={index}>
                    <input
                      className="!text-sm !font-light p-1"
                      type="text"
                      name={ass[0]}
                      value={tableDetails[ass[0]]}
                      onChange={handleChangeNewUser}
                    />
                  </td>
                );
              })}
              <td>
                <Button className="!text-sm" onClick={handleAddNewUser}>
                  Add
                </Button>
              </td>
              <td>
                <Button className="!text-sm" onClick={()=>{sethideRowButton(true)}}>
                  Cancel
                </Button>
              </td>
            </tr>

            {Data.map((val, index) => {
              return edituserID === val._id ? (
                <tr key={index}>
                  {Object.entries(EditDetails).map((ass, index) => {
                    return (
                      <td className="" key={index}>
                        <input
                          className="!text-sm !font-light p-1"
                          type="text"
                          name={ass[0]}
                          value={EditDetails[ass[0]]}
                          placeholder={ass[0]}
                          onChange={handleEditFormChange}
                        />
                      </td>
                    );
                  })}
                  <td>
                    <Button
                      onClick={(event) => {
                        handleEditFormSubmit(event, val);
                      }}
                    >
                      Save
                    </Button>
                  </td>
                  <td>
                    <Button onClick={handleCancelClick}>Cancel</Button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{val?.Total_area_Ha}</td>
                  <td>{val?.Crop_n_Variety}</td>
                  <td>{val?.Crop_type_Main_or_Intercrop}</td>
                  <td>{val?.Crop_Area_Ha}</td>
                  <td>{val?.No_of_trees_plants}</td>
                  <td>{val?.Sowing_time_mmyy}</td>
                  <td>{val?.Harvest_time_mmyy}</td>
                  <td>{val?.Actual_yield_of_last_year_MT}</td>
                  <td>{val?.Quantity_sold_of_last_year_MT}</td>
                  <td>{val?.Estimated_yield_for_current_year_MT}</td>
                  <td>{val?.On_farm_processed_product}</td>
                  <td>{val?.Loss_in_percent}</td>
                  <td>{val?.Field_status}</td>
                  <td>{val?.Product_status}</td>
                  <td>
                    <Button onClick={(event) => handleEditClick(event, val)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      onClick={(event) => {
                        handleDeleteClick(event, val);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Row className="items-center text-center">
        <Col>
          <div>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 !text-sm text-muted">
                  Submitted by:
                </Card.Subtitle>
                <Card.Title className="!text-base">
                  {"Name & Signature of Client"}
                </Card.Title>
                <input type="date" />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 !text-sm text-muted">
                  Verified by:
                </Card.Subtitle>
                <Card.Title className="!text-base">
                  {"Name & Signature of Inspector"}
                </Card.Title>
                <input type="date" />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col>
          <div>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 !text-sm text-muted">
                  Approved by:
                </Card.Subtitle>
                <Card.Title className="!text-base">
                  {"Name & Signature of Technical Reviewer"}
                </Card.Title>
                <input type="date" />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <div className="flex justify-end">
        {(auth==="Operator")?<Button >Approve</Button>:<Button onClick={callToApifottable}>Submit for Approval</Button>}
        
      </div>
    </section>
  );
};

export default FieldSpecsnYieldEstimate;
