import React, {
  List,
  Component,
  useState,
  setState,
  useEffect,
  setData,
} from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import { Button, Label, Input, FormGroup } from "reactstrap";
import axios from "axios";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "./addbusiness.css";

const AddBusiness = (props) => {
  const [formData, setFormdata] = useState({
    name: "",
    type: "",
    email: "",
    phone: "",
    description: "",
    street: "",
    town: "",
    zip: "",
    county: "",
  });

  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
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

    const url = "/react-backend/owner/addBusiness.php";
    axios

      .post(url, formData2)
      //HERE URL WILL EQUAL BACKEND API LINK (POST API LINK.)
      // firstName: String(FormData.firstName),
      // lastName: String(FormData.lastName),
      // email: String(FormData.email),
      // password: String(FormData.password),
      // })
      .then((res) => {
        console.log(res);
        setMessage("Added business");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to add business");
      });
  };
  return (
    <>
      <AvForm className='formAddBusiness' onValidSubmit={registerHandler}>
        <h1>Add Business</h1>
        <FormGroup>
          <AvField
            label='Business Name'
            type='text'
            name='name'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <Label>Business Type</Label>
          <Input
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
            label='Business Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='Phone Number'
            type='phone'
            name='phone'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='URL'
            type='url'
            name='description'
            onChange={(e) => {
              onChange(e);
            }}
          />
          <AvField
            label='Street Address'
            type='address'
            name='street'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='Town'
            type='text'
            name='town'
            onChange={(e) => {
              onChange(e);
            }}
          />

          <AvField
            label='ZIP'
            type='text'
            name='zip'
            minLength='5'
            maxLength='5'
            onChange={(e) => {
              onChange(e);
            }}
          />

          {/* List of Cunties. To-Do: Hide this data in another file/make a helper function */}
          <Label>County</Label>
          <Input
            type='select'
            name='county'
            id='county'
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option>Select the option</option>
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
          <p className={message === "Added business" ? "suc" : "fail"}>
            {message}
          </p>
          <Button>Submit</Button>
          <Button tag={Link} to='/SelectBusiness'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
    </>
  );
};

export default AddBusiness;
