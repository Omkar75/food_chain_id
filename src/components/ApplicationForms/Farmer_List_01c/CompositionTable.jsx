import React, { useState, useContext } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import axios from "../../../api/axios";
import AuthContext from "../../../context/AuthProvider";

// import {RedaFile} from "../ExcelData";
const rowheaderlist = [
  "Sr. No.",
  "Farmer Name",
  "Farmer Reg. No. (as on Tracent)",
  "Total Farm Area (Ha)",
  "Date of last use of forbidden products",
  "Date of Registration",
  "First Internal Inspection",
  "Second Internal Inspection",
  "Latitude",
  "Longitude",
  "Aadhar No.",
  "Contact",
];
const StatesDetails={
    No_of_farmers: "",
    Farmer_Name: "",
    Farmer_Reg_No_as_on_Tracent: "",
    Total_area_Ha: "",
    Date_of_last_use_of_forbidden_products: "",
    Date_of_Registration: "",
    First_Internal_Inspection_date: "",
    First_Internal_Inspection_Inspector_Name: "",
    First_Internal_Inspection_Result: "",
    Second_Internal_Inspection_date: "",
    Second_Internal_Inspection_Inspector_Name: "",
    Second_Internal_Inspection_Result: "",
    Latitude: "",
    Longitude: "",
    Aadhar_No: "",
    Contact:"",
  }
const CompositionTable = () => {
  const [Data, setData] = useState([]);
  const [file, setFile] = useState();
  const [edituserID, setedituserID] = useState(null);
  const [hideRowButton, sethideRowButton] = useState(true);
  const { auth } = useContext(AuthContext);

  const [tableDetails, settableDetails] = useState(StatesDetails);
  const [EditDetails, setEditDetails] = useState(StatesDetails);

  const handleEditClick = (event, user) => {
    event.preventDefault();
    console.log(user);
    setedituserID(user.No_of_farmers);
    const fromValues = { ...user };
    setEditDetails({ ...fromValues });
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
  const handleDeleteClick = (event, user) => {
    event.preventDefault();
    let arrToDeleteUser = [...Data];
    let DeletedUser = arrToDeleteUser.filter(
      (u) => u.No_of_farmers != user.No_of_farmers
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
            Crop_type_Main_or_Intercrop: v[`"Crop type ↵(Main/ ↵Intercrop)"`],
            Crop_Area_Ha: v["Crop Area (Ha)"],
            No_of_trees_plants: v['"No. of trees/ ↵plants"'],
            Sowing_time_mmyy: v["Sowing time (mm/yy)"],
            Harvest_time_mmyy: v["Harvest time (mm/yy)"],
            Actual_yield_of_last_year_MT: v["Actual yield of last year (MT)"],
            Quantity_sold_of_last_year_MT: v["Quantity sold of last year (MT)"],
            Estimated_yield_for_current_year_MT:
              v["Estimated yield for current year (MT)"],
            On_farm_processed_product: v["On farm processed product"],
            Loss_in_percent: v["Loss in %"],
            Field_status: v["Field status(IC1/IC2/IC3/C)"],
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
  const URL_forTables = "foodchainid_form1b/addfieldspec"
//   const callToApi = async () => {
//     let Newformdata = {
//       ...details,
//       userId: "62c403e18e1a710854e6e856",
//     };
//     console.log(JSON.stringify({Newformdata}))
//     try{
//       const response = await axios.post(
//         URL,
//         JSON.stringify(Newformdata),
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       )
//       console.log("------"+JSON.stringify(response?.data));
//     }catch(err){
//       console.log(err)
//     }
//   }
  const callToApifottable = async () => {
    let Newformdata = {
      userId: "62c403e18e1a710854e6e856",
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
          className="!border-teal-700 !text-gray-800"
          bordered
          hover
          responsive
        >
          <thead>
          <tr>
          <th rowSpan={2}>Sr. No. </th>
            <th rowSpan={2}>Farmer Name</th>
            <th rowSpan={2}>{"Farmer Reg. No. (as on Tracent)"}</th>
            <th rowSpan={2}>{"Total Farm Area (Ha)"}</th>
            <th rowSpan={2}>Date of last use of forbidden products</th>
            <th rowSpan={2}>Date of Registration</th>
            <th colSpan={3}>First Internal Inspection</th>
            <th colSpan={3}>Second Internal Inspection</th>
            <th rowSpan={2}>Latitude</th>
            <th rowSpan={2}>Longitude</th>
            <th rowSpan={2}>Aadhar No.</th>
            <th rowSpan={2}>Contact</th>
            <th rowSpan={2} colSpan={2}>
              Actions
            </th>
            </tr>
            <tr>
              <th>Date</th>
              <th>Ipector Name</th>
              <th>Result</th>
              <th>Date</th>
              <th>Ipector Name</th>
              <th>Result</th>
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
              return edituserID === val.No_of_farmers ? (
                <tr>
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
                <tr>
                  <td>{index+1}</td>
                  <td>{val?.Farmer_Name}</td>
                  <td>{val?.Farmer_Reg_No_as_on_Tracent}</td>
                  <td>{val?.Total_area_Ha}</td>
                  <td>{val?.Date_of_last_use_of_forbidden_products}</td>
                  <td>{val?.Date_of_Registration}</td>
                  <td>{val?.First_Internal_Inspection_date}</td>
                  <td>{val?.First_Internal_Inspection_Inspector_Name}</td>
                  <td>{val?.First_Internal_Inspection_Result}</td>
                  <td>{val?.Second_Internal_Inspection_date}</td>
                  <td>{val?.Second_Internal_Inspection_Inspector_Name}</td>
                  <td>{val?.Second_Internal_Inspection_Result}</td>
                  <td>{val?.Latitude}</td>
                  <td>{val?.Longitude}</td>
                  <td>{val?.Aadhar_No}</td>
                  <td>{val?.Contact}</td>
                  <td>
                    <Button className="!pointer-events-autotext-sm" onClick={(event) => handleEditClick(event, val)}>
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button className="!text-sm"
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
            <Button onClick={callToApifottable}>Submit for Approval</Button>
      </div>
    </section>
  );
};

export default CompositionTable;
