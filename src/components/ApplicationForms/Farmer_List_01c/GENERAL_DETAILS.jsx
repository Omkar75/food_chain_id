import React,{useState} from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import CompositionDetails from './CompositionDetails';
import DETAILS from './DETAILS';
import CompositionTable from './CompositionTable';
import SummayDetails from './SummaryDetails';
const GENERAL_DETAILS = () => {
    const [key, setKey] = useState('Details');
  return (
    <>
     <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Details" title="Details">
        <DETAILS/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
         <SummayDetails/>
      </Tab>
      <Tab eventKey="composition" title="Composition">
        <CompositionDetails/>
      </Tab>
      <Tab eventKey="compositiontable" title="Composition Table">
        <CompositionTable/>
      </Tab>
    </Tabs>
    </>
  )
}

export default GENERAL_DETAILS