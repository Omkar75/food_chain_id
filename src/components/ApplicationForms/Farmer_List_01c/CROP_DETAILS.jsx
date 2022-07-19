import React, { useState } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
const Tableheaders = [
  { name: "Sr. No." },
  { name: "State" },
  { name: "District" },
  { name: "Taluk" },
  { name: "Village" },
  { name: "Farmer" },
  { name: "Farmer TraceNet Reg. No." },
  { name: "Total Area (Ha)" },
  { name: "Field Status" },
  { name: "Crop" },
];
const famer = [
  {
    Sr_no: "1",
    state: "helo",
    district: "12",
    taluka: "kslf",
    village: "sfs",
    farmer: "adsg",
    farmer_tracenet_reg_no: "sf",
    total_area_ha: "bxm",
    field_status: "ipor",
    crop: [
      {
        season: "summer",
        type: "dontknow",
        product_status: "done",
        estqty: "500",
      },
    ],
  },
  {
    Sr_no: "2",
    state: "helo",
    district: "12",
    taluka: "kslf",
    village: "sfs",
    farmer: "adsg",
    farmer_tracenet_reg_no: "sf",
    total_area_ha: "bxm",
    field_status: "ipor",
    crop: [
      {
        season: "summer",
        type: "dontknow",
        product_status: "done",
        estqty: "500",
      },
      {
        season: "summer",
        type: "dontknow",
        product_status: "done",
        estqty: "500",
      },
    ],
  },
];
const cropheader = ["Season", "Crop Type", "Product Status", "Est. Qty (Kg)"];
const CROP_DETAILS = () => {
  const [Data, setData] = useState(famer);
  const [file, setFile] = useState();
  const [edituserID, setedituserID] = useState(null);
  const [hideRowButton, sethideRowButton] = useState(true);
  const [tableDetails, settableDetails] = useState({
    Sr_no: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    farmer: "",
    farmer_tracenet_reg_no: "",
    total_area_ha: "",
    field_status: "",
    crop: [
      { season: "", type: "", product_status: "", estqty: "" },
      { season: "", type: "", product_status: "", estqty: "" },
    ],
  });
  const [EditDetails, setEditDetails] = useState({
    Sr_no: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    farmer: "",
    farmer_tracenet_reg_no: "",
    total_area_ha: "",
    field_status: "",
    crop: [
      { season: "", type: "", product_status: "", estqty: "" },
      { season: "", type: "", product_status: "", estqty: "" },
    ],
  });
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
  return (
    <>
      <div className="flex mb-4">
        <label className="font-medium ">ICS Name</label>
        <input type="text" />
      </div>
      <div className="space-x-4 flex">
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
        responsive
        bordered
        hover
        className=" !border-2 !border-teal-700 !rounded-lg"
      >
        <thead>
          <tr>
            <th rowSpan={2}>Sr. No. </th>
            <th rowSpan={2}>State</th>
            <th rowSpan={2}>District</th>
            <th rowSpan={2}>Taluka</th>
            <th rowSpan={2}>Village</th>
            <th rowSpan={2}>Farmer</th>
            <th rowSpan={2}>Farmer TraceNet Reg. No.</th>
            <th rowSpan={2}>Total Area (Ha)</th>
            <th rowSpan={2}>Field Status</th>
            {}
            <th colSpan={4}>Crop</th>
            <th colSpan={4}>Crop</th>
            <th rowSpan={2} colSpan={2}>
              Actions
            </th>
          </tr>
          <tr>
            <th>{cropheader[0]}</th>
            <th>{cropheader[1]}</th>
            <th>{cropheader[2]}</th>
            <th>{cropheader[3]}</th>
            <th>{cropheader[0]}</th>
            <th>{cropheader[1]}</th>
            <th>{cropheader[2]}</th>
            <th>{cropheader[3]}</th>
          </tr>
        </thead>
        <tbody>
          <tr className={hideRowButton === true ? "hidden" : ""}>
            {Object.entries(tableDetails).map((ass, index) => {
              return (Array.isArray(ass[1])) ? (
                ass[1].map((arr1, i)=>{
                  return(
                    <>
                    <td className="" key={index}>
                  <input
                    className="!text-sm !font-light p-1"
                    type="text"
                    name={arr1[0]}
                    placeholder={arr1[0]}
                    value={"omkar"}
                    onChange={handleChangeNewUser}
                  />
                </td>
                <td className="" key={index}>
                <input
                  className="!text-sm !font-light p-1"
                  type="text"
                  name={arr1[1]}
                    placeholder={arr1[1]}
                  value={"omkar"}
                  onChange={handleChangeNewUser}
                />
              </td>
              <td className="" key={index}>
              <input
                className="!text-sm !font-light p-1"
                type="text"
                name={"omkar"}
                value={"omkar"}
                onChange={handleChangeNewUser}
              />
            </td>
            <td className="" key={index}>
            <input
              className="!text-sm !font-light p-1"
              type="text"
              name={"omkar"}
              value={"omkar"}
              onChange={handleChangeNewUser}
            />
          </td>
          </>
                  )
                })
              ) : (
                <td className="" key={index}>
                  {console.log(ass)}
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
          {Data.map((v, index) => {
            return edituserID === v.No_of_farmers ? (
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
                      handleEditFormSubmit(event, v);
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
                <td>{v.Sr_no}</td>
                <td>{v.state}</td>
                <td>{v.district}</td>
                <td>{v.taluka}</td>
                <td>{v.village}</td>
                <td>{v.farmer}</td>
                <td>{v.farmer_tracenet_reg_no}</td>
                <td>{v.total_area_ha}</td>
                <td>{v.field_status}</td>
                {v.crop?.map((cpacs, index) => {
                  return (
                    <>
                      <td>{cpacs.season}</td>
                      <td>{cpacs.type}</td>
                      <td>{cpacs.product_status}</td>
                      <td>{cpacs.estqty}</td>
                    </>
                  );
                })}
                <td>
                  <Button onClick={(event) => handleEditClick(event, v)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CROP_DETAILS;
