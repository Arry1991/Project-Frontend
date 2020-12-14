import React, { useState } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const onChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  // On form submit run this function
  const registerHandler = () => {
    let formData2 = new FormData();
    formData2.append("email", formData.email);
    formData2.append("password", formData.password);
    console.log("clicked");

    let url = "";
    // send login details to database
    if (props.value === "1") {
      url = "/react-backend/patron/verificationLogin.php";
    } else {
      url = "/react-backend/owner/verificationLogin.php";
    }
    axios
      .post(url, formData2)
      // if login details sucessful make auth true and save cookieafafs
      .then((res) => {
        console.log(res);
        props.authHandler(true);
        setMessage("Successful Login");
        if (props.value === "1") {
          props.userValueHandler("1");
        } else {
          props.userValueHandler("2");
        }
        //Cookies.set("Token", res.data.token, { expires: 7 });
      })
      // if login failed do nothing
      .catch((err) => {
        console.log(err);
        setMessage("Invalid Login");
        //props.authHandler(true); //REMOVE LATER
        // Cookies.set("Token", "8s6d9a87s98d69s7atd9sa7d9", { expires: 7 }); //REMOVE LATER
      });
  };

  return (
    <>
      
      <AvForm className='formLogin' onValidSubmit={registerHandler}>
      <h1>Login</h1>
        <FormGroup>
<<<<<<< HEAD:website-test2/src/components/Login/Login.js
          <p>Account type</p>
=======
          <h5>Account type</h5>
>>>>>>> d3a673c6dc03e8e34d7c07ea355226bae32ad883:src/components/Login/Login.js
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio1'
                onChange={props.valueHandler}
                value='1'
              />
              Patron
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio1'
                onChange={props.valueHandler}
                value='2'
              />
              Business Owner
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
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
            type='password'
            name='password'
            label='Password'
            onChange={(e) => {
              onChange(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <Button>Submit</Button>
          <p className={message === "Successful Login" ? "suc" : "fail"}>
            {message}
          </p>
          {message === "Successful Login" && props.value === "2" && (
            <Redirect to='/SelectBusiness' />
          )}
          {message === "Successful Login" && props.value === "1" && (
            <Redirect to='/PatronMain' />
          )}
          {/* {message === "Successful Login" && <Redirect to='/SelectBusiness' />} */}
        </FormGroup>
      </AvForm>
    </>
  );
};

export default Login;
