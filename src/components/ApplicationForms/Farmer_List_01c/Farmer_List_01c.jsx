import React from "react";
import Accordion from "react-bootstrap/Accordion";
import GENERAL_DETAILS from "./GENERAL_DETAILS";
import Sanctioned_Farmer_List from "./Sanctioned_Farmer_List";
import CROP_DETAILS from "./CROP_DETAILS";

//className="pointer-events-none"
const Farmer_List_01c = () => {
  return (
    <section className="!w-full !h-full space-y-8  sm:!max-w-xl md:!max-w-3xl lg:!max-w-5xl !mx-auto">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{`General Details & Internal Insp`}</Accordion.Header>
          <Accordion.Body>
            <GENERAL_DETAILS />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Crop Details</Accordion.Header>
          <Accordion.Body>
            <CROP_DETAILS />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Sanctioned Farmer List</Accordion.Header>
          <Accordion.Body>
            <Sanctioned_Farmer_List />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Farmer_List_01c;
