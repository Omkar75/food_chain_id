import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "flowbite-react";
import axios from "../../api/axios";
import { useLocation } from "react-router-dom";
const process = [
  {
    no:"01",
    name: "Certification Application Crop-Individual",
    link: "certification01",
    statustext: "form1",
  },
  {
    no:"01a",
    name: "Organis System Plan-Crop Production",
    link: "OrganicSystemPlan01a",
    statustext: "form1a",
  },
  {
    no: "01b",
    name: "Field Specification and Yield Estimate",
    link: "FieldSpecsnYieldEstimate",
    statustext: "form1b",
  },
  { no: "01c", name: "Farmer List", link: "farmerlist", statustext: "form1c" },
  {
    no: "01d",
    name: "Field History",
    link: "fieldhistory",
    statustext: "form1d",
  },
  {
    no:"02",
    name: "Certification Agreement",
    link: "Agreement01",
    statustext: "form2",
  },
  {
    no:"03",
    name: "Audit Checklist - Crop Production",
    link: "AuditChecklist03",
    statustext: "form3",
  },
  {
    name: "Individual Assessment",
    link: "certificationdecision",
    statustext: "form3a",
  },
  {
    name: "Certification Audit Report",
    link: "certificationdecision",
    statustext: "form4",
  },
  {
    name: "Technical Review - Crop Production",
    link: "certificationdecision",
    statustext: "form5",
  },
  {
    no: "06",
    name: "Certification Decision",
    link: "certificationdecision",
    statustext: "form6",
  },
];
const ICSDashboard = () => {
  const location = useLocation();
  const [userdata, setuserdata] = useState(location.state?.user || JSON.parse(localStorage.getItem("user")));
  const [Operatordata, setOperatordata] = useState()
  const [formStatus, setformStatus] = useState();
  
  const callToApi = async () => {
    const url_status = "/foodchainid/getoperatorprofile";
    console.log(userdata.conn_id)
    try {
      const response = await axios.post(
        url_status,
        JSON.stringify({
          connid: userdata.conn_id,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("---data---" + JSON.stringify(response.data));
      if(response.data){
        setformStatus(response.data.data);
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callToApi();
  }, []);

  return (
    <section className="sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      {JSON.stringify(formStatus)}
      <div className="space-y-2">
      <Card>
          <div className="flex !flex-row !justify-between">
          <div>
          <h5 className="!text-gray-700">
            <span className="text-base font-normal">{`Name Of ICS: `}</span>
            <span>{formStatus?.name}</span>
          </h5>
          <p className="!mb-0">Aadhar No: <span>{formStatus?.aadharno}</span></p>
          </div>
          <p className="!mb-0">
            Phone No: <span>{formStatus?.phone}</span>
            <br />
          </p>
          </div>
        </Card>
        <Card>
          <section className="!space-x-3">
            {process.map((n, index) => {
              return (
                
                <Link
                  to={"/" + n.link}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <Card>
                    <div className="!flex !flex-row !justify-between">
                      <div className="font-semibold text-gray-700 dark:text-gray-400 space-x-2">
                        <span>{n?.no}</span>
                        <span>{n?.name}</span>
                      </div>
                      {formStatus?.data?.[n.statustext]?.status ? (
                        <Badge color="success" size="sm">
                          Completed
                        </Badge>
                      ) : (
                        <Badge color="failure" size="sm">
                          Not Complete
                        </Badge>
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </section>
        </Card>
      </div>
    </section>
  );
};

export default ICSDashboard;
