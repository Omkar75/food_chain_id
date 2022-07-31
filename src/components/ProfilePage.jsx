import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
const ProfilePage = () => {
  return (
    <section className="!w-full !h-full overflow-x-auto space-y-8 sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      <Row>
        <Col md={3} className="space-y-2 p-4 md:p-0">
          <div className="w-full h-48 border-2 border-black p-4 rounded-lg shadow-lg">
            <BiUser className="w-full h-full" />
          </div>
          <div className="border-2 border-black p-4 rounded-lg shadow-lg">
            <span>Notifications : </span>
          </div>
        </Col>
        <Col md={9}>
          <section className="p-4 rounded-lg shadow-lg">
            <div className="flex mt-4 space-x-2">
              <label htmlFor="CompanyName" className="max-w-max">
                Company Name:
              </label>
              <input type="text" id="CompanyName" autoComplete="off" required />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="gstNo" className="max-w-max">
                GST No. :
              </label>
              <input type="text" id="gstNo" autoComplete="off" required />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="udyogAadharNo" className="max-w-max">
                Udyog Aadhar No. :
              </label>
              <input
                type="text"
                id="udyogAadharNo"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="username" className="max-w-max">
                Full Name :
              </label>
              <input type="text" id="username" autoComplete="off" required />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="email" className="max-w-max">
                Email:
              </label>
              <input type="email" required />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="PhoneNo" className="max-w-max">
                <span>{"Phone No. : "}</span>
              </label>
              <input type="text" required={true} />
            </div>
            <div className="flex mt-4 space-x-2">
              <label htmlFor="Andhar" className="max-w-max">
                Andhar Card No :
              </label>
              <input type="text" required />
            </div>
            <div className="flex mt-4 space-x-2 mb-4">
              <label htmlFor="password" className="max-w-max">
                <span>Password :</span>
              </label>
              <input type="password" id="password" required />
            </div>
          </section>
        </Col>
      </Row>

      <div className="mt-2 flex !justify-end"></div>
    </section>
  );
};

export default ProfilePage;
