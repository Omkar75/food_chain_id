import React, { useState, useContext, useEffect } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { useLocation } from "react-router-dom";
// import {RedaFile} from "../ExcelData";
const rowheaderlist = [
  "No.of farmers",
  "Total area (Ha)",
  "Crop & Variety",
  "Survey No./Division, Range, Circle",
  "Start date of conversation period (dd.mm.yy)",
  "Start date of organic period (dd.mm.yy)",
  "Last date of chemicals (mm.yy)",
  "Field status(IC1/IC2/IC3/C)",
  "Product status (IC/C)",
];
const StatesObjectfortable = {
    No_of_farmers: "",
    Total_area_Ha: "",
    Crop_n_Variety: "",
    Survey_Number_Division_Range_Circle: "",
    Start_date_of_conversation_period_ddmmyy: "",
    Start_date_of_organic_period_ddmmyy: "",
    Last_date_of_chemicals_mmyy: "",
    Field_status: "",
    Product_status: "",
}
const FieldHistory = () => {
  const [Data, setData] = useState([]);
  const [file, setFile] = useState();
  const [edituserID, setedituserID] = useState(null);
  const [hideRowButton, sethideRowButton] = useState(true);
  const location = useLocation();
  const [datalist, setdatalist] = useState(location?.state?.user);
  const { auth } = useContext(AuthContext);

  const [details, setDetails] = useState({
    NameOfClient: "",
    TracenetRegNo: "",
    Season: "",
    Year: "",
    FCIDProjectNo: "",
    ApplicationStandard: "NOPO",
  });
  const [tableDetails, settableDetails] = useState(StatesObjectfortable);
  const [EditDetails, setEditDetails] = useState(StatesObjectfortable);

  const handleChangedetails = (event) => {
    let Newformdata = {
      ...details,
      [event.target.name]: event.target.value,
    };
    setDetails(Newformdata);
  };
  //Add User functions
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

  //Edit User Functions
  const handleEditClick = (event, user) => {
    event.preventDefault();
    setedituserID(user.No_of_farmers);
    const fromValues = { ...user };
    setEditDetails({ ...fromValues });
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

  //Delete user function
  const handleDeleteClick = async (event, user) => {
    const URL_DELETE_ROW = "https://foodchainid.herokuapp.com/foodchainid_form1d/deletefieldhistoryrow/"
    console.log(user);
    event.preventDefault();
    
    try{
      const response = await axios.delete(
        `${URL_DELETE_ROW}${datalist.form_conn}/${user._id}`,
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

  //Function to get data from excel sheet
  let datasheet;
  const RedaFile = () => {
    datasheet = [];
    var f = file;
    const reader = new FileReader();
    reader.onload = async (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
    //   console.log("Sheet Names >>> " + wb.SheetNames.length);

      wb.SheetNames.forEach(async (name) => {
        // console.log(name);
        const ws = wb.Sheets[name];
        /* Convert array of arrays */
        //  setdata(XLSX.utils.sheet_to_json(ws));
        // console.log(
        //   "Data>>>" + JSON.stringify(XLSX.utils.sheet_to_json(ws))
        // );
        // shows that excel data is read
        datasheet.push(XLSX.utils.sheet_to_json(ws));
        // console.log(datasheet);
        datasheet[0].map((v, index) => {
          let Newfromdata = {
            No_of_farmers: v["No. of farmers"],
            Total_area_Ha: v["Total area (Ha)"],
            Crop_n_Variety: v["Crop & Variety"],
            Survey_Number_Division_Range_Circle:
              v["Survey No. / Division, Range, Circle"],
            Start_date_of_conversation_period_ddmmyy:
              v["Start date of conversion period"],
            Start_date_of_organic_period_ddmmyy:
              v["Start date of organic period"],
            Last_date_of_chemicals_mmyy: v["Last date of use of chemicals"],
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
  const URL = "foodchainid_form1d/addcontactfh"
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
    const get_url = "foodchainid_form1d/getcontactfh";
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
      if(response.data.data){
        setDetails(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getcalltable = async () => {
    const get_url = "foodchainid_form1d/getfieldhistory";
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
      if(response.data.data){
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
  
  const URL_forTables = "foodchainid_form1d/addfieldhistory"
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
      <Card className="px-4 py-2 !rounded-lg font-semibold !text-gray-700">
        {JSON.stringify(details)}
        <Row>
          <Col>
            <Row>
              <Form.Label column sm={3}>
                Name of the client :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.NameOfClient}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "NameOfClient"
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column sm={3}>
                Tracenet Reg. No. :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.TracenetRegNo}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "TracenetRegNo"
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column sm={3}>
                Season :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.Season}
                  placeholder={"Kharif / Rabi / Zaid"}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "Season"
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column sm={3}>
                Year :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.Year}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "Year"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Form.Label column sm={3}>
                FCID Project NO. :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.FCIDProjectNo}
                  className="!text-base !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "FCIDProjectNo"
                />
              </Col>
            </Row>
            <Row>
              <Form.Label column sm={3}>
                Application Standard :
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={handleChangedetails}
                  value={details.ApplicationStandard}
                  className="!text-base !text-black !font-light !border-0 !rounded-none !border-black !border-b-2"
                  type="text"
                  name = "ApplicationStandard"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="flex justify-end space-x-2">
            <Button onClick={callToApi}>Submit for Approval</Button>
            <Button onClick={callToApi}>Delete</Button>
      </div>

      </Card>
      <div className="space-y-4">
        <div className="space-x-4 flex justify-end">
          <Button
            onClick={() => {
              sethideRowButton(false);
            }}
          >
            Add Row
          </Button>
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
              {rowheaderlist.map((r, i) => {
                return <th key={i}>{r}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr className={hideRowButton === true ? "hidden" : ""}>
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
                <Button
                  className="!text-sm"
                  onClick={() => {
                    sethideRowButton(true);
                  }}
                >
                  Cancel
                </Button>
              </td>
            </tr>

            {Data.map((val, index) => {
              return edituserID === val._id ? (
                <tr key={index}>
                  {Object.entries(EditDetails).map((ass, index) => {
                    return (
                      <td className="">
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
                  <td>{val?.Survey_Number_Division_Range_Circle}</td>
                  <td>{val?.Start_date_of_conversation_period_ddmmyy}</td>
                  <td>{val?.Start_date_of_organic_period_ddmmyy}</td>
                  <td>{val?.Last_date_of_chemicals_mmyy}</td>
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
        {(auth==="Operator")?<Button onClick={callToApi}>Approve</Button>:<Button onClick={callToApifottable}>Submit for Approval</Button>}        
      </div>
    </section>
  );
};

export default FieldHistory;
