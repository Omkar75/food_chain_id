import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "flowbite-react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
const process = [
  {
    name: "Certification Application Crop-Individual",
    link: "certificationdecision",
    statustext: "form1",
  },
  {
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
    name: "Certification Agreement",
    link: "certificationdecision",
    statustext: "form2",
  },
  {
    name: "Audit Checklist - Crop Production",
    link: "certificationdecision",
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
const ApplicationForm = () => {
  const location = useLocation();
  const [userdata, setuserdata] = useState(location?.state?.user);
  const [formStatus, setformStatus] = useState();
  console.log(location.state);

  const url_status = "/foodchainid/getOperatorStatus";
  const callToApi = async () => {
    try {
      const response = await axios.post(
        url_status,
        JSON.stringify({
          form_conn: userdata.form_conn,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("------" + JSON.stringify(response));
      if(response.data){
        setformStatus(response.data);
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
      {JSON.stringify(userdata)}
      <div className="space-y-2">
        <Card>
          <div className="flex !flex-row !justify-between">
          <div>
          <h5 className="!text-gray-700">
            <span className="text-base font-normal">{`Name Of ICS: `}</span>
            <span>{userdata.name}</span>
          </h5>
          <p className="!mb-0">Aadhar No: <span>{userdata.aadharno}</span></p>
          </div>
          <p className="!mb-0">
            Phone No: <span>{userdata.phone}</span>
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
                  state={{user:userdata}}
                >
                  <Card>
                    <div className="!flex !flex-row !justify-between">
                      <div className="font-semibold text-gray-700 dark:text-gray-400 space-x-2">
                        <span>{n.no}</span>
                        <span>{n.name}</span>
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

export default ApplicationForm;
