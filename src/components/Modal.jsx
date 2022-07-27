import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ModalComp = (props) => {
    const [Crop, setCrop] = useState({
        season: "",
        type: "",
        product_status: "",
        organic_status: "",
        estqty: "",
      });
  const { onHide, modaldata, FarmerListArray, setFarmerListArray } = props;
  const [Indidata, setIndidata] = useState(modaldata?.crop);
  useEffect(() => {
    if (modaldata?.crop) {
      setIndidata(modaldata.crop);
    }
  }, [modaldata]);

  const handleChangeNewUser = (event, datasheet) => {
    let newcropdata = {
      ...Crop,
      [event.target.name]: event.target.value,
    };
    setCrop(newcropdata);
  };
  const handleAddNewUser = (event) => {
    debugger;
    event.preventDefault();
    let temparr = Indidata;
    temparr = [...Indidata, Crop];
    setIndidata(temparr);
    let DeletedUser = FarmerListArray?.filter(
      (u) =>
        u.Farmer_Reg_No_as_on_Tracent === modaldata.Farmer_Reg_No_as_on_Tracent
    );
    let ob = DeletedUser[0];
    ob.crop = temparr;
    let foundindex = FarmerListArray?.findIndex(
      (x) => x.Farmer_Reg_No_as_on_Tracent === ob.Farmer_Reg_No_as_on_Tracent
    );
    let temp = FarmerListArray;
    temp[foundindex] = ob;
    setFarmerListArray(temp);
  };
  const handleDeleteClick = (event, user) => {
    event.preventDefault();
    let arrToDeleteUser = [...FarmerListArray];
    let DeletedUser = arrToDeleteUser.filter(
      (u) => u.Farmer_Reg_No_as_on_Tracent != user.Farmer_Reg_No_as_on_Tracent
    );
    setFarmerListArray([...DeletedUser]);
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {JSON.stringify(Indidata)}
          <tr>
              {Object.entries(Crop).map((ass, index) => {
                return (
                  <td className="" key={index}>
                    <input
                      className="!text-sm !font-light p-1"
                      type="text"
                      name={ass[0]}
                      value={Crop[ass[0]]}
                      placeholder={ass[0]}
                      onChange={handleChangeNewUser}
                    />
                  </td>
                );
              })}
              </tr>
              <Button onClick={handleAddNewUser}>Add Crop</Button>
          </Row>
          <Table
          responsive
          bordered
          hover
          className=" !border-2 !border-teal-700 !rounded-lg"
          >
            <thead>
              <tr>
                <th>Trancent No.</th>
                <th>Season</th>
                <th>Type</th>
                <th>Product Status</th>
                <th>Organic Status</th>
                <th>Est. Qty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Indidata?.map((d, i) => {
                return (
                  <tr key={i}>
                    <td>{modaldata?.Farmer_Reg_No_as_on_Tracent}</td>
                    <td>{d.season}</td>
                    <td>{d.type}</td>
                    <td>{d.product_status}</td>
                    <td>{d.organic_status}</td>
                    <td>{d.estqty}</td>
                <td>
                <Button className="!text-sm"
                      onClick={(event) => {
                        handleDeleteClick(event, d);
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
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp