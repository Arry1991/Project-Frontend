import React, { useEffect, useState } from "react";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

export default function PatronInfo() {
  // Backend URLS
  // TODO: let displayURL = "/react-backend/owner/displayPatronInfo.php";
  let updateURL = "/react-backend/patron/updatePatronInfo.php";

  // Const for data being sent
  const [formData, setFormData] = useState([]);
  // TODO: const [displayData, setDisplayData] = useState([]);

  // Get the 'old' data to use for placeholder/autofill
  //   useEffect(() => {
  //     axios
  //       .get(displayURL)
  //       .then((json) => {
  //         setDisplayData(json.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });

  // Form Change Handler
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  // Form Submit Handler
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("first_name", formData.first_name);
    formData2.append("last_name", formData.last_name);
    formData2.append("email", formData.email);
    formData2.append("password", formData.password);

    axios.post(updateURL, formData2).then((res) => {
      console.log(formData2);
      console.log(res);
    });
  };

  // Return
  return (
    <div>
      <h1>Edit Personal Info</h1>
      <AvForm className='form' onValidSubmit={registerHandler}>
        <FormGroup>
          <AvField
            label='First Name'
            type='text'
            name='first_name'
            placeholder='{displayData.first_name}'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Last Name'
            type='text'
            name='last_name'
            placeholder='{displayData.last_name}'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Email'
            type='text'
            name='email'
            placeholder='{displayData.email}'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />

          <AvField
            label='Password'
            type='password'
            name='password'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button color='success'>Submit</Button>{" "}
          <Button tag={Link} to='/PatronMain'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
    </div>
  );
}
