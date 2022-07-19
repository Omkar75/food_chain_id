import React, { useState, useContext } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import axios from "../../../api/axios";
import AuthContext from "../../../context/AuthProvider";

// import {RedaFile} from "../ExcelData";

const StatesDetails={
    Field_status: "",
    Area_of_farmers_with_less_than_4_Ha_area_As_per_valid_certificate: "",
    Area_of_farmers_with_less_than_4_Ha_area_Changes_during_this_year: "",
    Area_of_farmers_with_more_than_4_Ha_area_As_per_valid_certificate: "",
    Area_of_farmers_with_more_than_4_Ha_area_Changes_during_this_year: "",
  }
const SummayDetails = () => {
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
    setedituserID(user.Field_status);
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
    const index = Data.findIndex((user) => user.Field_status === edituserID);
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
      (u) => u.Field_status != user.Field_status
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
            Field_status: v["No. of farmers"],
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
           <thead >
          <tr>
            <th rowSpan={2}>Field Status</th>
            <th colSpan={2}>Area of farmers with less than 4 Ha area</th>
            <th colSpan={2}>Area of farmers with more than 4 Ha area</th>
          </tr>
          <tr>
            <th>As per valid certificate</th>
            <th>Changes during this year</th>
            <th>As per valid certificate</th>
            <th>Changes during this year</th>
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
              return edituserID === val.Field_status ? (
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
                  <td>{val?.Field_status}</td>
                  <td>{val?.Area_of_farmers_with_less_than_4_Ha_area_As_per_valid_certificate}</td>
                  <td>{val?.Area_of_farmers_with_less_than_4_Ha_area_Changes_during_this_year}</td>
                  <td>{val?.Area_of_farmers_with_more_than_4_Ha_area_As_per_valid_certificate}</td>
                  <td>{val?.Area_of_farmers_with_more_than_4_Ha_area_Changes_during_this_year}</td>
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

      <div className="flex justify-end">
        {(auth!=="Operator")?<Button >Approve</Button>:<Button onClick={callToApifottable}>Submit for Approval</Button>}
      </div>
    </section>
  );
};

export default SummayDetails;
