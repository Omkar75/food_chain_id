import React, { useState, useContext, useEffect } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import axios from "../../../api/axios";
import AuthContext from "../../../context/AuthProvider";
const Tableheaders = [
  { name: "Sr. No." },
  { name: "Sanctioned Farmer Name" },
  { name: "Farmer Reg. No.(as on Tracenet)" },
  { name: "Area (Ha)" },
  { name: "Status (C1, C2, C3 or ORG)" },
  { name: "Duration (if relevant)" },
  { name: "Reason" },
  { name: "Action"}
];
const rowheaderlist = [
  "Sr. No.",
  "Sanctioned Farmer Name",
  "Farmer Reg. No.(as on Tracenet)",
  "Area (Ha)",
  "Status (C1, C2, C3 or ORG)",
  "Duration (if relevant)",
  "Reason",
];
const data = [
  {
    Sanctioned_Farmer_Name: "omkar zagade",
    Farmer_Reg_No_as_on_Tracenet: "12",
    Area_Ha: "200sq",
    Status: "C1",
    Duration: "-",
    Reason: "ok",
  },
  {
    Sanctioned_Farmer_Name: "vivek parmar",
    Farmer_Reg_No_as_on_Tracenet: "1234",
    Area_Ha: "200sq",
    Status: "C1",
    Duration: "-",
    Reason: "ok",
  },
  {
    Sanctioned_Farmer_Name: "vivek parmar",
    Farmer_Reg_No_as_on_Tracenet: "123456",
    Area_Ha: "200sq",
    Status: "C1",
    Duration: "-",
    Reason: "ok",
  },
  {
    Sanctioned_Farmer_Name: "vivek parmar",
    Farmer_Reg_No_as_on_Tracenet: "1234578",
    Area_Ha: "200sq",
    Status: "C1",
    Duration: "-",
    Reason: "ok",
  },
];
const StatesObjectfortable = {
  Sr_No:"",
  Sanctioned_Farmer_Name: "",
  Farmer_Reg_No_as_on_Tracenet: "",
  Area_Ha: "",
  Status: "",
  Duration: "",
  Reason: "",
}
const Sanctioned_Farmer_List = () => {
  const [Data, setData] = useState([]);
  const [file, setFile] = useState();
  const [edituserID, setedituserID] = useState(null);
  const [hideRowButton, sethideRowButton] = useState(true);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    console.log("--------------------------------------------------")
    console.log(auth)
    console.log("--------------------------------------------------")
  }, [auth])
  
  const [tableDetails, settableDetails] = useState(StatesObjectfortable);
  const [EditDetails, setEditDetails] = useState(StatesObjectfortable);

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
    setedituserID(user.Farmer_Reg_No_as_on_Tracenet);
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
    const index = Data.findIndex((user) => user.Farmer_Reg_No_as_on_Tracenet === edituserID);
    const newStatevalue = [...Data];
    newStatevalue[index] = { ...EditDetails };
    setData([...newStatevalue]);
    setedituserID(null);
  };
  const handleCancelClick = () => {
    setedituserID(null);
  };

  //Delete user function
  const handleDeleteClick = (event, user) => {
    event.preventDefault();
    let arrToDeleteUser = [...Data];
    let DeletedUser = arrToDeleteUser.filter(
      (u) => u.Farmer_Reg_No_as_on_Tracenet !== user.Farmer_Reg_No_as_on_Tracenet
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
            Sr_No: v["Sr. No."],
            Sanctioned_Farmer_Name: v["Sanctioned Farmer Name "],
            Farmer_Reg_No_as_on_Tracenet: v["Farmer Reg. No."],
            Area_Ha:v["Area (Ha)"],
            Status:v["Status"],
            Duration:v["Duration (if relevant)"],
            Reason: v["Reason"],
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
  const getcalltable = async () => {
    const get_url = "foodchainid_form1c/getfarmerlist";
    //console.log(JSON.stringify(Newformdata));
    try {
      const response = await axios.post(
        get_url,
        JSON.stringify({
          form_conn: "62d1545bb63a268f6cbe788f",
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
    getcalltable();
  }, [])
  const URL_forTables = "foodchainid_form1c/addfarmerlist"
  const callToApi = async () => {
    let Newformdata = {
      userId: "62d153a39aeef55960f11da9",
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
    <section>
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
          oveflow-scroll
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

            {Data?.map((val, index) => {
              return edituserID === val.Farmer_Reg_No_as_on_Tracenet ? (
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
                  <td>{val?.Sanctioned_Farmer_Name}</td>
                  <td>{val?.Farmer_Reg_No_as_on_Tracenet}</td>
                  <td>{val?.Area_Ha}</td>
                  <td>{val?.Status}</td>
                  <td>{val?.Duration}</td>
                  <td>{val?.Reason}</td>
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
      <div className="flex justify-end">
        {(auth!=="Operator")?<Button >Approve</Button>:<Button onClick={callToApi}>Submit for Approval</Button>}
        
      </div>
    </section>
  );
};

export default Sanctioned_Farmer_List;
