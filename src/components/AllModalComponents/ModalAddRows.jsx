import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ModalAddRows = (props) => {
    const [Crop, setCrop] = useState({
        season: "",
        type: "",
        product_status: "",
        organic_status: "",
        estqty: "",
      });
  const { onHide, headerlist, modaldata, tableDetails, handleChangeNewUser, handleAddNewUser } = props;
  const [Indidata, setIndidata] = useState(modaldata?.crop);
  useEffect(() => {
    if (modaldata?.crop) {
      setIndidata(modaldata.crop);
    }
  }, [modaldata]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            {JSON.stringify(Indidata)}
            <Col>
            <div className="space-y-2">
            {headerlist.map((h,i)=>{
                return (
                    <div className="!text-sm p-1 border-[1px]">{h} :-</div>
                )
            })}
            </div>
            </Col>
            <Col>
            <div className="space-y-2">
            {Object.entries(tableDetails).map((ass, index) => {
              return Array.isArray(ass[1]) ? (
                ""
              ) : (
                <div className="" key={index}>
                  <input
                    className="!text-sm !font-light p-1"
                    type="text"
                    name={ass[0]}
                    value={tableDetails[ass[0]]}
                    placeholder={ass[0]}
                    onChange={handleChangeNewUser}
                  />
                </div>
              );
            })}
            <div className="flex justify-end">
              <Button className="" onClick={handleAddNewUser}>
                Add Data
              </Button>
            </div>
            </div>
            
            </Col>

          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddRows