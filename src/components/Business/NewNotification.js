import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const NewNotification = () => {
  let url = "";

  const [mail, setMail] = useState(null);
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
    start_date: "",
    end_date: "",
  });

  const registrationHandler = () => {
    let newMessage = new FormData();
    newMessage.append("subject", messageData.subject);
    newMessage.append("message", messageData.message);
    newMessage.append("start_date", messageData.start_date);
    newMessage.append("end_date", messageData.end_date);

    if (mail === "1") {
      url = "/react-backend/business/sendemail/messageByContact.php";
    } else {
      url = "/react-backend/business/sendemail/messageByDate.php";
    }
    axios

      .post(url, newMessage)
      .then((res) => {
        console.log(mail);
        console.log(res);
      })
      .catch((err) => {
        console.log(mail);
        console.log(err);
      });
  };

  const onChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
    console.log(messageData);
  };

  const onChangeMailHandler = (e) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <AvForm className='form' onValidSubmit={registrationHandler}>
      {/* <Label>
        <h1>New Message</h1>
      </Label>
      <FormGroup>
        <Label>Subject</Label>
        <Input
          type='text'
          name='subject'
          onChange={(e) => {
            onChange(e);
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label for='exampleText'>Message</Label>
        <Input
          type='textarea'
          name='message'
          onChange={(e) => {
            onChange(e);
          }}
        />
      </FormGroup>

      <FormGroup>
        <Label>Date</Label>
        <Input
          type='date'
          name='selected_date'
          onChange={(e) => {
            onChange(e);
          }}
        /> */}

      <FormGroup check>
        <h1>Send an email to patrons</h1>
        <AvField
          label='Subject'
          type='text'
          name='subject'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <AvField
          type='textarea'
          name='message'
          label='Message'
          onChange={(e) => {
            onChange(e);
          }}
        />
        <FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio1'
                onChange={onChangeMailHandler}
                value='1'
              />
              Send to all patrons
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio1'
                onChange={onChangeMailHandler}
                value='2'
              />
              Send to all patrons between two dates
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <AvField
            label='Start Date'
            type='date'
            name='start_date'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <AvField
            label='End Date'
            type='date'
            name='end_date'
            onChange={(e) => {
              onChange(e);
            }}
          />
        </FormGroup>
      </FormGroup>

      <FormGroup>
        {" "}
        <Button color='success'>Send</Button>{" "}
        <Button tag={Link} to='/BusinessMain'>
          Back
        </Button>{" "}
      </FormGroup>
    </AvForm>
  );
};

export default NewNotification;
