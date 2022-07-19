import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "../../../src/api/axios";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [data, setdata] = useState([]);
  const URL_GET = "/foodchainid/getOperatorList";
  const callToApi = async () => {
    try {
      const response = await axios.get(URL_GET, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("------" + JSON.stringify(response?.data));
      setdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callToApi();
  }, []);

  return (
    <div className="!w-full !h-full overflow-x-hidden space-y-8  sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      {JSON.stringify(data["pending_list"])}
      {JSON.stringify(data["approved_list"])}
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Link to={"/approvedlist"} state={{approved : data["approved_list"]}} style={{ textDecoration: "none" }}>
            <Card className="h-32 shadow-md !rounded-lg">
              <Card.Body className="!flex !justify-center">
                <Card.Text className="flex h-full items-center text-black">
                  <span>{"Approved List"}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to={"/pendinglist"} state={{pending : data["pending_list"]}} style={{ textDecoration: "none" }}>
            <Card className="h-32 shadow-md !rounded-lg">
              <Card.Body className="!flex !justify-center">
                <Card.Text className="flex h-full items-center text-black">
                  <span>{"Pending List"}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to={"/ApprovedICS"} style={{ textDecoration: "none" }}>
            <Card className="h-32 shadow-md !rounded-lg">
              <Card.Body className="!flex !justify-center">
                <Card.Text className="flex h-full items-center text-black">
                  <span>{"User Creation and Allocation"}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
