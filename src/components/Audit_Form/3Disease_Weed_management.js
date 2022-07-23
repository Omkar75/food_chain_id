import React, { useState, useEffect } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function Disease_Weed_management() {
  const [formdata, setformdata] = useState({
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

    C_Prevent_Erosion: "",
    Cm_Prevent_Erosion: "",
    E_Prevent_Erosion: "",

    C_Crop_Residues: "",
    Cm_Crop_Residues: "",
    E_Crop_Residues: "",

    C_Primary_Forest: "",
    Cm_Primary_Forest: "",
    E_Primary_Forest: "",

    C_Allow_Animals: "",
    Cm_Allow_Animals: "",
    E_Allow_Animals: "",

    C_Parallel_Production: "",
    Cm_Parallel_Production: "",
    E_Parallel_Production: "",

    C_Buffer_Zone: "",
    Cm_Buffer_Zone: "",
    E_Buffer_Zone: "",

    C_Farmland: "",
    Cm_Farmland: "",
    E_Farmland: "",
  });

  const inputEvent = (event, datasheet) => {
    event.preventDefault();
    let Newformdata = {
      ...formdata,
      [event.target.name]: event.target.value,
    };
    setformdata(Newformdata);
  };

  // useEffect(() => {}, [formdata]);
  return (
    <div className="container card card-body ">
      {/* {JSON.stringify(formdata)} */}
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
            <td>30</td>
            <td>
              <tr>
                Does operator use preventive cultural methods for pest, disease
                and weed control?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Preventive"
                    onChange={inputEvent}
                    value={formdata.C_Preventive}
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
                name="Cm_Preventive"
                onChange={inputEvent}
                value={formdata.Cm_Preventive}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Preventive"
                onChange={inputEvent}
                value={formdata.E_Preventive}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>31</td>
            <td>
              <tr>
                Does operator use products prepared at the farm from local
                plants, microorganisms and animals for pest, disease and weed
                management?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Management"
                    onChange={inputEvent}
                    value={formdata.C_Management}
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
                name="Cm_Management"
                onChange={inputEvent}
                value={formdata.Cm_Management}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Management"
                onChange={inputEvent}
                value={formdata.E_Management}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>32</td>
            <td>
              <tr>
                Does operator use physical methods for pest, disease and weed
                control including thermic weed control?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Physical_methods"
                    onChange={inputEvent}
                    value={formdata.C_Physical_methods}
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
                name="Cm_Physical_methods"
                onChange={inputEvent}
                value={formdata.Cm_Physical_methods}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Physical_methods"
                onChange={inputEvent}
                value={formdata.E_Physical_methods}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>33</td>
            <td>
              <tr>
                {" "}
                Has operator done thermic sterilization of soil to combat pest
                and disease? Is approval sought from FCID before practicing it?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Sterilization"
                    onChange={inputEvent}
                    value={formdata.C_Sterilization}
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
                name="Cm_Sterilization"
                onChange={inputEvent}
                value={formdata.Cm_Sterilization}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Sterilization"
                onChange={inputEvent}
                value={formdata.E_Sterilization}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>34</td>
            <td>
              <tr>
                Are equipment/tools/machineries used in conventional farm also
                used in organic farm? If yes, is it properly cleaned and free
                from residues before being used on organically managed areas?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Equipment"
                    onChange={inputEvent}
                    value={formdata.C_Equipment}
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
                name="Cm_Equipment"
                onChange={inputEvent}
                value={formdata.Cm_Equipment}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Equipment"
                onChange={inputEvent}
                value={formdata.E_Equipment}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>35</td>
            <td>
              <tr>
                Is it ensured that no use of synthetic herbicides, fungicides,
                growth regulators, synthetic dyes, insecticides and other
                pesticides incl. use of genetically engineered organisms and
                product is done in the organic farm?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Synthetic"
                    onChange={inputEvent}
                    value={formdata.C_Synthetic}
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
                name="Cm_Synthetic"
                onChange={inputEvent}
                value={formdata.Cm_Synthetic}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Synthetic"
                onChange={inputEvent}
                value={formdata.E_Synthetic}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>36</td>
            <td>
              <tr>
                Are other products used for pest and disease control comply with
                Annex 2 of Appendix 1? Are evidences available to prove need to
                use these products?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Evidences"
                    onChange={inputEvent}
                    value={formdata.C_Evidences}
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
                name="Cm_Evidences"
                onChange={inputEvent}
                value={formdata.Cm_Evidences}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Evidences"
                onChange={inputEvent}
                value={formdata.E_Evidences}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>37</td>
            <td>
              <tr>
                Has operator used any commercial products? If yes, is approval
                taken from FCID before use?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Commercia_Product"
                    onChange={inputEvent}
                    value={formdata.C_Commercia_Product}
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
                name="Cm_Commercia_Product"
                onChange={inputEvent}
                value={formdata.Cm_Commercia_Product}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Commercia_Product"
                onChange={inputEvent}
                value={formdata.E_Commercia_Product}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>


        <body>
          <center><strong>Contamination Control</strong></center>
        </body>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>38</td>
            <td>
              <tr>
                Is operator engaged in parallel production or part conversion?
                If yes, what measures are taken to minimize the contamination?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Parallel_Production"
                    onChange={inputEvent}
                    value={formdata.C_Parallel_Production}
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
                name="Cm_Parallel_Production"
                onChange={inputEvent}
                value={formdata.Cm_Parallel_Production}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Parallel_Production"
                onChange={inputEvent}
                value={formdata.E_Parallel_Production}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>39</td>
            <td>
              <tr>
                Are buffer zones maintained to prevent contamination from
                conventional farms? Are buffer zones efficient?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Buffer_Zone"
                    onChange={inputEvent}
                    value={formdata.C_Buffer_Zone}
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
                name="Cm_Buffer_Zone"
                onChange={inputEvent}
                value={formdata.Cm_Buffer_Zone}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Buffer_Zone"
                onChange={inputEvent}
                value={formdata.E_Buffer_Zone}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>40</td>
            <td>
              <tr>
                Does operator use Polyethylene and polypropylene or other
                polycarbonates coverings such as plastic mulches, fleeces,
                insect net or silage wrapping on the farmland? If yes, is it
                removed from soil after use and not burnt? Is it ensured that
                use of polychloride based products is prohibited in organic
                farm?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Farmland"
                    onChange={inputEvent}
                    value={formdata.C_Farmland}
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
                name="Cm_Farmland"
                onChange={inputEvent}
                value={formdata.Cm_Farmland}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Farmland"
                onChange={inputEvent}
                value={formdata.E_Farmland}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

<tbody><center><strong>  Soil & Water conservation
</strong></center></tbody>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>41</td>
            <td>
              <tr>
                Are relevant measures taken to prevent erosion, salination of
                soil, excessive and improper use of water and the pollution of
                ground and surface water?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Prevent_Erosion"
                    onChange={inputEvent}
                    value={formdata.C_Prevent_Erosion}
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
                name="Cm_Prevent_Erosion"
                onChange={inputEvent}
                value={formdata.Cm_Prevent_Erosion}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Prevent_Erosion"
                onChange={inputEvent}
                value={formdata.E_Prevent_Erosion}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>42</td>
            <td>
              <tr>
                Does the burning of crop residues are performed in the field? Is
                it kept to minimum?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Crop_Residues"
                    onChange={inputEvent}
                    value={formdata.C_Crop_Residues}
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
                name="Cm_Crop_Residues"
                onChange={inputEvent}
                value={formdata.Cm_Crop_Residues}
                type="text"
              />
            </td>
            <td>
              <input
                name="E_Crop_Residues"
                onChange={inputEvent}
                value={formdata.E_Crop_Residues}
                type="text"
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>43</td>
            <td>
              <tr>Is it ensured that no clearing of primary forest is done?</tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Primary_Forest"
                    onChange={inputEvent}
                    value={formdata.C_Primary_Forest}
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
                name="Cm_Primary_Forest"
                onChange={inputEvent}
                value={formdata.Cm_Primary_Forest}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Primary_Forest"
                onChange={inputEvent}
                value={formdata.E_Primary_Forest}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
            <td>44</td>
            <td>
              <tr>
                Do you allow animals to graze in the organic farm? If yes, do
                you ensure that stocking densities of animals do not lead to
                land degradation and/ or pollution of ground and/ or surface
                water?
              </tr>
            </td>
            <td>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}></Form.Label>
                <Col sm={5}>
                  <Form.Select
                    name="C_Allow_Animals"
                    onChange={inputEvent}
                    value={formdata.C_Allow_Animals}
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
                name="Cm_Allow_Animals"
                onChange={inputEvent}
                value={formdata.Cm_Allow_Animals}
                type="text"
                placeholder=""
              />
            </td>
            <td>
              <input
                name="E_Allow_Animals"
                onChange={inputEvent}
                value={formdata.E_Allow_Animals}
                type="text"
                placeholder=""
              />
            </td>
          </tr>
        </tbody>



        
      </Table>
    </div>
  );
}
