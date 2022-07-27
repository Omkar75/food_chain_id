import React, { useState } from "react";
import { Col, Card, Form, Table, Row, Button } from "react-bootstrap";
import * as XLSX from "xlsx/xlsx.mjs";
import ModalAddRows from "../../AllModalComponents/ModalAddRows";
import ModalCropDetails from "../../AllModalComponents/ModalCropDetails";
import ModalForInspection from "../../AllModalComponents/ModalForInspection";
const headerlist = [
  "Sr. No.","Farmer Name","Farmer TraceNet Reg. No.","Total Area (Ha)","Date of last use of forbidden products","Date of Registration","Latitude","Longitude","Aadhar No.","Contact", "State", "District","Taluka", "Village","Farmer","Field Status"]
const StatestheCmp = {
  Sr_no: "",
  Farmer_Name: "",
  Farmer_Reg_No_as_on_Tracent: "",
  Total_area_Ha: "",
  Date_of_last_use_of_forbidden_products: "",
  Date_of_Registration: "",
  Latitude: "",
  Longitude: "",
  Aadhar_No: "",
  Contact: "",
  state: "",
  district: "",
  taluka: "",
  village: "",
  farmer: "",
  field_status: "",
  crop: [],
  Inspection: [],
};
const CROP_DETAILS = () => {
  const [file, setFile] = useState();
  const [edituserID, setedituserID] = useState(null);
  const [FarmerListArray, setFarmerListArray] = useState([]);
  const [ModalCropData, setModalCropData] = useState();
  const [ModalInspectionData, setModalInspectionData] = useState();
  const [tableDetails, settableDetails] = useState(StatestheCmp);

  
  const [EditDetails, setEditDetails] = useState(StatestheCmp);
  const [modalShow, setModalShow] = useState(false);
  const [modalInspectionShow, setModalInspectionShow] = useState(false);

  const [ModalAddRowShow, setModalAddRowShow] = useState(false)

  const handleEditClick = (event, user) => {
    event.preventDefault();
    console.log(user);
    setedituserID(user.Farmer_Reg_No_as_on_Tracent);
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
    let emptystate = {
      Sr_no: "",
      Farmer_Name: "",
      Farmer_Reg_No_as_on_Tracent: "",
      Total_area_Ha: "",
      Date_of_last_use_of_forbidden_products: "",
      Date_of_Registration: "",
      Latitude: "",
      Longitude: "",
      Aadhar_No: "",
      Contact: "",
      state: "",
      district: "",
      taluka: "",
      village: "",
      farmer: "",
      field_status: "",
      crop: [],
      Inspection: [],
    };
    setFarmerListArray((oldform) => [...oldform, tableDetails]);
    settableDetails({ ...emptystate });
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
    const index = FarmerListArray.findIndex(
      (user) => user.Farmer_Reg_No_as_on_Tracent === edituserID
    );
    const newStatevalue = [...FarmerListArray];
    newStatevalue[index] = { ...EditDetails };
    setFarmerListArray([...newStatevalue]);
    setedituserID(null);
  };
  const handleCancelClick = () => {
    setedituserID(null);
  };
  const handleDeleteClick = (event, user) => {
    event.preventDefault();
    let arrToDeleteUser = [...FarmerListArray];
    let DeletedUser = arrToDeleteUser.filter(
      (u) => u.Farmer_Reg_No_as_on_Tracent != user.Farmer_Reg_No_as_on_Tracent
    );
    setFarmerListArray([...DeletedUser]);
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
          let Newdata = {
            Sr_no: v["Sr.No."],
            Farmer_Name: v["Farmer Name "],
            Farmer_Reg_No_as_on_Tracent: v["Farmer Reg. No."],
            Total_area_Ha: v["Total Farm Area (Ha)"],
            Date_of_last_use_of_forbidden_products: v[
              "Date of last use of forbidden products"
            ],
            Date_of_Registration: v["Date of Registration"],
            Latitude: v["Latitude"],
            Longitude: v["Longitude"],
            Aadhar_No: v["Aadhar No."],
            Contact: v["Contact No."],
            state: v["State"],
            district: v["District"],
            taluka: v["Taluk"],
            village: v["Village"],
            farmer: v["Farmer"],
            field_status: v["Field Status"],
            crop: [],
            Inspection: [],
          };
          
          let temparryforempty = { ...tableDetails };
          settableDetails({ ...Newdata });
          setFarmerListArray((oldform) => [...oldform, Newdata]);
          settableDetails({ ...temparryforempty });
        });
      });
    };
    reader.readAsBinaryString(f);
  };

  const showModalCropData = (val) => {
    setModalCropData(val);
    setModalShow(true);
  };
  const showModalInspectionData = (val) => {
    setModalInspectionData(val);
    setModalInspectionShow(true);
  }
  return (
    <>
      {JSON.stringify(FarmerListArray)}
      <div className="flex mb-4">
        <label className="font-medium ">ICS Name</label>
        <input type="text" />
      </div>
      <div className="space-y-4">
      <div className="space-x-4 flex justify-end">
        <Button
          onClick={() => {
            setModalAddRowShow(true);;
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
            <th>Sr. No.</th>
            <th>Farmer Name</th>
            <th>Farmer TraceNet Reg. No.</th>
            <th>Total Area (Ha)</th>
            <th>Date of last use of forbidden products</th>
            <th>Date of Registration</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Aadhar No.</th>
            <th>Contact</th>
            <th>State</th>
            <th>District</th>
            <th>Taluka</th>
            <th>Village</th>
            <th>Farmer</th>
            <th>Field Status</th>
            <th>Crop</th>
            <th>Inspection</th>
          </tr>
        </thead>
        <tbody>
          {FarmerListArray.map((v, index) => {
            return edituserID === v.Farmer_Reg_No_as_on_Tracent ? (
              <tr>
                {Object.entries(EditDetails).map((ass, index) => {
                  return Array.isArray(ass[1]) ? (
                    ""
                  ) : (
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
                  <Button variant="primary" onClick={() => showModalCropData(v)}>
                    Crops
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => showModalInspectionData(v)}>
                    Inspection
                  </Button>
                </td>
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
              <tr key={index}>
                <td>{v?.Sr_no}</td>
                <td>{v?.Farmer_Name}</td>
                <td>{v?.Farmer_Reg_No_as_on_Tracent}</td>
                <td>{v?.Total_area_Ha}</td>
                <td>{v?.Date_of_last_use_of_forbidden_products}</td>
                <td>{v?.Date_of_Registration}</td>
                <td>{v?.Latitude}</td>
                <td>{v?.Longitude}</td>
                <td>{v?.Aadhar_No}</td>
                <td>{v?.Contact}</td>
                <td>{v?.state}</td>
                <td>{v?.district}</td>
                <td>{v?.taluka}</td>
                <td>{v?.village}</td>
                <td>{v?.farmer}</td>
                <td>{v?.field_status}</td>
                <td>
                  <Button variant="primary" onClick={() => showModalCropData(v)}>
                    Crops
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => showModalInspectionData(v)}>
                    Inspection
                  </Button>
                </td>
                <td>
                  <Button onClick={(event) => handleEditClick(event, v)}>
                    Edit
                  </Button>
                </td>
                <td>
                <Button className="!text-sm"
                      onClick={(event) => {
                        handleDeleteClick(event, v);
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
      <>
      <ModalAddRows
      show={ModalAddRowShow}
      tableDetails={tableDetails}
      handleChangeNewUser={handleChangeNewUser}
      handleAddNewUser={handleAddNewUser}
      headerlist={headerlist}
      onHide={() => setModalAddRowShow(false)}
      />
      <ModalCropDetails
        show={modalShow}
        setFarmerListArray={setFarmerListArray}
        FarmerListArray={FarmerListArray}
        modaldata={ModalCropData}
        onHide={() => setModalShow(false)}
      />
      <ModalForInspection
      show={modalInspectionShow}
      setFarmerListArray={setFarmerListArray}
      FarmerListArray={FarmerListArray}
      modaldata={ModalInspectionData}
      onHide={() => setModalInspectionShow(false)}
      />
      </>
    </>
  );
};

export default CROP_DETAILS;
