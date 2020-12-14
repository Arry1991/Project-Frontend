import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import "./business.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD:website-test2/src/components/Business/Business.js
import "./business.css";
=======
>>>>>>> d3a673c6dc03e8e34d7c07ea355226bae32ad883:src/components/Business/Business.js

const Business = (props) => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    temp: "",
    dateOfCase: "",
  });

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("firstName", formData.firstName);
    formData2.append("lastName", formData.lastName);
    formData2.append("email", formData.email);
    formData2.append("date", formData.date);
    formData2.append("temp", formData.temp);
    console.log("clicked");

    const url = "/react-backend/business/patron.php";
    axios

      .post(url, formData2)
      //HERE URL WILL EQUAL BACKEND API LINK (POST API LINK.)
      //  firstName: String(FormData.firstName),
      //  lastName: String(FormData.lastName),
      //  email: String(FormData.email),
      //  password: String(FormData.password),
      //})
      .then((res) => {
        console.log(res);
        setMessage("Added patron");
        toggle();
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to add patron");
        toggle();
      });
  };

  const registerHandler2 = () => {
    let formData3 = new FormData();
    formData3.append("dateOfCase", formData.dateOfCase);
    console.log("clicked");

    const url2 = "/react-backend/business/notification.php";
    axios

      .post(url2, formData3)
      //HERE URL WILL EQUAL BACKEND API LINK (POST API LINK.)
      //  firstName: String(FormData.firstName),
      //  lastName: String(FormData.lastName),
      //  email: String(FormData.email),
      //  password: String(FormData.password),
      //})
      .then((res) => {
        console.log(res);
        //setMessage("Added patron");
        toggle();
      })
      .catch((err) => {
        console.log(err);
        //setMessage("Failed to add patron");
        toggle();
      });
  };

  return (
    <>
      <AvForm className='formBusiness' onValidSubmit={registerHandler}>
        <h1>Sign in patrons</h1>
        <FormGroup>
          <AvField
            label='First Name'
            type='text'
            name='firstName'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Last Name'
            type='text'
            name='lastName'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Email'
            type='email'
            name='email'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            type='date'
            name='date'
            label='Date'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
          <AvField
            label='Temperature'
            type='text'
            name='temp'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <p className={message === "Added patron" ? "suc" : "fail"}>
            {message}
          </p>
          <Button>Submit</Button>
          <Button tag={Link} to='/BusinessMain'>
            Back
          </Button>{" "}
        </FormGroup>
      </AvForm>
      {/* <AvForm className='form' onValidSubmit={registerHandler2}>
        <FormGroup>
          <AvField
            label='Date of Reported Case'
            type='date'
            name='dateOfCase'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button>Report</Button>
        </FormGroup>
      </AvForm> */}
    </>
  );
};

export default Business;
