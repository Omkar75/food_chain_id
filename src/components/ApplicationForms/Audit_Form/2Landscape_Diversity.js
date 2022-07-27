import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";
import { storage } from "./firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Landscape_Diversity() {
  const [formdata, setformdata] = useState({
    C_Biodiversity: "",
    Cm_Biodiversity: "",
    E_Biodiversity: "",

    C_Soil_Condition: "",
    Cm_Soil_Condition: "",
    E_Soil_Condition: "",

    C_Source: "",
    Cm_Source: "",
    E_Source: "",

    C_Source_Seed: "",
    Cm_Source_Seed: "",
    E_Source_Seed: "",

    C_GMO_Free: "",
    Cm_GMO_Free: "",
    E_GMO_Free: "",

    C_Soil_Fertility: "",
    Cm_Soil_Fertility: "",
    E_Soil_Fertility: "",

    C_Heavy_Metals: "",
    Cm_Heavy_Metals: "",
    E_Heavy_Metals: "",

    C_Fertilizer: "",
    Cm_Fertilizer: "",
    E_Fertilizer: "",
    C_PH: "",
    Cm_PH: "",
    E_PH: "",
    C_Manuring: "",
    Cm_Manuring: "",
    E_Manuring: "",
    C_Mineral: "",
    Cm_Mineral: "",
    E_Mineral: "",

    C_Human_Excreta: "",
    Cm_Human_Excreta: "",
    E_Human_Excreta: "",

    C_Nitogen_Fertilizer: "",
    Cm_Nitogen_Fertilizer: "",
    E_Nitogen_Fertilizer: "",

    C_Restricted_Input: "",
    Cm_Restricted_Input: "",
    E_Restricted_Input: "",


  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };



  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "AuditChecklist/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `AuditChecklist/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImageList((prev) => [...prev, url]);
      });
      console.log("uploaded image");
    });
  };

  function changeButton(){
    document.getElementById("mybutton").value="New Button Text";   
}

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [url]);
          // setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);


   useEffect(() => {}, [formdata]);
  return (
    <div className="container card card-body ">
     {JSON.stringify(formdata)}
      <h6> Document Check Records </h6>
      <hr />
      <Table responsive estriped bordered hover size="sm">
        <thead>
          <tr>
            <th className="col-md-2" name="sno">
              Sno
            </th>
            <th className="col-md-4" name="farm">
              Criteria to be checked
            </th>
            <th className="col-md-4" name="area">
              Compliance <br></br>
              (mark 'X') <br></br>
              Y/N/N A
            </th>
            <th className="col-md-2" name="crop">
              Comments of the auditor
            </th>
            <th className="col-md-2" name="crop">
              Evidences
            </th>
          </tr>
        </thead>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>16</td>
            <td>
              <tr>
                Has operator maintained biodiversity on the farm? Does it
                contribute positively to the ecosystem?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Biodiversity"
                    onChange={inputEvent}
                    value={formdata.C_Biodiversity}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Biodiversity"
                onChange={inputEvent}
                value={formdata.Cm_Biodiversity}
                type="text"
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>17</td>
            <td>
              <tr>
                How operator has maintained diversity in crop production system?
                Are cultivation practices followed in the , maintain or improve
                soil condition and minimize soil erosion?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Soil_Condition"
                    onChange={inputEvent}
                    value={formdata.C_Soil_Condition}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Soil_Condition"
                onChange={inputEvent}
                value={formdata.Cm_Soil_Condition}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <center>
              <strong>Choice of Crops & Varieties </strong>
            </center>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>18</td>
            <td>
              <tr>
                What is the source of seeds/seedlings used by the operator? If
                it is conventional, is it ensured that the seeds/seedlings are
                chemically untreated?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Source"
                    onChange={inputEvent}
                    value={formdata.C_Source}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Source"
                onChange={inputEvent}
                value={formdata.Cm_Source}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>19</td>
            <td>
              <tr>
                Has approval from FCID taken if source of seeds/seedlings is
                outside of the farm?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Source_Seed"
                    onChange={inputEvent}
                    value={formdata.C_Source_Seed}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Source_Seed"
                onChange={inputEvent}
                value={formdata.Cm_Source_Seed}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>20</td>
            <td>
              <tr>
                Does the operator make sure that the conventional untreated
                seeds used are free from GMO?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_GMO_Free"
                    onChange={inputEvent}
                    value={formdata.C_GMO_Free}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_GMO_Free"
                onChange={inputEvent}
                value={formdata.Cm_GMO_Free}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>21</td>
            <td>
              <tr>
                Does operator use sufficient quantities of biodegradable
                material of microbial, plan or animal origin to maintain soil
                fertility? What is the basis to decide quantities to be applied?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Soil_Fertility"
                    onChange={inputEvent}
                    value={formdata.C_Soil_Fertility}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>

            <td>
              <input
                name="Cm_Soil_Fertility"
                onChange={inputEvent}
                value={formdata.Cm_Soil_Fertility}
                type="text"
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>22</td>
            <td>
              <tr>
                How accumulation of heavy metals and pollutants is prevented?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Heavy_Metals"
                    onChange={inputEvent}
                    value={formdata.C_Heavy_Metals}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Heavy_Metals"
                onChange={inputEvent}
                value={formdata.Cm_Heavy_Metals}
                type="text"
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>23</td>
            <td>
              <tr>
                Does the producer use any bought-in bio-fertilizers or non
                synthetic fertilizer as an additional input? Is approval sought
                from FCID before use on the farm?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Fertilizer"
                    onChange={inputEvent}
                    value={formdata.C_Fertilizer}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Fertilizer"
                onChange={inputEvent}
                value={formdata.Cm_Fertilizer}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>24</td>
            <td>
              <tr> How pH of soil is maintained at desired level?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_PH"
                    onChange={inputEvent}
                    value={formdata.C_PH}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_PH"
                onChange={inputEvent}
                value={formdata.Cm_PH}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>25</td>
            <td>
              <tr>
                Are relevant measures taken to prevent animal runs from becoming
                over manuring?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Manuring"
                    onChange={inputEvent}
                    value={formdata.C_Manuring}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Manuring"
                onChange={inputEvent}
                value={formdata.Cm_Manuring}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>26</td>
            <td>
              <tr>
                Are mineral fertilizers used on the farm? If yes, do the mineral
                fertilizers used by the farmer are as per the Annex 1 of
                Appendix 1 and according to the soil requirement?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Mineral"
                    onChange={inputEvent}
                    value={formdata.C_Mineral}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Mineral"
                onChange={inputEvent}
                value={formdata.Cm_Mineral}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>27</td>
            <td>
              <tr>
                Is manure used on the farm is free from human excreta (faeces
                and urine)?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Human_Excreta"
                    onChange={inputEvent}
                    value={formdata.C_Human_Excreta}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Human_Excreta"
                onChange={inputEvent}
                value={formdata.Cm_Human_Excreta}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>28</td>
            <td>
              <tr>
                Is it ensured that no synthetic nitrogenous fertilizers are used
                in the organic farm?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Nitogen_Fertilizer"
                    onChange={inputEvent}
                    value={formdata.C_Nitogen_Fertilizer}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Nitogen_Fertilizer"
                onChange={inputEvent}
                value={formdata.Cm_Nitogen_Fertilizer}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>29</td>
            <td>
              <tr>Are restricted inputs used with prior approval from FCID?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Restricted_Input"
                    onChange={inputEvent}
                    value={formdata.C_Restricted_Input}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="NA">NA</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </td>
            <td>
              <input
                name="Cm_Restricted_Input"
                onChange={inputEvent}
                value={formdata.Cm_Restricted_Input}
                type="text"
                placeholder=""
              />
            </td>
            <td>
            <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload file</button>
                {imageList.map((url) => {
                  return <img src={url} width="100" height="40" />;
                })}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
