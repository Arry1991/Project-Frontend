import React, { useState, useEffect } from "react";
import "./businessmain.css";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, FormGroup, Label, Input } from "reactstrap";

const BusinessInfo = () => {
  let url = "/react-backend/displayBusinessInfo.php";
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((json) => {
        //setFormData(json.data);
        //console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // on Form Submit run this function
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("name", formData.name);
    formData2.append("type", formData.type);
    formData2.append("email", formData.email);
    formData2.append("phone", formData.phone);
    formData2.append("description", formData.description);
    formData2.append("street", formData.street);
    formData2.append("town", formData.town);
    formData2.append("zip", formData.zip);
    formData2.append("county", formData.county);
    console.log("clicked");

    // set urls
    const url = "/react-backend/business/updateBusinessInfo.php";

    // post business info data
    axios.post(url, formData2).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <h1>Enter Business Info</h1>
      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='Business Name'
            type='text'
            name='name'
            placeholder={formData.name}
            onChange={(e) => {
              onChange(e);
            }}
          />

          <Label>Business Type</Label>
          <Input
            placeholder={formData.type}
            type='select'
            name='type'
            id='type'
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option>Select an option</option>
            <option>Restaurant</option>
            <option>Retail</option>
            <option>Banking/Finance</option>
            <option>Auto Sales/Services</option>
            <option>Medical Office</option>
            <option>Daycare</option>
            <option>Construction</option>
            <option>Sports/Recreation</option>
            <option>Other</option>
          </Input>

          <AvField
            placeholder={formData.email}
            label='Business Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            placeholder={formData.phone}
            label='Phone Number'
            type='phone'
            name='phone'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            placeholder={formData.description}
            label='URL'
            type='url'
            name='description'
            onChange={(e) => {
              onChange(e);
            }}
          />
          <AvField
            placeholder={formData.street}
            label='Street Address'
            type='address'
            name='street'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            placeholder={formData.town}
            label='Town'
            type='text'
            name='town'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            placeholder={formData.zip}
            label='ZIP'
            type='text'
            name='zip'
            onChange={(e) => {
              onChange(e);
            }}
          />

          {/* List of Cunties. To-Do: Hide this data in another file/make a helper function */}
          <Label>County</Label>
          <Input
            placeholder={formData.county}
            type='select'
            name='county'
            id='county'
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option>Select an option</option>
            <option>Albany</option>
            <option>Allegany</option>
            <option>Bronx</option>
            <option>Broome</option>
            <option>Cattaraugus</option>
            <option>Cayuga</option>
            <option>Chautauqua</option>
            <option>Chemung</option>
            <option>Chenango</option>
            <option>Clinton</option>
            <option>Columbia</option>
            <option>Cortland</option>
            <option>Delaware</option>
            <option>Dutchess</option>
            <option>Erie</option>
            <option>Essex</option>
            <option>Franklin</option>
            <option>Fulton</option>
            <option>Genesee</option>
            <option>Greene</option>
            <option>Hamilton</option>
            <option>Herkimer</option>
            <option>Jefferson</option>
            <option>Kings</option>
            <option>Lewis</option>
            <option>Livingston</option>
            <option>Madison </option>
            <option>Monroe</option>
            <option>Montgomery</option>
            <option>Nassau</option>
            <option>New York</option>
            <option>Niagara</option>
            <option>Oneida</option>
            <option>Onondaga</option>
            <option>Ontario </option>
            <option>Orange</option>
            <option>Orleans</option>
            <option>Oswego</option>
            <option>Otsego</option>
            <option>Putnam</option>
            <option>Queens</option>
            <option>Rensselaer</option>
            <option>Richmond</option>
            <option>Rockland</option>
            <option>Saint Lawrence</option>
            <option>Saratoga</option>
            <option>Schenectady</option>
            <option>Schoharie</option>
            <option>Schuyler</option>
            <option>Seneca</option>
            <option>Steuben</option>
            <option>Suffolk</option>
            <option>Sullivan</option>
            <option>Tioga</option>
            <option>Tompkins</option>
            <option>Ulster</option>
            <option>Warren</option>
            <option>Washington</option>
            <option>Wayne</option>
            <option>Westchester</option>
            <option>Wyoming</option>
            <option>Yates</option>
          </Input>

          {/*Couldn't figure out padding for these reactsrap elements. This can be straightened out with CSS*/}
          <p></p>
        </FormGroup>

        {/* <FormGroup>
                <Label>Edit Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    id="businessDescription" 
                    onChange={(e) => {
                            onChange(e);
                        }}                
                />
                </FormGroup> */}

        <FormGroup>
          {" "}
          <Button color='success'>Submit</Button>{" "}
          <Button tag={Link} to='/BusinessMain'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
    </>
  );
};

export default BusinessInfo;
