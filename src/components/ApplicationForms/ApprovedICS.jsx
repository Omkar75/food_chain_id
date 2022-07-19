import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const ApprovedICS = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [datalist, setdatalist] = useState(location.state.approved);
  console.log(location.state);
  const redirectfun = (user) => {
    console.log(user);
    navigate("/applicationform", { state: { user: user } });
  };
  return (
    <div className="!w-full !h-full overflow-x-hidden space-y-8  sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      {JSON.stringify(datalist)}
      {datalist.length === 0 ? (
        <div className="flex justify-center">
        <h5 className="text-gray-700">No Users</h5>
        </div>  
      ) : (
        <section>
          <Row xs={1} md={3} className="g-4">
            {datalist.map((lo, _i) => {
              return (
                <Col key={_i}>
                  <Card className="!text-gray-800">
                    <Card.Header className="!bg-teal-300">
                      ID: <span>{lo._id}</span>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Name: <span>{lo.name}</span>
                      </Card.Title>
                      <Card.Text>
                        Phone No: <span>{lo.phone}</span>
                        <br />
                        Aadhar No: <span>{lo.aadharno}</span>
                      </Card.Text>
                      <Button
                        onClick={() => redirectfun(lo)}
                        className="!bg-teal-400 !text-gray-900 border-0"
                      >
                        Go to Application
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>
      )}
    </div>
  );
};

export default ApprovedICS;
